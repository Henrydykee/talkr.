import { environments } from "./environent";



class Config {
  private static instance: Config;
  public currentEnv: typeof environments.staging;

  private constructor() {
    this.currentEnv = __DEV__ ? environments.staging : environments.production;
  }

  public static getInstance(): Config {
    if (!Config.instance) {
      Config.instance = new Config();
    }
    return Config.instance;
  }

  public get apiBaseUrl(): string {
    return this.currentEnv.apiBaseUrl;
  }
}

export default Config.getInstance();