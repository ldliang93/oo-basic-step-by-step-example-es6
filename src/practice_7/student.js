const Person=require('../practice_7/person');
const Class=require('../practice_7/class');
module.exports=class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
      }
    introduce(){
        return super.introduce()+' I am a Student. I am at Class '+this.klass.number+'.';
    }
};
