const Person = require('../practice_6/person');
module.exports = class Teacher extends Person{
  constructor(name,age,klass){
      super(name,age);
      this.klass = klass;
  }
  introduce(){
    if(this.klass){
      return super.introduce() + 'I am a Teacher. I teach '+this.klass+'.';
    }else{
      return super.introduce() + 'I am a Teacher. I teach No Class';
    }

    }
};
