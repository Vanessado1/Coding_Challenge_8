// Task 1: Function Declaration
// created a function to calculate employee salaries 
function calculateSalary(baseSalary, bonus, taxRate) {
    salary = (baseSalary + bonus) - (baseSalary * taxRate)
    return salary.toFixed(2);
}
console.log(`Net Salary: $${calculateSalary(5000, 500, 0.1)}`); // Expected output: "Net Salary: $5000.00"
console.log(`Net Salary: $${calculateSalary(7000, 1000, 0.15)}`); // Expected output: "Net Salary: $6950.00"

// Task 2: Functions Expression 
// declared a function to get discounted prices 
const calculateDiscount = (price, discountRate) => {
    discountPrice = price - (price * discountRate)
    return discountPrice.toFixed(2);
}
console.log(`Final Price: $${calculateDiscount(100, 0.2)}`); // Expected output: "Final Price: $80.00"
console.log(`Final Price: $${calculateDiscount(250, 0.15)}`); // Expected output: "Final Price: $212.50"

// Task 3: Arrow Function 
// declared a function to calculate service fees based off of service types 
const calculateServiceFee = (amount, serviceType) => {
    let serviceFee = 0;
    if (serviceType === "Premium") {
        serviceFee = 0.15;
    } else if (serviceType === "Standard") {
        serviceFee = 0.10;
    } else {
        serviceFee = 0.05;
    }
    totalCost = amount * serviceFee;
    return totalCost.toFixed(2);
}
console.log(`Service Fee: $${calculateServiceFee(200, "Premium")}`);// Expected output: "Service Fee: $30.00"
console.log(`Service Fee: $${calculateServiceFee(500, "Standard")}`); // Expected output: "Service Fee: $50.00"

// Task 4: Parameters and Arguments 
// Created a function to calculate rental car cost 
function calculateRentalCost(days, carType, insurance = false) {
    let rentalCost = {"Economy": 40, "Standard": 60, "Luxury": 100};
    let totalRentalCost = days * rentalCost[carType];
    if (insurance) {
        totalRentalCost += days * 20; 
    }
    console.log(`Total Rental Cost: $${totalRentalCost}`);
}
calculateRentalCost(3, "Economy", true); // Expected output: "Total Rental Cost: $180"
calculateRentalCost(5, "Luxury", false); // Expected output: "Total Rental Cost: $500"

// Task 5: Returning Values 
// created a function to calculate the loan payment 
function calculateLoanPayment(principal, rate, time) {
    totalPayment = principal + (principal * rate * time);
    console.log(`Total Payment: $${totalPayment.toFixed(2)}`);
}
calculateLoanPayment(1000, 0.05, 2); // Expected output: "Total Payment: $1100.00"
calculateLoanPayment(5000, 0.07, 3); // Expected output: "Total Payment: $6050.00"

// Task 6: Higher-Order Functions 
// created a function to find transactions that are higher than 1000
function filterLargeTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
}
let transactions = [200, 1500, 3200, 800, 2500]; // declared a array of transactions 
console.log(filterLargeTransactions(transactions, amount => amount > 1000)); // Expected output: [1500, 3200, 2500]

// Task 7: Closures 
// created a function to track cart value 
function createCartTracker() {
    let cartTracker = 0;
    return function (cart) {
        cartTracker += cart;
        return `Total Cart Value: $${cartTracker}`;
    };
}
let cart = createCartTracker(); // declared cart as the cart tracker function 
console.log(cart(20)); // Expected output: "Total Cart Value: $20"
console.log(cart(35)); // Expected output: "Total Cart Value: $55"

// Task 8 - Recursion in JavaScript 
// createda recursive function to calculte the total savings 
function calculateSavings(years, amount) {
    if (years >= 10) return amount;
    let totalSavings = calculateSavings(years + 1, amount * 1.05);
    return parseFloat(totalSavings.toFixed(2));
};
console.log(`Total Savings: $${calculateSavings(8, 1000)}`); // Expected output: "Projected Savings: $1102.50"
console.log(`Total Savings: $${calculateSavings(5, 5000)}`); // Expected output: "Projected Savings: $6381.41"