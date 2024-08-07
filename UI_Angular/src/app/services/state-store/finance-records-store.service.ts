import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IFinanceRecord } from '../../models/financeRecord';

@Injectable({
  providedIn: 'root'
})
export class FinanceRecordsStoreService {
  private readonly totalBalanceSubject = new BehaviorSubject<number>(0);
  private readonly financeRecordsSubject = new BehaviorSubject<IFinanceRecord[]>([]);

  readonly totalBalance$ = this.totalBalanceSubject.asObservable();
  readonly financeRecords$ = this.financeRecordsSubject.asObservable();

  get totalBalance(): number {
    return this.totalBalanceSubject.getValue();
  }

  private set totalBalance(value: number) {
    this.totalBalanceSubject.next(value);
  }

  get financeRecords(): IFinanceRecord[] {
    return this.financeRecordsSubject.getValue();
  }

  set financeRecords(value: IFinanceRecord[]) {
    const sortedValue = value.sort(this.dateSortingMethod);
    const recordsSum = value.reduce((sum, record) => sum + record.amount, 0);

    this.totalBalanceSubject.next(recordsSum);
    this.financeRecordsSubject.next(sortedValue);
  }

  addFinanceRecord(record: IFinanceRecord) {
    this.financeRecords = [...this.financeRecords, record];
  }

  removeFinanceRecord(recordId: string) {
    this.financeRecords = this.financeRecords.filter(record => record.id !== recordId);
  }

  private dateSortingMethod = (left: IFinanceRecord, right: IFinanceRecord) => {
    const leftValue = left.date.getTime();
    const rightValue = right.date.getTime();

    return rightValue - leftValue;
  }
}
