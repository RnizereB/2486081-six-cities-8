import { RestApplication } from './index.js';
import { Config, RestConfig, RestSchema } from './../shared/libs/config/index.js';
import { Logger, PinoLogger} from './../shared/libs/logger/index.js';
import { Container } from 'inversify';
import { Component } from './../shared/types/index.js';
import { DatabaseClient, MongoDatabaseClient } from './../shared/libs/database-client/index.js';
import { AppExceptionFilter, ExceptionFilter, ValodationExceptionFilter, HttpErrorExceptionFilter, PathTransformer } from '../shared/libs/rest/index.js';

export function createReasApplicationContainer() {
  const container = new Container();

  container.bind<RestApplication>(Component.RestApplication).to(RestApplication).inSingletonScope();
  container.bind<Logger>(Component.Logger).to(PinoLogger).inSingletonScope();
  container.bind<Config<RestSchema>>(Component.Config).to(RestConfig).inSingletonScope();
  container.bind<DatabaseClient>(Component.DatabaseClient).to(MongoDatabaseClient).inSingletonScope();
  container.bind<ExceptionFilter>(Component.ExceptionFilter).to(AppExceptionFilter).inSingletonScope();
  container.bind<ExceptionFilter>(Component.HttpExceptionFilter).to(HttpErrorExceptionFilter).inSingletonScope();
  container.bind<ExceptionFilter>(Component.ValidationExceptionFilter).to(ValodationExceptionFilter).inSingletonScope();
  container.bind<PathTransformer>(Component.PathTransformer).to(PathTransformer).inSingletonScope();

  return container;
}
