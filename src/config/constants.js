import dotenv from 'dotenv';
dotenv.config();

const JWT = {
  SECRET_KEY: process.env.ACCESS_TOKEN_SECRET,
  EXPIRES_IN: 10800,
};

const REFRESH_TOKEN = {
  LENGTH: 64
};

const ERRORS = {
  INVALID_REQUEST: 'Invalid request',
  INVALID_ACCESS_TOKEN: 'Invalid access token',
  INVALID_REFRESH_TOKEN: 'Invalid refresh token',
  TOKEN_EXPIRED: 'Access token expired',
  LOGIN: 'Login failed',
  REGISTRATION: 'Registration failed'
};

const SUCCESS_ITA = {
  DEFAULT: 'Operazione effettuata con successo',
  REGISTER: 'Registrazione avvenuta con successo!',
  PAYMENT: 'Pagamento avvenuto con successo!',
  CONNECTION: 'Connessione andata a buon fine!',
  LOGIN: "Login effettuato!"
}

const SUCCESS_EN = {
  DEFAULT: 'Operation succesfully complete!',
  REGISTER: 'Registration was successful',
  PAYMENT: 'Payment successful',
  CONNECTION: 'Connection successful'
}

const PAYPAL = {
  CLIENT_ID: process.env.CLIENT_ID,
  SECRET: process.env.PAYPAL_SECRET,
  API: 'https://api-m.sandbox.paypal.com'
}

const AWS = {
  ACCESS_KEY_ID: process.env.ACCESS_KEY_ID,
  ACCESS_SECRET_KEY: process.env.ACCESS_SECRET_KEY,
  BUCKET_NAME: 'mycodabucket',
  BUCKET_REGION: 'eu-central-1',
  CLOUDFRONT_ACCESS_KEY_ID: process.env.CF_ACCESS_KEY_ID,
  CLOUDFRONT_PRIVATE_KEY: `-----BEGIN RSA PRIVATE KEY-----\n${process.env.CF_PRIVATE_KEY}\n-----END RSA PRIVATE KEY-----`,
  CLOUDFRONT_PATH: process.env.CF_PATH
}

const REG = {
  EMAIL: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}

export {
  JWT,
  REFRESH_TOKEN,
  ERRORS,
  SUCCESS_ITA,
  SUCCESS_EN,
  PAYPAL,
  AWS,
  REG
};
