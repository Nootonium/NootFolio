const config = {
  development: {
    apiBaseUrl: 'http://localhost:3000',
  },
  production: {
    apiBaseUrl: 'https://your-production-url.com',
  },
};
const env = process.env.NODE_ENV as 'development' | 'production' | undefined;
export default config[env ?? 'development'];
