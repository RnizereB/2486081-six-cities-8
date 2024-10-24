import convict from 'convict';
import validator from 'convict-format-with-validator';

convict.addFormats(validator);

export type RestSchema = {
  PORT: number,
  SALT: string,
  HOST_DB: string,
}

export const configRestSchema = convict<RestSchema>({
  PORT: {
    doc: 'Port for incoming connections',
    format: 'port',
    env: 'PORT',
    default: 4000
  },
  SALT: {
    doc: 'Salt for password hash',
    format: String,
    env: 'SALT',
    default: null
  },
  HOST_DB: {
    doc: 'IP address of the database server (MongoDB)',
    format: 'ipaddress',
    env: 'HOST_DB',
    default: '127.0.0.1'
  }
});
