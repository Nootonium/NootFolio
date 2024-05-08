export const getEnvironmentVariables = () => {
  return {
    API_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  };
};
