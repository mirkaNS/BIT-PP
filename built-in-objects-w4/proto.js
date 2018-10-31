function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}
function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;

}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getData = function () {

    return this.name + ' ' + this.surname + ', ' + this.salary + ' $';
}
Employee.prototype.getSalary = function () {
    return this.salary + ' $';
}
Employee.prototype.increaseSalary = function () {
    this.salary = 1.1 * this.salary;
}

function Developer(name, surname, job, salary, specialization) {
    Employee.apply(this, [name, surname, job, salary]);
    this.specialization = specialization;

}
Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.getSpecialization = function () {
    return this.specialization;
}

function Manager(name, surname, job, salary, specialization, department) {
    Developer.call(this, name, surname, job, salary, specialization);
    this.department = department;
}
Manager.prototype = Object.create(Developer.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.getDepartment = function () {
    return this.departent;
}

Manager.prototype.changeDepartment = function (newDepartment) {
    this.department = newDepartment;
}




var zika = new Person("zika", "zikic");
var zikaJob = new Employee("zika", "zikicaaa", "programer", "1000");
zikaJob.increaseSalary();
console.log(zikaJob.getSalary());
// var mira = new Developer("mira", "miric", "develepor", "800", "frontend");
// console.log(mira.getSpecialization());
var visnja = new Manager("visnja", "visnjic", "manager", "0", "frontend", "it");
visnja.changeDepartment('designer');
console.log(visnja.department);