import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFinanceRecord } from '../../models/financeRecord';

@Component({
  selector: 'app-finance-record',
  templateUrl: './finance-record.component.html',
  styleUrl: './finance-record.component.css'
})
export class FinanceRecordComponent {
  @Input() record: IFinanceRecord = {} as IFinanceRecord;

  @Output() onDeleteClick = new EventEmitter<string>();

  onDeleteClickHandler(event: MouseEvent) {
    this.onDeleteClick.emit(this.record.id);
  }
}
