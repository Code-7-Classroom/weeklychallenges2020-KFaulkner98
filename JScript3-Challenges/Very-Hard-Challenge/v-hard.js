//Very Hard Challenge
//1. Create a Person constructor that has three properties: name, job, and age.
//2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
//3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a    back-end developer".
//4. Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
//5. Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
//6. Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
//7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.
//8. Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers?
//Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add on new methods or properties to  incorporate the syntax.

function Person(name, job, age){ //1
    this.name = name;
    this.job = job;
    this.age = age; //1
    this.exercise = function(){ //2
        return console.log('Basketball is fun!') //2
    }
    this.fetchJob = function(){ //3
        return console.log(`${this.name} is a ${this.job}.`) //3
    }
    Programmer.call(this,name,job,age)
}

function Programmer(languages, busy){ //4
    this.languages = languages;
    this.busy = busy;
    this.completeTask = function(){
        this.busy = false;
        if (this.busy == false){
            console.log(`${this.name} is busy.`)
        }  else{
            console.log(`${this.name} is not busy.`)
        }
        this.acceptNewTask = function (){
            this.busy = true;
        }
        this.offerNewTask = function () {
            if (this.busy == false) {
                console.log(`${this.name} would love to take on a new responsibility.`)
            } else {
                console.log(`${this.name} can't accept any new tasks right now.`)
            }
        }
        
        this.learnLanguages = function () {
            this.languages = ['HTML', 'CSS', 'JavaScript'];
            console.log(`${this.name} has been learning these languages: ${this.languages}.`);
        }
        
        this.listLanguages = function () {
            this.languages = ['C++', 'C#', 'Python'];
            console.log(`${this.name} already knows these languages: ${this.languages}.`);
        }
    }
}

this.offerNewTask = function () {
    if (this.busy == false) {
        console.log(`${this.name} would love to take on a new responsibility.`)
    } else {
        console.log(`${this.name} can't accept any new tasks right now.`)
    }
}

this.learnLanguages = function () {
    this.languages = ['HTML', 'CSS', 'JavaScript'];
    console.log(`${this.name} has been learning these languages: ${this.languages}.`)
}

this.listLanguages = function () {
    this.languages = ['C++', 'C#', 'Python'];
    console.log(`${this.name} already knows these languages: ${this.languages}.`)
}

var Kyle = new Person ('Kyle', 'Front-End Developer', 22);
var Antonio = new Person ('Antonio', 'Back-End Developer', 22);

Kyle.exercise();
Kyle.fetchJob();
Kyle.completeTask();
Kyle.acceptNewTask();
Kyle.offerNewTask();
Kyle.learnLanguages();
Kyle.listLanguages();

Antonio.exercise();
Antonio.fetchJob();
Antonio.completeTask();
Antonio.acceptNewTask();
Antonio.offerNewTask();
Antonio.learnLanguages();
Antonio.listLanguages();


