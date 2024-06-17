using Microsoft.AspNetCore.Components;
using UI_Blazor.Models;

namespace UI_Blazor.Components
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
