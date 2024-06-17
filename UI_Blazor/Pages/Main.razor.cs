using Microsoft.AspNetCore.Components;
using UI_Blazor.Models;
using UI_Blazor.Services;

namespace UI_Blazor.Pages
{
    public partial class Main
    {
        [Inject]
        public FinanceRecordsService FinanceRecordsService { get; set; }

        [Inject]
        public RandomFinanceRecordService RandomFinanceRecordService { get; set; }

        private List<FinanceRecordModel> records;
        private int totalBalance = 0;

        protected override async Task OnInitializedAsync()
        {
            var financeRecords = await FinanceRecordsService.GetAllFinanceRecords();
            RefreshRecords(financeRecords);
        }

        private async void AddRandomRecord()
        {
            var randomRecord = RandomFinanceRecordService.GenerateRandomFinanceRecord();

            await FinanceRecordsService.PostFinanceRecord(randomRecord);

            records.Add(randomRecord);
            RefreshRecords(records);
        }

        private async Task DeleteRecord(FinanceRecordModel financeRecord)
        {
            await FinanceRecordsService.DeleteFinanceRecord(financeRecord.Id);

            records.Remove(financeRecord);
            RefreshRecords(records);
        }

        private void RefreshRecords(IEnumerable<FinanceRecordModel> financeRecords)
        {
            records = financeRecords.OrderByDescending(x => x.Date).ToList();
            totalBalance = records.Sum(r => r.Amount);
            StateHasChanged();
        }
    }
}
