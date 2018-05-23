module.exports=class Class{
 constructor(klass){
     this.number = klass;
 }
 assignLeader(student){
        if(student.klass.number==this.number){
            this.leader=student;
            if(this.teacher){
                var a=this.teacher.klasses.find((e)=>e.number==this.number);
                if(a) {
                    console.log('I am ' + this.teacher.name + '. I know ' + student.name + ' become Leader of Class ' + this.number + '.');
                }
            }
        }
        else {
            console.log("It is not one of us.") ;
        }
    }
    getDisplayName(){
        return 'Class '+this.number;
    }
    appendMember(student){
        student.klass=this;
        if(this.teacher){
            var a=this.teacher.klasses.find((e)=>e.number==this.number);
            if(a){
                console.log('I am '+this.teacher.name+'. I know '+student.name+' has joined Class '+this.number+'.');
            }
        }
    }
    registerAssignLeaderListener(teacher){
        this.teacher=teacher;
    }
    registerJoinListener(teacher){
        this.teacher=teacher;
    }
};
