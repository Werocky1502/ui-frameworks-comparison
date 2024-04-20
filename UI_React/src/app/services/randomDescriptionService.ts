const definedNegativeDescriptions: ReadonlyArray<string> = Object.freeze([
    "Groceries supermarket (React)",
    "Dining (React)",
    "Utilities (React)",
    "Rent (React)",
    "Transportation (React)",
    "Health insurance (React)",
    "Entertainment (React)",
    "Tuition (React)",
    "Clothing (React)",
    "Savings (React)",
    "Travel (React)",
    "Gifts donations (React)",
    "Subscriptions (React)",
    "Personal care (React)",
    "Home maintenance (React)",
    "Pet supplies (React)",
    "Electronics (React)",
    "Sports fitness (React)",
    "Books (React)",
    "Childcare (React)"
]);

const definedPositiveDescriptions: ReadonlyArray<string> = Object.freeze([
    "Salary (React)",
    "Freelance work (React)",
    "Investments (React)",
    "Dividends (React)",
    "Interest income (React)",
    "Rental income (React)",
    "Business profits (React)",
    "Bonuses (React)",
    "Royalties (React)",
    "Part-time job (React)"
]);

const RandomDescriptionService = {
      getRandomPositiveDescription(): string {
        const randomIndex = Math.round(Math.random() * definedPositiveDescriptions.length)
        const randomDescription = definedPositiveDescriptions[randomIndex];

        return randomDescription;
      },
      getRandomNegativeDescription(): string {
        const randomIndex = Math.round(Math.random() * definedNegativeDescriptions.length)
        const randomDescription = definedNegativeDescriptions[randomIndex];

        return randomDescription;
      }
}

export default RandomDescriptionService;
