class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}
class Employee extends Person {
    constructor(name, surname, job, salary) {
        super(name, surname);
        this.job = job;
        this.salary = salary;
    }
    getData() {
        return `${this.name} ${this.surname}, ${this.salary}$`;
    }
    getSalary() {
        console.log(this.salary);
    }
    increaseSalary() {
        this.salary = this.salary * 1.1;
    }
}
class Developer extends Employee {
    constructor(name, surname, job, salary, specialization) {
        super(name, surname, job, salary);
        this.specialization = specialization;
    }
    getSpecialization() {
        console.log(this.specialization);
    }
}
class Manager extends Developer {
    constructor(name, surname, job, salary, specialization, department) {
        super(name, surname, job, salary, specialization);
        this.department = department;
    }
    getDepartment() {
        console.log(this.department);
    }
    changeDepartment(newDepartment) {
        this.department = newDepartment;
    }
}

const mira = new Developer('mirjana', 'grbic', 'webDeveloper', '600', 'JS');
mira.getSpecialization();
console.log(mira.getData());
