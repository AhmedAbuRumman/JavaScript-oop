Class Student {
    constructor (Id ,Name , Email , mobile_number){
        this.Id = Id ;
        this.Name = Name ;
        this.Email = Email ;
        this.mobile_number = mobile_number ;

    }
    show() {
        return 'id' + this.mobile_number;
      }
}
let Student1 = new Student ('123443','Sara','sara@orange.com','0777777777')