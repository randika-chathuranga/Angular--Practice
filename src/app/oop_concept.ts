class Person {
    private _age: number =0;
    private _firstName: string ="";
    private _lastName: string ="";

 
    public get age() {
        return this._age;
    }

    public set age(theAge: number) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }

    public getFullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }
}

/*
enum ProductCategory {
    electronic,
    computer,
    cloths
}


interface Product {
    title:string;
    price: number;
    tags: string[];
    printProductSummary: void;
}

const myProduct: Product = {
    title: 'Tv',
    price: 2500,
    tags: ['4k', 'hello', 'myTv'],
    printProductSummary(){
        console.log(`${this.title}`)
    }
}
*/


//array declaration
var fruit:string = "mango";
var fruits: string[] = ["apple", "banana", "orange"];

    for(let i=0; i<fruits.length; i++){
        console.log(fruits[i]);
    }



//named function
function display(){
    console.log('welcome');
}
display();

function sum(x:number, y:number, z?:number):number{
    return x+y;
}
console.log(sum(10,15));



//annonymus function
const product = function(){
    console.log("dgfh")
}
product();


//arrow function(these are annonymus functions)
var sumOfNumber = (x:number, y:number) => {
    return x+y;
}
console.log(sumOfNumber(10,50));


//function overloading( same name but different parameters in functions)

//encapsulation(protect the variables)
class Player{
    private health: number | undefined;
    private speed: number | undefined;

    public setHealth(returned_health: number){
        this.health = returned_health;
    }

    public getHealth(){
        return this.health;
    }

    
}

var newPlayer = new Player();
newPlayer.setHealth(10)
console.log(newPlayer.getHealth());



//inheritance
/* 1. remove duplication code
2. providing common protocol for a group of subclasses(using in polimorphism)*/

//we can get the methods in super class to the subclasses. but in some sub classes don't want 
//super class methods, then we have to override super class methods.



class Animal{
    hunger: number|undefined;
    health: number|undefined;
    protected coordX: number|undefined;
    protected coordY: number|undefined;

    setCoordX(returnedCoordX: number){
        this.coordX = returnedCoordX;
    }

    getCoordX(){
        return this.coordX;
    }


    eat():void{
        console.log("I'm eating");
    }

    sleep():void{
        console.log("I'm sleeping");
    }

    move():void{
        console.log("I'm moving");
    }

    makeNoice():void{
        console.log("make noice");
    }

}

//how can join the super class with subclasses
//use extends key word

class Dog extends Animal{
    //override the makeNoice method
    override makeNoice():void{
        console.log("bark")
    }

    //if we want to overide move method and want early defined move method also mentioned in super class too.
    //then use super keyword.

    override move():void{
        console.log("hello i'm going to override move method");
        console.log(super.move() + "and also I want this pre-defined move method");
    }

    returnToOwner():void{
        console.log(`${this.coordX}`)
    }
}

//in inheritance we acn use 1. extends 2. override methods 3. super keyword

const newDog = new Dog();
newDog.makeNoice();
newDog.setCoordX(20);
newDog.returnToOwner();
newDog.move();


class Cat extends Animal{}
const newCat = new Cat();
newCat.setCoordX(50);
console.log(newCat.getCoordX());

//if want elephant class common method properties from cat class
class elephant extends Cat{

} 



//pholomorphism
//remove code duplication
//providing common protocol for group of sub classes.
class Hero{
    hunger: number | undefined;
    health: number | undefined;

    attack():void{
       console.log("I'm attacking") 
    }

    move():void{
        console.log("I'm moving");
    }

     eat():void{
        console.log("I'm eating");
    }

}


class Archer extends Hero{
    arrows: number|undefined;

    override attack(){
        super.attack();
        console.log("firing on arrow");
        this.arrows = 1;
    }

}

class Mage extends Hero{
    mana:number | undefined;

    override attack(){
        super.attack();
        console.log("throwing a potion");
        this.mana = 1;
    }
}

class Knight extends Hero{
    shield: number|undefined;

    override attack(){
        super.attack();
        console.log("I'm swinging with sword");
    }
}

/* as Archer has Hero's instances and methods, archer variable type can
be initialized as Hero. other variables are also same scenario.*/

const archer1:Hero = new Archer();
/*(Hero=super type variable // Archer=sub type object)*/

const mage1:Hero = new Mage();
const knight1:Hero = new Knight();

archer1.attack();
mage1.attack();
knight1.attack();

/*see  the advantage of polimorphism*/
//to make our code very flexible

/* archer kiyana eka, hero wa extends karana nisa..hero ge okkoma properties archer ta aythiy..
e nisa archer ge type eka hero widiyta gann puluwan.
api archer ge object ekk hadala, uge type eka hero karala
archer1.attck() cll karama apita enne   class Archer extends Hero meken ena attck function ekama thami.
*/



/*Abstraction*/
/* In here we are using abstract key word before class. so we can't create objects of this class as used abstract word.
then we hav eto extends from new class and should implement new object inside that class.*/

abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract spacia(): void;
    getReelTime(): number{
        return 8;
    }
}

//we can't create objects like this
// const camera = new TakePhoto();


//so we have to create another class which extends TakePhoto class
class Instagram extends TakePhoto{
    
    constructor(
        public override cameraMode: string,
        public override filter: string,
        public burst: number
    ){
        //as we getting these properties from super class
        super(cameraMode, filter)
    }
    //abstract method nisa me extends karapu class eka ethule thiynna ona
    spacia(): void {
        console.log("hello");
    } 
}

const camera = new Instagram("text", "text", 10);
//abstract nowena class mehama call karann puluwan.
camera.getReelTime();




//implementes (if not using inheritance kind of things can use implements)
//it's same as extends but some one need to create feature always using interface we can use
//implements keyword

interface TakeSelfi{
    cameraMode: string,
    filter: string,
    burst: number
}

interface Story{
    createStory(): void
}

class Whatsapp implements TakeSelfi{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

class SnapChat implements TakeSelfi, Story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public abcd: number //can add additional things
    ){}

    createStory(){
        console.log("dfgdjhgfj");
    }
}




//see how any type return type array is implementing
const arr1: Array<number> = [];

function identityOne(val:any): any{ 
    return val; //we don't know exactly what kind of value return
}

//It's better if we can do it like this. this is also like "any" but ones data type came in, it will be locked and remember.
function identityTwo<Type>(val: Type) : Type{
    return val;
}






