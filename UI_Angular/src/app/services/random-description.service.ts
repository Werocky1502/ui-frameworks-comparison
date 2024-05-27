import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class RandomDescriptionService {

  constructor() { }

  private readonly definedNegativeDescriptions: ReadonlyArray<string> = Object.freeze([
    "Groceries supermarket (Angular)",
    "Dining (Angular)",
    "Utilities (Angular)",
    "Rent (Angular)",
    "Transportation (Angular)",
    "Health insurance (Angular)",
    "Entertainment (Angular)",
    "Tuition (Angular)",
    "Clothing (Angular)",
    "Savings (Angular)",
    "Travel (Angular)",
    "Gifts donations (Angular)",
    "Subscriptions (Angular)",
    "Personal care (Angular)",
    "Home maintenance (Angular)",
    "Pet supplies (Angular)",
    "Electronics (Angular)",
    "Sports fitness (Angular)",
    "Books (Angular)",
    "Childcare (Angular)"
  ]);

  private readonly definedPositiveDescriptions: ReadonlyArray<string> = Object.freeze([
    "Salary (Angular)",
    "Freelance work (Angular)",
    "Investments (Angular)",
    "Dividends (Angular)",
    "Interest income (Angular)",
    "Rental income (Angular)",
    "Business profits (Angular)",
    "Bonuses (Angular)",
    "Royalties (Angular)",
    "Part-time job (Angular)"
  ]);

  getRandomPositiveDescription(): string {
    const randomIndex = Math.round(Math.random() * this.definedPositiveDescriptions.length)
    const randomDescription = this.definedPositiveDescriptions[randomIndex];

    return randomDescription;
  }

  getRandomNegativeDescription(): string {
    const randomIndex = Math.round(Math.random() * this.definedNegativeDescriptions.length)
    const randomDescription = this.definedNegativeDescriptions[randomIndex];

    return randomDescription;
  }
}
