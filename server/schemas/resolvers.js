const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

                return userData
            }
            throw new AuthenticationError('You need to be logged in!');
        }
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
        addUser: async (parent, args) => {
            const user = await User.create(args)
            const token = signToken(user);
            return { token, user };
        },
        addWatchlist: async (parent, args, context) => {

            if (context.user) {
                const watchlistItem = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { watchlist: args.symbol } },
                    { new: true }
                )

                return watchlistItem;
            }
            throw new AuthenticationError('Incorrect credentials');
        },
        removeWatchlist: async (parent, args, context) => {
            if (context.user) {
                const watchlistItem = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: {watchlist: args._id} },
                    { new: true }
                )
                return watchlistItem;
            }
            throw new AuthenticationError('Incorrect credentials');
        },
        addPortfolio: async (parent, args, context) => {

            if (context.user) {
                const newPortfolio = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $push: { portfolio: args.portfolioData }},
                    { new: true }
                )
                return newPortfolio
            }
            throw new AuthenticationError('Incorrect credentials');
        },
        removePortfolio: async (parent, args, context) => {
            if (context.user) {
                const removePortfolio = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: {portfolio: args._id} },
                    { new: true }
                )
                return removePortfolio;
            }
            throw new AuthenticationError('Incorrect credentials');
        }
    }
}

module.exports = resolvers