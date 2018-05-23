const Person=require('../practice_10/person');
const Class=require('../practice_10/class');
module.exports=class Teacher extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klasses = klasses;
      }
    introduce(){
      if(this.klasses){
          var classes=[];
          this.klasses.forEach(function (ele) {
              classes.push(ele.number);
          });
          return super.introduce()+' I am a Teacher. I teach Class '+classes.join(', ')+'.';
      } else {
          return super.introduce()+' I am a Teacher. I teach No Class.';
      }
    }
    introduceWith(student){
      if(student.klass.number==this.klass.number){
            return super.introduce()+' I am a Teacher. I teach '+ student.name+'.';
        } else {
          return super.introduce()+' I am a Teacher. I don\'t teach '+ student.name+'.';
        }
    }
    isTeaching(){

    }
};
