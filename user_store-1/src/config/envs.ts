import 'dotenv/config';
import * as env from 'env-var';

export const envs = {

  PORT: env.get('PORT').required().asPortNumber(),

  SEND_EMAIL: env.get('SEND_EMAIL').required().asBool(),

  MONGO_URL: env.get('MONGO_URL').required().asString(),
  MONGO_DB: env.get('MONGO_DB').required().asString(),
  MONGO_USER: env.get('MONGO_USER').required().asString(),
  MONGO_PASS: env.get('MONGO_PASS').required().asString(),
  
  MAILER_EMAIL: env.get('MAILER_EMAIL').required().asEmailString(),
  MAILER_SERVICE: env.get('MAILER_SERVICE').required().asString(),
  MAILER_SECRET_KEY: env.get('MAILER_SECRET_KEY').required().asString(),

  JWT_SEED: env.get('JWT_SEED').required().asString(),
  WEBSERVICE_URL: env.get('WEBSERVICE_URL').required().asString(),

}

