const Person = require('../practice_4/person');
module.exports = class Worker extends Person{
  constructor(name,age,klass){
      super(name,age);
  }
  introduce(){
        return super.introduce() + 'I am a Worker. I have job';
    }
};
