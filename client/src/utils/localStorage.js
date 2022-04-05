export const getSavedWatchlistIds = () => {
    const savedWatchlistIds = localStorage.getItem('saved_watchlist')
        ? JSON.parse(localStorage.getItem('saved_watchlist'))
        : [];

    return savedWatchlistIds;
};

export const getSavedPortfolioIds = () => {
    const savedPortfolioIds = localStorage.getItem('saved_portfolio')
        ? JSON.parse(localStorage.getItem('saved_portfolio'))
        : [];

    return savedPortfolioIds;
};


export const saveWatchlistIds = (watchlistIdArr) => {
    if (watchlistIdArr.length) {
        localStorage.setItem('saved_watchlist', JSON.stringify(watchlistIdArr));
    } else {
        localStorage.removeItem('saved_watchlist');
    }
};

export const savePortfolioIds = (portfolioIdArr) => {
    if (portfolioIdArr.length) {
        localStorage.setItem('saved_portfolio', JSON.stringify(portfolioIdArr));
    } else {
        localStorage.removeItem('saved_portfolio');
    }
};

export const removeWatchlistId = (watchlistId) => {
    const savedWatchlistIds = localStorage.getItem('saved_watchlist')
        ? JSON.parse(localStorage.getItem('saved_watchlist'))
        : null;

    if (!savedWatchlistIds) {
        return false;
    }

    const updatedSavedWatchlistIds = savedWatchlistIds?.filter((savedWatchlistId) => savedWatchlistId !== watchlistId);
    localStorage.setItem('saved_watchlist', JSON.stringify(updatedSavedWatchlistIds));

    return true;
};

export const removePortfolioId = (portfolioId) => {
    const savedPortfolioIds = localStorage.getItem('saved_portfolio')
        ? JSON.parse(localStorage.getItem('saved_portfolio'))
        : null;

    if (!savedPortfolioIds) {
        return false;
    }
    const updatedSavedPortfolioIds = savedPortfolioIds?.filter((savedPortfolioId) => savedPortfolioId !== portfolioId);
    localStorage.setItem('saved_portfolio', JSON.stringify(updatedSavedPortfolioIds));

    return true;
};