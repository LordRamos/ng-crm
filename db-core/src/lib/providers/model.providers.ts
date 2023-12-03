import { ModelRepository } from '../constants/model-repository';
import { AcquisitionChannel } from '../models/acquisition-channel.model';
import { Country } from '../models/country.model';
import { Customer } from '../models/customer.model';
import { Sale } from '../models/sale.model';
import { User } from '../models/user.model';

export const modelProviders = [
  {
    provide: ModelRepository.USER_REPOSITORY,
    useValue: User,
  },
  {
    provide: ModelRepository.CUSTOMER_REPOSITORY,
    useValue: Customer,
  },
  {
    provide: ModelRepository.COUNTRY_REPOSITORY,
    useValue: Country,
  },
  {
    provide: ModelRepository.ACQUISITION_CHANNEL_REPOSITORY,
    useValue: AcquisitionChannel,
  },
  {
    provide: ModelRepository.SALE_REPOSITORY,
    useValue: Sale,


  }
  
];
