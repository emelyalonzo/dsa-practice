/*
Average Salary Excluding the Minimum and Maximum Salary
=======================================================
You are given an array of unique integers salary where salary[i] is the salary of 
the ith employee.

Return the average salary of employees excluding the minimum and maximum salary. 
Answers within 10-5 of the actual answer will be accepted.
 
EXAMPLE 1
Input: salary = [4000,3000,1000,2000]
Output: 2500.00000
Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500

EXAMPLE 2
Input: salary = [1000,2000,3000]
Output: 2000.00000
Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
Average salary excluding minimum and maximum salary is (2000) / 1 = 2000
*/

function average(salary: number[]): number { 
    let minimumSalary = salary[0];
    let maximumSalary = 0;
    let result = 0;
    let sum = 0;
    for(let i=0; i < salary.length; i++) {
        if (minimumSalary > salary[i]) {
            minimumSalary = salary[i];
        }
        if (maximumSalary < salary[i]) {
            maximumSalary = salary[i];
        }
        sum += salary[i];
    }
    result = (sum - minimumSalary - maximumSalary)/(salary.length -2) 
    return result
};