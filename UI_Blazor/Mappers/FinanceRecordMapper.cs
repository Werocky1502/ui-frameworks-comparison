using UI_Blazor.Models;

namespace UI_Blazor.Mappers
{
    public class FinanceRecordMapper
    {
        public FinanceRecordModel? FromFormModel(FinanceRecordFormModel formModel)
        {
            FinanceRecordModel? result = null;

            var isDateParsed = DateTime.TryParse(formModel.Date, out var date);
            var isAmountParsed = int.TryParse(formModel.Amount, out var amount);

            if (isDateParsed && isAmountParsed)
            {
                result = new FinanceRecordModel
                {
                    Date = date,
                    Amount = amount,
                    Description = formModel.Description
                };
            }

            return result;
        }
    }
}
