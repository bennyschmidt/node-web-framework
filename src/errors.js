module.exports = {
  BAD_REQUEST: {
    error: {
      code: 400,
      message: 'Bad request.'
    }
  },
  UNAUTHORIZED: {
    error: {
      code: 401,
      message: 'Unauthorized.'
    }
  },
  NOT_ALLOWED_ERROR: {
    error: {
      code: 403,
      message: 'Not allowed.'
    }
  },
  NOT_FOUND_ERROR: {
    error: {
      code: 404,
      message: 'Not found.'
    }
  },
  UNPROCESSABLE_REQUEST: {
    error: {
      code: 422,
      message: 'Unprocessable.'
    }
  },
  SERVER_ERROR: {
    error: {
      code: 500,
      message: 'Server error.'
    }
  }
};
