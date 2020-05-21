import flatten from 'flat';

const messages = {
  homepage: {
    welcome: 'اهلا',
    subscribeHeader: 'Subscribe Now',
  },
  user: {
    hello: 'Hi {username}, how are you?',
    signIn: 'Please, <em>sign in</em>',
  },
};

export default {
  messages: { ...flatten(messages) },
  locale: 'ar-AE',
};
