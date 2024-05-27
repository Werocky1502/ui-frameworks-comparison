namespace API.Models
{
    public class FinanceRecord
    {
        public Guid Id { get; set; }

        public DateTime Date { get; set; }

        public int Amount { get; set; }

        public string Description { get; set; }

        public override string ToString()
        {
            return $"Id: {Id}, Date: {Date}, Amount: {Amount}, Description: {Description}";
        }
    }
}
