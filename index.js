// Write your solution in this file!
/*function updateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; 
    return employee;
    }

    const employee ={name: 'temp', streetAdress: 'temp'};
   */

const employee ={name: 'temp', streetAdress: 'temp'};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newEmployee = {...obj};
    newEmployee[key] = value; 
    return newEmployee;
}
 
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key){
    const newEmployee = {...obj};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
}