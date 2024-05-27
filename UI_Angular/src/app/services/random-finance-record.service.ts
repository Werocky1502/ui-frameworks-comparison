import { Injectable } from '@angular/core';

import { RandomDescriptionService } from './random-description.service';
import { IFinanceRecord } from '../models/financeRecord';

@Injectable({
  providedIn: 'root'
})
export class RandomFinanceRecordService {

  constructor(private randomDescriptionService: RandomDescriptionService) { }

  generateRandomFinanceRecord(): IFinanceRecord {
    const randomAmount = Math.round(Math.random() * 200 - 100);
    const randomDescription = randomAmount > 0
      ? this.randomDescriptionService.getRandomPositiveDescription()
      : this.randomDescriptionService.getRandomNegativeDescription();

    const randomRecord: IFinanceRecord = {
      id: crypto.randomUUID(),
      date: new Date(),
      amount: randomAmount,
      description: randomDescription,
    };

    return randomRecord;
  }
}
