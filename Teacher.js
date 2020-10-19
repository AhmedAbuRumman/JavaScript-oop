class Teacher extends Student {
    constructor(Id, Name, Email, mobile_number, Salary, subjects){
        super(Id, Name, Email, mobile_number)
        this.Salary = Salary;
        this.subjects = subjects;
    }
    show() {
        return this.show() + this.number + this.subjects;
      }
}
let Teacher1 = new Teacher ('196432','Sadi','Sadi@orange.com',0777788888,800,'[English, Arabic, Math, science]')
