using Microsoft.AspNetCore.Components;
using UI_Blazor_WebApp.Models;

namespace UI_Blazor_WebApp.Components.Components
{
    public partial class FinanceRecord
    {
        [Parameter]
        public FinanceRecordModel Record { get; set; }

        [Parameter]
        public EventCallback<FinanceRecordModel> OnDelete { get; set; }

        private async Task DeleteRecord()
        {
            await OnDelete.InvokeAsync(Record);
        }
    }
}
