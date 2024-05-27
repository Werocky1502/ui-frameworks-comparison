namespace UI_Blazor_WebApp.Services
{
    public class RandomDescriptionService
    {
        private List<string> definedNegativeDescriptions = new List<string> {
            "Groceries supermarket (Blazor)",
            "Dining (Blazor)",
            "Utilities (Blazor)",
            "Rent (Blazor)",
            "Transportation (Blazor)",
            "Health insurance (Blazor)",
            "Entertainment (Blazor)",
            "Tuition (Blazor)",
            "Clothing (Blazor)",
            "Savings (Blazor)",
            "Travel (Blazor)",
            "Gifts donations (Blazor)",
            "Subscriptions (Blazor)",
            "Personal care (Blazor)",
            "Home maintenance (Blazor)",
            "Pet supplies (Blazor)",
            "Electronics (Blazor)",
            "Sports fitness (Blazor)",
            "Books (Blazor)",
            "Childcare (Blazor)"
        };

        private List<string> definedPositiveDescriptions = new List<string>
        {
            "Salary (Blazor)",
            "Freelance work (Blazor)",
            "Investments (Blazor)",
            "Dividends (Blazor)",
            "Interest income (Blazor)",
            "Rental income (Blazor)",
            "Business profits (Blazor)",
            "Bonuses (Blazor)",
            "Royalties (Blazor)",
            "Part-time job (Blazor)"
        };

        public string GetRandomPositiveDescription()
        {
            var randomIndex = new Random().Next(0, definedPositiveDescriptions.Count);
            var randomDescription = definedPositiveDescriptions[randomIndex];

            return randomDescription;
        }

        public string GetRandomNegativeDescription()
        {
            var randomIndex = new Random().Next(0, definedNegativeDescriptions.Count);
            var randomDescription = definedNegativeDescriptions[randomIndex];

            return randomDescription;
        }
    }
}
