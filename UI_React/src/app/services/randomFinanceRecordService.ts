import RandomDescriptionService from "./randomDescriptionService";

import { IFinanceRecord } from "../api";

const RandomFinanceRecordService = {
    generateRandomFinanceRecord(): IFinanceRecord {
        const randomAmount = Math.round(Math.random() * 200 - 100);
        const randomDescription = randomAmount > 0
          ? RandomDescriptionService.getRandomPositiveDescription()
          : RandomDescriptionService.getRandomNegativeDescription();

        const randomRecord: IFinanceRecord = {
          id: crypto.randomUUID(),
          date: new Date(),
          amount: randomAmount,
          description: randomDescription,
        };

        return randomRecord;
      }
}

export default RandomFinanceRecordService;
