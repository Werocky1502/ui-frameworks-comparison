using System.Net.Http.Json;
using UI_Blazor.Models;

namespace UI_Blazor.Services
{
    public class FinanceRecordsService
    {
        private readonly HttpClient httpClient;

        private const string financeRecordsRoute = "/finance/records";

        public FinanceRecordsService(HttpClient httpClient)
        {
            this.httpClient = httpClient;
        }

        public async Task<IEnumerable<FinanceRecordModel>> GetAllFinanceRecords()
        {
            var financeRecords = await httpClient.GetFromJsonAsync<FinanceRecordModel[]>(financeRecordsRoute);

            if (financeRecords == null)
            {
                financeRecords = Array.Empty<FinanceRecordModel>();
            }

            return financeRecords.ToList();
        }

        public async Task PostFinanceRecord(FinanceRecordModel record)
        {
            await httpClient.PostAsJsonAsync(financeRecordsRoute, record);
        }

        public async Task DeleteFinanceRecord(Guid recordId)
        {
            await httpClient.DeleteAsync($"{financeRecordsRoute}/{recordId}");
        }
    }
}
