using System.Configuration;
using UI_Blazor_WebApp.Components;
using UI_Blazor_WebApp.Mappers;
using UI_Blazor_WebApp.Services;

namespace UI_Blazor_WebApp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = CreateBuilder(args);
            var app = CreateApplication(builder);

            app.Run();
        }

        private static WebApplicationBuilder CreateBuilder(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services
                .AddRazorComponents()
                .AddInteractiveServerComponents()
                .AddInteractiveWebAssemblyComponents();

            var financeApiHost = builder.Configuration["FinanceApiHost"]
                ?? throw new ConfigurationErrorsException("No configuration value defined for FinanceAPI host");

            builder.Services.AddHttpClient<FinanceRecordsService>(client =>
            {
                client.BaseAddress = new Uri(financeApiHost);
            });

            builder.Services.AddSingleton<RandomDescriptionService>();
            builder.Services.AddSingleton<RandomFinanceRecordService>();
            builder.Services.AddSingleton<FinanceRecordMapper>();

            return builder;
        }

        private static WebApplication CreateApplication(WebApplicationBuilder builder)
        {
            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.UseWebAssemblyDebugging();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();

            app.UseStaticFiles();
            app.UseAntiforgery();

            app.MapRazorComponents<App>()
                .AddInteractiveServerRenderMode()
                .AddInteractiveWebAssemblyRenderMode()
                .AddAdditionalAssemblies(typeof(Client._Imports).Assembly);

            return app;
        }
    }
}