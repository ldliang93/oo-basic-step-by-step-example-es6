const Person=require('../practice_9/person');
const Class=require('../practice_9/class');
module.exports=class Student extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass=klass;
      }
    introduce(){
      if(this.klass.leader&&this.klass.leader.klass.number==this.klass.number){
        return super.introduce()+' I am a Student. I am Leader of '+this.klass.number+'.';
      }else{
        return super.introduce()+' I am a Student. I am at Class '+this.klass.number+'.';
      }
    }
};
