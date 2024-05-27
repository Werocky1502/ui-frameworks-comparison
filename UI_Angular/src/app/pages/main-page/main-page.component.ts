import { Component, OnInit } from "@angular/core";

import { IFinanceRecord } from "../../models/financeRecord";
import { FinanceRecordsService } from "../../services/finance-records.service";
import { RandomFinanceRecordService } from "../../services/random-finance-record.service";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrl: "./main-page.component.css"
})
export class MainPageComponent implements OnInit {
  totalBalance = 0;
  records: IFinanceRecord[] = [];

  constructor(
    private financeRecordsService: FinanceRecordsService,
    private randomFinanceRecordService: RandomFinanceRecordService
  ) { }

  ngOnInit(): void {
    this.financeRecordsService
      .getAllFinanceRecords()
      .subscribe((records: IFinanceRecord[]) => {
        this.records = records.sort(this.dateSortingMethod);
        this.updateTotalBalance(records);
      });
  }

  updateTotalBalance(records: IFinanceRecord[]) {
    const recordsSum = records.reduce((sum, record) => sum + record.amount, 0);
    this.totalBalance = recordsSum;
  }

  addRandomRecordClickHandler(event: MouseEvent) {
    const randomRecord = this.randomFinanceRecordService.generateRandomFinanceRecord();

    this.financeRecordsService
      .postFinanceRecord(randomRecord)
      .subscribe(() => {
        this.records.unshift(randomRecord);
        this.updateTotalBalance(this.records);
      });
  }

  deleteRecordClickHandler(recordId: string) {
    this.financeRecordsService
      .deleteFinanceRecord(recordId)
      .subscribe(() => {
        this.records = this.records.filter(record => record.id !== recordId);
        this.updateTotalBalance(this.records);
      });
  }

  private dateSortingMethod = (left: IFinanceRecord, right: IFinanceRecord) => {
    const leftValue = left.date.getTime();
    const rightValue = right.date.getTime();

    return rightValue - leftValue;
  }
}
