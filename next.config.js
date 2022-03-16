const withTM = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@fullcalendar/daygrid',
  '@fullcalendar/interaction',
  '@fullcalendar/list',
  '@fullcalendar/react',
  '@fullcalendar/timegrid',
  '@fullcalendar/timeline',
]);

module.exports = withTM({
  swcMinify: false,
  trailingSlash: true,
  crossOrigin: 'anonymous',
  env: {
    HOST_API_KEY: '',
    // AWS COGNITO AUTH
    // AWS_COGNITO_USER_POOL_ID: '',
    // AWS_COGNITO_CLIENT_ID: '',

    // AUTH0 AUTH
    // AUTH0_CLIENT_ID: '',
    // AUTH0_DOMAIN: '',
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      },
    ]
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
});



