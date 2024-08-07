using Microsoft.AspNetCore.Components;
using UI_Blazor.Models;
using UI_Blazor.Services;
using UI_Blazor.StateContainers;

namespace UI_Blazor.Pages
{
    public partial class Main
    {
        [Inject]
        public FinanceRecordsService FinanceRecordsService { get; set; }

        [Inject]
        public RandomFinanceRecordService RandomFinanceRecordService { get; set; }

        [Inject]
        public FinanceRecordsStateContainer FinanceRecordsStateContainer { get; set; }

        protected override async Task OnInitializedAsync()
        {
            var financeRecords = await FinanceRecordsService.GetAllFinanceRecords();

            FinanceRecordsStateContainer.OnChange += StateHasChanged;
            FinanceRecordsStateContainer.FinanceRecords = financeRecords.ToList();
        }

        public void Dispose()
        {
            FinanceRecordsStateContainer.OnChange -= StateHasChanged;
        }

        private async void AddRandomRecord()
        {
            var randomRecord = RandomFinanceRecordService.GenerateRandomFinanceRecord();

            await FinanceRecordsService.PostFinanceRecord(randomRecord);

            FinanceRecordsStateContainer.AddRecord(randomRecord);
        }

        private async Task DeleteRecord(FinanceRecordModel financeRecord)
        {
            await FinanceRecordsService.DeleteFinanceRecord(financeRecord.Id);

            FinanceRecordsStateContainer.DeleteRecord(financeRecord);
        }
    }
}
