using API.Data;
using Microsoft.Net.Http.Headers;

namespace API
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

            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddSingleton<DataStorage>();

            builder.Services.AddCors(options =>
            {
                options.AddDefaultPolicy(policy =>
                    policy
                        .AllowAnyMethod()
                        .WithHeaders(HeaderNames.ContentType)
                        .WithOrigins(Constants.ReactAppHost, Constants.AngularAppHost, Constants.BlazorAppHost)
                );
            });

            return builder;
        }

        private static WebApplication CreateApplication(WebApplicationBuilder builder)
        {
            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseCors();
            app.UseAuthorization();
            app.MapControllers();

            return app;
        }
    }
}
