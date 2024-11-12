const employees = [
    {id: 1, name: 'John Doe', age: 30, department: 'HR', salary: 50000, specialization: 'Python'},
    {id: 2, name: 'Alice Smith', age: 28, department: 'IT', salary: 45000, specialization: 'Java'},
    {id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Javascript'},
    //...More employee records can be added here
];

//Function to display all employees
function displayEmployees(){
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries(){
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

/**
 * The reduce method iterates through each 
 * employee and accumulates their salaries 
 * to calculate the total. The initial value 
 * of the accumulator (acc) is 0.
 * 
 * The reduce method continuously accumulates 
 * these salaries by adding each employee's 
 * salary to the previous total.
 * 
 * Each employee's salary (employee.salary) is 
 * added to the accumulator (acc). After 
 * calculating the total sum of salaries, 
 * an alert dialog box is triggered using 
 * alert(). It showcases the total calculated 
 * salaries with the message 
 * "Total Salaries: $" followed by the computed 
 * totalSalaries variable value. This alert 
 * displays the overall sum of all employee 
 * salaries.
 */

function displayHREmployees(){
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeesById(employeeId){
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if(foundEmployee){
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.age} - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.specialization}</p>`;
    }
    else{
        document.getElementById('employeesDetails').innerHTML = 'No employee has been found with this ID';
    }
}
function findEmployeesBySpecialization(employeeSpecialization){
    const foundEmployee = employees.find(employee => employee.specialization === employeeSpecialization);
    if(foundEmployee){
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.age} - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.specialization}</p>`;
    }
    else{
        document.getElementById('employeesDetails').innerHTML = 'No employee has been found with this ID';
    }
}