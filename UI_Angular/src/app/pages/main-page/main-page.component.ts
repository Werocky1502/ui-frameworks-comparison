import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { IFinanceRecord } from "../../models/financeRecord";
import { FinanceRecordsService } from "../../services/finance-records.service";
import { RandomFinanceRecordService } from "../../services/random-finance-record.service";
import { FinanceRecordsStoreService } from "../../services/state-store/finance-records-store.service";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrl: "./main-page.component.css"
})
export class MainPageComponent implements OnInit {
  totalBalance$: Observable<number>;
  financeRecords$: Observable<IFinanceRecord[]>;

  constructor(
    private financeRecordsStoreService: FinanceRecordsStoreService,
    private financeRecordsService: FinanceRecordsService,
    private randomFinanceRecordService: RandomFinanceRecordService
  ) {
    this.totalBalance$ = this.financeRecordsStoreService.totalBalance$;
    this.financeRecords$ = this.financeRecordsStoreService.financeRecords$;
  }

  ngOnInit(): void {
    this.financeRecordsService
      .getAllFinanceRecords()
      .subscribe((records: IFinanceRecord[]) => {
        this.financeRecordsStoreService.financeRecords = records;
      });
  }

  addRandomRecordClickHandler(event: MouseEvent) {
    const randomRecord = this.randomFinanceRecordService.generateRandomFinanceRecord();

    this.financeRecordsService
      .postFinanceRecord(randomRecord)
      .subscribe(() => {
        this.financeRecordsStoreService.addFinanceRecord(randomRecord);
      });
  }

  deleteRecordClickHandler(recordId: string) {
    this.financeRecordsService
      .deleteFinanceRecord(recordId)
      .subscribe(() => {
        this.financeRecordsStoreService.removeFinanceRecord(recordId);
      });
  }
}
