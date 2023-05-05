const config = {
  passport: {
    secret: 'TOP_SECRET',
    expiresIn: 10000,
  },
  env: {
    mongoDB:
      'mongodb+srv://praneetbang:Praneet24@cluster0.ljcandg.mongodb.net/CMPE273?retryWrites=true&w=majority',
    S3_ACCESS_KEY: '',
    S3_ACCESS_SECRET: '',
  },
};
const underscoreId = '_id';

module.exports = {
  config,
  underscoreId,
};
