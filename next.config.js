/** @type {import('next').NextConfig} */

module.exports = (phase, { defaultConfig }) => {
  // Check if the environment is for local development or production export
  const isDev = process.env.NODE_ENV === 'development';

  if (isDev) {
    return {
      ...defaultConfig,
      output: "standalone",
    };
  }

  // Configuration for production export
  return {
    ...defaultConfig,
    output: "export",
    // Add basePath
    basePath: '/eudr-pilot', 
    assetPrefix: '/eudr-pilot/'
  };
};
