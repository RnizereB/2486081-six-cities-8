import { Container } from 'inversify';
import { OfferService } from './offer-servise.interface.js';
import { Component } from '../../types/component.enum.js';
import { DefaultOfferService } from './default-offer.service.js';
import { types } from '@typegoose/typegoose';
import { OfferEntity, OfferModel } from './offer.entity.js';


export function createOfferContainer() {
  const container = new Container();

  container.bind<OfferService>(Component.OfferService).to(DefaultOfferService).inSingletonScope();
  container.bind<types.ModelType<OfferEntity>>(Component.OfferModul).toConstantValue(OfferModel);

  return container;
}
