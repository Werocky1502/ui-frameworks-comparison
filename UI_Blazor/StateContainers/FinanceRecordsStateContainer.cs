using UI_Blazor.Models;

namespace UI_Blazor.StateContainers
{
    public class FinanceRecordsStateContainer
    {
        private int totalBalance = 0;
        private List<FinanceRecordModel> financeRecords = [];

        public int TotalBalance
        {
            get => totalBalance;
        }

        public List<FinanceRecordModel> FinanceRecords
        {
            get => financeRecords;
            set
            {
                financeRecords = value.OrderByDescending(x => x.Date).ToList();
                totalBalance = CalculateTotalBalance(value);

                NotifyStateChanged();
            }
        }

        public void AddRecord(FinanceRecordModel record)
        {
            financeRecords.Add(record);
            financeRecords = financeRecords.OrderByDescending(x => x.Date).ToList();

            totalBalance = CalculateTotalBalance(financeRecords);

            NotifyStateChanged();
        }

        public void DeleteRecord(FinanceRecordModel record)
        {
            financeRecords.Remove(record);
            financeRecords = financeRecords.OrderByDescending(x => x.Date).ToList();

            totalBalance = CalculateTotalBalance(financeRecords);

            NotifyStateChanged();
        }

        public event Action OnChange;

        private void NotifyStateChanged() => OnChange?.Invoke();

        private static int CalculateTotalBalance(List<FinanceRecordModel> records)
        {
            var totalBalance = records.Sum(r => r.Amount);

            return totalBalance;
        }
    }
}
