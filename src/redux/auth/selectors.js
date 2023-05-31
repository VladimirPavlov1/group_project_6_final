export const selectAuth = state => {
  const { isLoggedIn, token } = state.auth;
  return { isLoggedIn, token };
};

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectPets = state => state.auth.pets;

export const selectIsLoading = state => state.auth.isLoading;

export const selectError = state => state.auth.error;

export const selectToken = state => state.auth.token;
