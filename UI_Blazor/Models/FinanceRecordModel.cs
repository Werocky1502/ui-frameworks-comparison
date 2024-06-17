namespace UI_Blazor.Models
{
    public class FinanceRecordModel
    {
        public Guid Id { get; set; }
        public DateTime Date { get; set; }
        public int Amount { get; set; }
        public string Description { get; set; }
    }
}
