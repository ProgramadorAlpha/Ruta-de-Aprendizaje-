class Category:
    def __init__(self, name):
        self.name = name
        self.ledger = []

    def deposit(self, amount, description=""):
        self.ledger.append({"amount": amount, "description": description})

    def withdraw(self, amount, description=""):
        if not self.check_funds(amount):
            return False
        self.ledger.append({"amount": -amount, "description": description})
        return True

    def get_balance(self):
        return sum(item["amount"] for item in self.ledger)

    def transfer(self, amount, other_category):
        if not self.check_funds(amount):
            return False
        self.withdraw(amount, f"Transfer to {other_category.name}")
        other_category.deposit(amount, f"Transfer from {self.name}")
        return True

    def check_funds(self, amount):
        return amount <= self.get_balance()

    def __str__(self):
        title = f"{self.name:*^30}\n"
        items = "".join(
            f"{item['description']:<23}{item['amount']:>7.2f}\n" for item in self.ledger
        )
        total = f"Total: {self.get_balance():.2f}"
        return title + items + total

    def get_withdrawal_total(self):
        withdrawals = [item["amount"] for item in self.ledger if item["amount"] < 0]
        return sum(withdrawals)


def create_spend_chart(categories):
    withdrawal_total = sum(category.get_withdrawal_total() for category in categories)
    withdrawal_percentages = [
        category.get_withdrawal_total() / withdrawal_total * 100
        for category in categories
    ]

    result = "Percentage spent by category\n"
    for i in range(100, -10, -10):
        result += f"{i:3}| "
        for percentage in withdrawal_percentages:
            if percentage >= i:
                result += "o  "
            else:
                result += "   "
        result += "\n"
    result += "    " + "-" * (3 * len(categories) + 1) + "\n"
    max_name_length = max(len(category.name) for category in categories)
    for i in range(max_name_length):
        result += "     "
        for category in categories:
            if i < len(category.name):
                result += f"{category.name[i]}  "
            else:
                result += "   "
        if i < max_name_length - 1:
            result += "\n"
    return result


food = Category("Food")
entertainment = Category("Entertainment")
business = Category("Business")

food.deposit(1000, "initial deposit")
entertainment.deposit(1000, "initial deposit")
business.deposit(1000, "initial deposit")

food.withdraw(10.15, "groceries")
entertainment.withdraw(15.89, "movies")
business.withdraw(50, "office supplies")

food.transfer(20, entertainment)

print(create_spend_chart([food, entertainment, business]))