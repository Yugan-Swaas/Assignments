// Input JSON
const employeeDataIn = {
    employee_1: {
        empid: "101",
        empname: "Vikram",
        empexperience: "2",
        empsalary: "10000",
        empdepartment: "IT"
    },
    employee_2: {
        empid: "102",
        empname: "Surya",
        empexperience: "3",
        empsalary: "20000",
        empdepartment: "IT"
    },
    employee_3: {
        empid: "103",
        empname: "Kamal",
        empexperience: "5",
        empsalary: "30000",
        empdepartment: "Finance"
    },
    employee_4: {
        empid: "104",
        empname: "Dhanush",
        empexperience: "2",
        empsalary: "15000",
        empdepartment: "Finance"
    },
    employee_5: {
        empid: "105",
        empname: "Surya",
        empexperience: "3",
        empsalary: "20000",
        empdepartment: "HR"
    },
    employee_6: {
        empid: "106",
        empname: "Kamal",
        empexperience: "5",
        empsalary: "30000",
        empdepartment: "HR"
    },
}

// Logic Implementation Function
function dataCategorizer(data, key, value) {
    return new Promise((resolve, reject) => {
        let employeeDataOut = {};
        for (let employeeKey in data) {
            if (data[employeeKey][key] === value) {
                employeeDataOut[employeeKey] = data[employeeKey];
            }
        }
        resolve(employeeDataOut);
    });
}

// Function Call
const categoryKey = 'empexperience';
const categoryValue = '5';

dataCategorizer(employeeDataIn, categoryKey, categoryValue)
    .then(employeeDataOut => {
        console.log(employeeDataOut);
        /* Expected Output
        {
            employee_3: {
                empid: "103",
                empname: "Kamal",
                empexperience: "5",
                empsalary: "30000",
                empdepartment: "Finance"
            },
            employee_6: {
                empid: "106",
                empname: "Kamal",
                empexperience: "5",
                empsalary: "30000",
                empdepartment: "HR"
            }
        }
        */
    })
    .catch(error => {
        console.error("Error:", error);
    });
