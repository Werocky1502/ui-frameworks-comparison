using API.Models;

namespace API.Data
{
    public class DataStorage
    {
        private readonly List<FinanceRecord> records = new();

        public IEnumerable<FinanceRecord> GetAll()
        {
            return records;
        }

        public void Add(FinanceRecord record)
        {
            records.Add(record);
        }

        public void Remove(Guid id)
        {
            records.RemoveAll(r => r.Id == id);
        }
    }
}
