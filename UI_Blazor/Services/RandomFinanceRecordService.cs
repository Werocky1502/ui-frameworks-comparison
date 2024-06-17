using UI_Blazor.Models;

namespace UI_Blazor.Services
{
    public class RandomFinanceRecordService
    {
        private RandomDescriptionService randomDescriptionService;

        public RandomFinanceRecordService(RandomDescriptionService randomDescriptionService)
        {
            this.randomDescriptionService = randomDescriptionService;
        }

        public FinanceRecordModel GenerateRandomFinanceRecord()
        {
            var randomAmount = new Random().Next(-100, 100);
            var randomDescription = randomAmount > 0 
                ? randomDescriptionService.GetRandomPositiveDescription()
                : randomDescriptionService.GetRandomNegativeDescription();

            var randomRecord = new FinanceRecordModel
            {
                Id = Guid.NewGuid(),
                Date = DateTime.UtcNow,
                Amount = randomAmount,
                Description = randomDescription
            };

            return randomRecord;
        }
    }
}
