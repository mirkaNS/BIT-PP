function Person(name,surname){
    this.name=name;
    this.surname=surname;
}
function Employee(name,surname,job,salary){
    Person.call(this,name,surname);
    this.job=job;
    this.salary=salary;
}

Employee.prototype=Object.create(Person.prototype);
Employee.prototype.constructor=Employee;
Employee.prototype.getDate=function(){
    return this.name+" "+this.surname+" "+this.salary;
}
Employee.prototype.getSalary=function(){
    return this.salary;
}
Element.prototype.increaseSalary=function(){
    return this.salary*0.1;
}

function Developer(name,surname,job,salary,specialization){
    Employee.call(this,name,surname,job,salary);
    this.specialization=specialization;
}

Developer.prototype=Object.create(Employee);
Developer.prototype.constructor=Developer;
Developer.prototype.getSpecijalization=function(){
    return this.specialization;
}

function Manager(name,surname,job,salary,specialization,department){
    Developer.call(this,name,surname,job,salary,specialization);
    this.department=department;
}

Manager.prototype=Object.create(Developer);
Manager.prototype.constructor=Manager;
Manager.prototype.getDepartmant=function(){
    return this.department;
}
Manager.prototype.changeDepartmant=function(newDepartmant){
    this.department=newDepartmant;
}

var aca=new Employee("aca","acic","maneger",0);
console.log(aca);
var zika=new Developer("zika","zikic","it",0,"it");
console.log(zika);
var mira=new Manager("mira","miric","developer",0,"frontend","it");
console.log(mira);