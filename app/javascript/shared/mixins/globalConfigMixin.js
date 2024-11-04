export const useInstallationName = (str, installationName) => {
  if (str && installationName) {
    return str.replace(/SyncYou/g, installationName);
  }
  return str;
};

export default {
  methods: {
    useInstallationName,
  },
};
