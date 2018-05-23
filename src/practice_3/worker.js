const Person = require('../practice_3/person');
module.exports = class Worker extends Person{
  constructor(name,age,klass){
      super(name,age);
  }
  introduce(){
        return 'I am a Worker. I have job';
    }
};
