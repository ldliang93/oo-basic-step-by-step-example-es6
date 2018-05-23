const Person=require('../practice_9/person');
const Class=require('../practice_9/class');
module.exports=class Teacher extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass=klass;
      }
    introduce(){
      if(this.klass){
        return super.introduce()+' I am a Teacher. I teach Class '+this.klass.number+'.';
      } else {
        return super.introduce()+' I am a Teacher. I teach No Class.';
      }
    }
    introduceWith(student){
      if(student.klass.number==this.klass.number){
            return super.introduce()+' I am a Teacher. I teach '+student.name+'.';
        } else {
          return super.introduce()+' I am a Teacher. I don\'t teach '+student.name+'.';
        }
    }
};
