import { IFinanceRecord } from '../../api';

export const dateSortingMethod = (left: IFinanceRecord, right: IFinanceRecord) => {
    const leftValue = left.date.getTime();
    const rightValue = right.date.getTime();

    return rightValue - leftValue;
}
