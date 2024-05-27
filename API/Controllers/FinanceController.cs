using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("finance/records")]
    public class FinanceController : ControllerBase
    {
        private readonly DataStorage dataStorage;
        private readonly ILogger<FinanceController> logger;

        public FinanceController(DataStorage dataStorage, ILogger<FinanceController> logger)
        {
            this.dataStorage = dataStorage;
            this.logger = logger;
        }

        [HttpGet]
        public ActionResult<IEnumerable<FinanceRecord>> GetAll()
        {
            var records = dataStorage.GetAll();

            logger.LogInformation($"Returning {records.Count()} records");

            return Ok(records);
        }

        [HttpPost]
        public ActionResult Add(FinanceRecord record)
        {
            logger.LogInformation($"About to create record: {record}");

            dataStorage.Add(record);

            return Ok();
        }

        [HttpDelete("{id}")]
        public ActionResult Remove(Guid id)
        {
            logger.LogInformation($"About to remove record with id = {id}");

            dataStorage.Remove(id);

            return Ok();
        }
    }
}
