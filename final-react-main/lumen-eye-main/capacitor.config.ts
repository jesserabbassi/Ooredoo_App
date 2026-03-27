import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.OoredooApp.app',
  appName: 'Ooredoo App',
  webDir: 'build',
  server: {
    url: 'http://192.168.56.1:8081', // replace with your PC IP
    cleartext: true
  }
};

export default config;