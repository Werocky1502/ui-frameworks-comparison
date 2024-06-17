using Microsoft.AspNetCore.Components;
using UI_Blazor.Mappers;
using UI_Blazor.Models;
using UI_Blazor.Services;
using static UI_Blazor.Pages.RoutesConstants;

namespace UI_Blazor.Pages
{
    public partial class AddRecord
    {
        [Inject]
        public NavigationManager NavigationManager { get; set; }

        [Inject]
        public FinanceRecordsService FinanceRecordsService { get; set; }

        [Inject]
        public FinanceRecordMapper FinanceRecordMapper { get; set; }

        private FinanceRecordFormModel formRecord;

        protected override void OnInitialized()
        {
            formRecord = new FinanceRecordFormModel()
            {
                Amount = "0",
                Date = DateTime.Now.ToString("yyyy-MM-dd")
            };
        }

        private async Task OnSubmitHandler()
        {
            var financeRecord = FinanceRecordMapper.FromFormModel(formRecord);

            if (financeRecord == null)
            {
                return;
            }

            await FinanceRecordsService.PostFinanceRecord(financeRecord);

            NavigationManager.NavigateTo(AppRoutes.Main);
        }
    }
}
