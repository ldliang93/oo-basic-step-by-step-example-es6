const Person = require('../practice_2/person');
module.exports = class Student extends Person{
  constructor(name,age,klass){
      super(name,age);
      this.klass = klass;
  }
  introduce(){
        return 'I am a Student. I am at Class '+this.klass+'.';
    }
};
