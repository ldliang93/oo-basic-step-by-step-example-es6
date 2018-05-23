module.exports=class Class{
 constructor(klass){
     this.number = klass;
 }
 assignLeader(student){
    this.leader=student.name;
 }
 getDisplayName(){
    return 'Class '+this.number;
 }
};
