export const constants = {
  storageKey: {
    loggedUser: 'logged-user'
  },

  userNameMaxLength: 25,

  customValidationErrors: {
    userNameMaxLength: {
      key: 'maxlength',
      message: 'Name cannot be more than 25 characters long.'
    },
    passwordMismatch: {
      key: 'passwordMismatch',
      message: 'Password mismatch.'
    }
  }
};
