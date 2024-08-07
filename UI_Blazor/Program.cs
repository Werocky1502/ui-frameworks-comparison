using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using UI_Blazor.Mappers;
using UI_Blazor.Services;
using UI_Blazor.StateContainers;

namespace UI_Blazor
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebAssemblyHostBuilder.CreateDefault(args);

            builder.RootComponents.Add<App>("#root");
            builder.RootComponents.Add<HeadOutlet>("head::after");

            var financeApiHost = "https://localhost:8080";

            builder.Services.AddScoped(sp => new HttpClient { 
                BaseAddress = new Uri(financeApiHost) 
            });
            builder.Services.AddScoped<FinanceRecordsService>();

            builder.Services.AddSingleton<RandomDescriptionService>();
            builder.Services.AddSingleton<RandomFinanceRecordService>();

            builder.Services.AddSingleton<FinanceRecordMapper>();

            builder.Services.AddSingleton<FinanceRecordsStateContainer>();

            await builder.Build().RunAsync();
        }
    }
}
