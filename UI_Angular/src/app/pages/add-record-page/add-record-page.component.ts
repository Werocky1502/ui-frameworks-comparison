import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

import { routesPaths } from "../routes";
import { FinanceRecordsService } from "../../services/finance-records.service";
import { IFinanceRecord } from "../../models/financeRecord";

@Component({
  selector: "app-add-record-page",
  templateUrl: "./add-record-page.component.html",
  styleUrl: "./add-record-page.component.css"
})
export class AddRecordPageComponent implements OnInit {
  financeRecordForm: FormGroup;

  constructor(private router: Router, private financeRecordService: FinanceRecordsService) {}

  ngOnInit(): void {
    const initialDate = new Date().toISOString().split('T')[0];

    this.financeRecordForm = new FormGroup({
      description: new FormControl(""),
      amount: new FormControl(0),
      date: new FormControl(initialDate),
    });
  }

  onSubmitHandler() {
    const newFinanceRecord: IFinanceRecord = {
      ...this.financeRecordForm.value,
      id: crypto.randomUUID(),
      date: new Date(this.financeRecordForm.value.date),
    };

    this.financeRecordService
      .postFinanceRecord(newFinanceRecord)
      .subscribe(() => this.router.navigate([routesPaths.main]));
  }
}
