import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'yes.no.maybe.app',
  appName: 'yes-no-maybe-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
