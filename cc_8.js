// Task 1: Function Declaration
// created a function to calculate employee salaries 
function calculateSalary(baseSalary, bonus, taxRate) {
    return (baseSalary + bonus) - (baseSalary * taxRate)
}
console.log(`Net Salary: $${calculateSalary(5000, 500, 0.1)}`); // Expected output: "Net Salary: $5000.00"
console.log(`Net Salary: $${calculateSalary(7000, 1000, 0.15)}`); // Expected output: "Net Salary: $6950.00"

// Task 2: Functions Expression 
// declared a function to get discounted prices 
const calculateDiscount = (price, discountRate) => {
    return price - (price * discountRate)
}
console.log(`Final Price: $${calculateDiscount(100, 0.2)}`); // Expected output: "Final Price: $80.00"
console.log(`Final Price: $${calculateDiscount(250, 0.15)}`); // Expected output: "Final Price: $212.50"
