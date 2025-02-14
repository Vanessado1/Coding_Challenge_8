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