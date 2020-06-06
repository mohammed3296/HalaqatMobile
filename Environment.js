const ENV = {
  dev: {
    apiUrl: 'http://itqan.halaqat.online',
    oAuthConfig: {
      issuer: 'http://itqan.halaqat.online',
      clientId: 'Halaqat_App',
      clientSecret: '1q2w3e*',
      scope: 'Halaqat',
    },
    localization: {
      defaultResourceName: 'Halaqat',
    },
  },
  prod: {
    apiUrl: 'http://itqan.halaqat.online',
    oAuthConfig: {
      issuer: 'http://itqan.halaqat.online',
      clientId: 'Halaqat_App',
      clientSecret: '1q2w3e*',
      scope: 'Halaqat',
    },
    localization: {
      defaultResourceName: 'Halaqat',
    },
  },
};

export const getEnvVars = () => {
  // eslint-disable-next-line no-undef
  return __DEV__ ? ENV.dev : ENV.prod;
};
