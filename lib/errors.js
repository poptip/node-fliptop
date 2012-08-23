module.exports = {
  '200': {
    type: 'OK',
    message: 'Email(s) were processed successfully, and results were found. (Emails with no results are excluded from the response.)'
  },

  '202': {
    type: 'Data not available',
    message: 'Email(s) were processed successfully, and results were found. (Emails with no results are excluded from the response.)'
  },

  '400': {
    type: 'Bad request',
    message: 'The request is invalid or has incorrect syntax.'
  },

  '403': {
    type: 'Developer over rate',
    message: 'Developer over rate.'
  },

  '404': {
    type: 'Page not found',
    message: 'Email(s) were processed successfully, and no results were found.'
  },

  '500': {
    type: 'Interval Server error',
    message: '(rare) There was an unexpected server error. If you encounter this repeatedly, please email api@fliptop.com.'
  }

};
