type Environment = {
    apiBaseUrl: string;
    envName: 'staging' | 'production';
  };
  
  const staging: Environment = {
    apiBaseUrl: 'http://localhost:3000',
    envName: 'staging',
  };
  
  const production: Environment = {
    apiBaseUrl: 'https://api.production.com',
    envName: 'production',
  };
  
  export const environments = {
    staging,
    production,
  };