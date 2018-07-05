/*Tasks
Person
a) Write a constructor function called Person and that has the following arguments:

first-name          //string
last-name           //string
age                 //number
gender              //string
interests           //array
*/

function Person(fname,lname,age,gender,interests){
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.greeting = function (){
        return "Hi! I'm " + this.firstName;
    }
    this.farewell = function (){
        return this.firstName + " has left the building. Bye for now!"; 
    }
    
    this.bio = function (){
        var hobbies = ""
        for(var i= 0; i<interests.length; i++){
            hobbies= hobbies.concat(interests[i]);
            hobbies= hobbies.concat(", ");
            if (i==interests.length-2){
               hobbies= hobbies.concat(" and ");
           } 
           

           
        }
        return this.firstName + " " + this.lastName + " is " + this.age + " years old. " + this.gender + " likes " + hobbies; 
    }
}

var personA = new Person("cit","prado","36","she",["ver tele","comer","dormir"])

/*
b) Write the following three methods for Person.

greeting() //returns: Hi! I'm <first-name>.
farewell() //returns: <first-name> has left the building. Bye for now!
bio()      //returns: <first-name> <last-name> is <age> years old. <He/She> likes <interest-1>, <interest-2>, .... and <interest-n>.
*/


/*
Student
a) Write a constructor function called Student that inherit from Person 
and that has the following arguments:

first-name          //string
last-name           //string
age                 //number
gender              //string
interests           //array
*/
/*
b) The Student must inherit all methods from Person and 
overwrite greeting method to change its behavior to print:

greeting() //returns: Yo! I'm  <first-name>.
*/

function Student(nameb,lname,age,gender,interests){
    Person.call(this, nameb,lname,age,gender,interests);
    this.greeting = function(){//AQUI CAMBIAMOS ESTA SAY HELLO NO LA DE PERSON
        return "Yo, I'm " + this.firstName;//ESTE FIRST NAME HACE REFERENCIA A COMO SE LLAMA EL DE PERSON, POR QUE ESTA HEREDADO DE AHI
      }
  }

 
var studentA = new Student("estela","medina","66","she",["leer","cocinar","viajar"]) 


/*Teacher
a) Write a constructor function called Teacher that inherit from Person 
and that has the following arguments:

first-name          //string
last-name           //string
age                 //number
gender              //string
interests           //array
subject             //string

b) The Teacher must inherit all methods from Person and 
overwrite greeting method to change its behavior to print:
greeting() //returns: Hello. My name is <Mr./Mrs> <last-name> and I teach <subject>.
*/

function Teacher(name,lname,age,gender,interests,subject){
    this.subject = subject;
    Person.call(this, name,lname,age,gender,interests);
    this.greeting = function(){//AQUI CAMBIAMOS ESTA SAY HELLO NO LA DE PERSON
        var mr = ""
        if(gender=="female"){
            mr = "Mrs. "
        } else if (gender=="male"){
            mr = "Mr. "
        }
        return "Hello. My name is " + mr + this.lastName + " and I teach " + subject;//ESTE FIRST NAME HACE REFERENCIA A COMO SE LLAMA EL DE PERSON, POR QUE ESTA HEREDADO DE AHI
      }
  }

 
var teacherA = new Teacher("pablo","prado","68","male",["escribir","correr","comer"], "historia") 
