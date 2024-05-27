import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { IFinanceRecord } from '../models/financeRecord';

export const financeApiHost = 'https://localhost:8080';
export const financeRecordsRoute = '/finance/records';

@Injectable({
  providedIn: 'root'
})
export class FinanceRecordsService {

  constructor(private httpClient: HttpClient) { }

  getAllFinanceRecords(): Observable<IFinanceRecord[]> {
    return this.httpClient
      .get<IFinanceRecord[]>(`${financeApiHost}${financeRecordsRoute}`)
      .pipe(
        map((records: IFinanceRecord[]) => records.map((record: IFinanceRecord) => (
          {
            ...record,
            date: new Date(record.date),
          }
        ))),
      );
  }

  postFinanceRecord(record: IFinanceRecord): Observable<Object> {
    return this.httpClient.post(`${financeApiHost}${financeRecordsRoute}`, record);
  };

  deleteFinanceRecord = (recordId: string): Observable<Object> => {
    return this.httpClient.delete(`${financeApiHost}${financeRecordsRoute}/${recordId}`);
  };
}
