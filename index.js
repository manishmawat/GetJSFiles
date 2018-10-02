    function greet(){
    const person={
        name:'Manish',
        age:26
    }
    for(let key in person){
        console.log(key);
    }
    // let val=21;
    // console.log('Welcome ' + name + ' '+val);
    // let myNames=['Manish','Bindu','Adhrit'];
    // myNames[myNames.length]='NewNames';
    // for(let i=0;i<myNames.length;i++){
    //     console.log(myNames[i]);
    // }
}

SpeedTest(70);

function SpeedTest(speed){
    if(typeof speed !== 'number')
    console.log('Invalid speed');
    const speedLimit=70;
    const speedPointBreak=5;
    if(speed<(speedLimit+speedPointBreak)){
        console.log('Ok');
    }
else{
    let pointDeducted=Math.floor((speed-speedLimit)/speedPointBreak);

    if(pointDeducted>=12)
    console.log('Suspended');
    else
    console.log('Point',pointDeducted);
}
}

EvenOdd(22);

function EvenOdd(val){
    if(val%2==0)
    console.log('Even');
    else
    console.log('Odd');
}

countTruthy([1,2,4])


function countTruthy(arrayItems){
    let countVal=0;
    for(let item of arrayItems){
        countVal+=(item)?1:0;
    }
    console.log(countVal);
}

const movie={
    name:'Lagaan',
    actor:'Aamir',
    year:2000,
    theme:'Cricket'
};

showProperties(movie);

function showProperties(obj){
    for(let key in obj)
    {
        if(typeof obj[key] === typeof 'string')
        console.log(key,obj[key]);
    }
}

specialSum(10);

function specialSum(Limit){
    let sumVal=0;
    for(let i=0;i<=Limit;i++){
        sumVal+=(i%3===0 || i%5===0)?i:0;
    }
    console.log(sumVal);
}

function findGrade(marksArray){
    //:)    
}

primeNumber(50);
function primeNumber(number){
    for(let i=2;i<number;i++){
        if(isPrime(i))
        console.log(i);
    }
}

function isPrime(number){
    for(let i=2;i<=Math.sqrt(number);i++)
    {
        if(number%i===0)
        return false;
    }
    return true;
}

let myFun=function fizzbuzz(input){
    // if(typeof input !== typeof number)
    // return 'not a number';
    // else
    // return input;
    // let returnVal;
    if (typeof input !== typeof 5){
        return 'Not a number'
    }
    if(input % 3==0 && input % 5==0)
    return 'FizzBuzz';
    else if (input %3===0)
    return 'Fizz';
    else if(input %5===0)
    return 'Buzz';
    else
    return input;
}

const circle={
    radius:5,
    draw() {
        console.log('draw');
    }
};

for(let key in circle){
    console.log(key,circle[key]);
}


for(let key of Object.keys(circle)){
    console.log(key);
}

for(let key of Object.entries(circle)){
    console.log(key);
}

if('radius11' in circle) console.log('yes');
// console.log(myFun('5'))

const name_Number=5;

let message =`This is my
'first' or ${name_Number} message in 
different line.
`

console.log(message);

const date1=new Date();

console.log('-------Excercise started here-----')

let address={
    'street':"140",
    'city':"Toronto",
    'zipCode':"M5H4E9"
}

let showAddress=(address)=>{
    for(let key in address)
    console.log(key,address[key]);
};

showAddress(address);

console.log("----------Ex-2---------")

// Factory Function
let createAddress=(street,city,zipCode) => {
    return {
        street:street,
        city:city,
        zipCode:zipCode
    };
};

let factoryAddress=createAddress('a','b','c');
showAddress(factoryAddress);

//Constructor Function
function Address(street,city,zipCode){
    this.street=street;
    this.city=city;
    this.zipCode=zipCode;
}
console.log('-----constructor print--------')
let constructorAddress=new Address('a','b','c');
showAddress(constructorAddress);

console.log('-----Ex-3------');

function areEqual(address1,address2){
    if(Object.keys(address1).length===Object.keys(address2).length){
        for(let key in address1){
            if(address1[key]!==address2[key])
            {
                // console.log('its false'+ address1[key] +'  '+ address2[key]);
                return false;
            }
        }
        return true;
    }
    return false;
}

function areSame(address1,address2){
    if(address1===address2)
    return true;

    return false;
}

console.log('-----Same addresses---------')
console.log(areEqual(factoryAddress,constructorAddress));

console.log(areSame(factoryAddress,constructorAddress));

console.log('------Blog post object-------');

let post={
    title:'title of the post',
    body:'body of te post',
    author:'author of the post',
    views:10,
    comments:[
        {author:'first',body:'comment \'s body'},
        {author:'second',body:'comment \'s body'}
    ],
    isLive:true
};

console.log(post);

console.log('-----posting a blog------')

function Post(title,body,author,isLive){
    this.title=title;
    this.body=body;
    this.author=author;
    this.isLive=isLive;
    this.views=0;
    this.comments=[];
}

let myNewPost=new Post('My First Post','This a post\'s body','Manish',false);

console.log(myNewPost);

console.log('--yelp price range categories--');

let priceCategories=[
    {label:'$', tooltip:'Inexpensive',minPerPersons:0,maxPerPersons:10},
    {label:'$$', tooltip:'average',minPerPersons:10,maxPerPersons:20},
    {label:'$$$', tooltip:'expensive',minPerPersons:20,maxPerPersons:30}
];

let restaurants=[
    {restaurantName:'food1',averagePerPerson:12},
    {restaurantName:'food2',averagePerPerson:8}
]


console.log('----Arrays-----');

let myArray=[1,2,3];

myArray.push(5,6)

myArray.unshift(0,11);

myArray.splice(2,0,23,21);
console.log(myArray);

console.log(myArray.includes(2));
console.log(myArray.indexOf(2));

console.log('-----Array examples------');

let numbers=[1,2,3,4,5];
numbers.pop();
console.log(numbers);

numbers.shift();
console.log(numbers);

// console.log('---How to clear the array---');

// //this is not clearing the memory location it is just de-referencing the array variable.
// numbers=[];

// //another is putting the length =0;
// numbers.length=0;

// //another is splicing the 
// numbers.splice(0,numbers.length);

// //one more is to pop the items till it is not empty.
// while(numbers.length>0)
//     numbers.pop();

// console.log(numbers);


console.log('---- combining and slicing the array----');

const first=[1,2,3];
const second=[3,4,5];

const combined=first.concat(second);

const copy=combined.slice();
console.log(combined);

const combinedWithSpread=[...first,'a',...second,'b'];
console.log(combinedWithSpread);

console.log('----iteration over the array----');

numbers.forEach((number,index)=>{
    console.log(index,number**2);
});

const sortedNumberArray=numbers.sort();

const objectArray=[
    {id:1,course:'Node.js'},
    {id:2,course:'javascript'}
];

objectArray.sort((a,b)=>{
    if(a.course.toUpperCase()<b.course.toUpperCase()) return -1;
    if(a.course.toUpperCase()>b.course.toUpperCase()) return 1;
    return 0;
})
console.log(objectArray);

console.log('----Testing an array----');

const testMyArray=[1,2,-1,3,4,5,6];

const boolSome=testMyArray.some((number)=>{
    console.log(number);
    return number<0;
});
console.log(boolSome);

const boolEvery=testMyArray.every((number)=>{
    console.log(number);
    return number>0
});

console.log(boolEvery);

console.log('----Filtering in Array----');

const filterMyArray=[1,2,3,4,5,6,7,8,9];

const filteredArray=filterMyArray.filter((number)=> number<5);

console.log(filteredArray);

console.log('----Map in Array----');

const mapArray=[1,2,3,4,5,6];

const mappedArray=mapArray.map((number)=>{
    return {id:number};
});

console.log(mappedArray);

const pipedMappedFilteresArray=
                                mapArray
                                .map((number)=>{return {id:number}})
                                .filter(obj=>obj.id>3);

console.log(pipedMappedFilteresArray);

console.log('----Reduce in Array----');

const findTheSumWithReduce=[1,2,3,4,5,6];

const reducedValue=findTheSumWithReduce.reduce((accumulator,currentValue)=>{
    return (accumulator+=currentValue);
},0);

console.log(reducedValue);

console.log('----Ex-1----Find the range between min and max value--');

function arrayFromRange(min,max){
    let returnArray=[];
    for(let i=min;i<=max;i++)
        returnArray.push(i);
        // returnArray[returnArray.length]=i;
    return returnArray;
}

const rangeArray=arrayFromRange(-10,4);

console.log(rangeArray);


// console.log('----implement a function like include----')

console.log('----except function in array----')

function except(myArray,exclude){
    const output=[];
    myArray.forEach((number)=>{
        if(!exclude.includes(number))
        {
            // console.log(number);
            output.push(number);
        }
    });
    return output;
}

const myArrayForFunction=[1,2,3,4,5];
const arrayToExclude=[2,3];

let returnedArray=except(myArrayForFunction,arrayToExclude);

console.log(returnedArray);

console.log('----Moving an element----');

const numbersToMove=[1,2,3,4,5,6,7,8];

function move(array,index,offset){
    // const requestedOffset=array.length-index;
    const position=index+offset;
    if(position>=array.length || position<0)
        console.error('Invalid move');
    const output=[...array];
    const deletedItem=output.splice(index,1)[0];
    console.log(output);
    output.splice(index+offset,0,deletedItem);
    // console.log(returnArray);
    return output;
}

let outputOfMove=move(numbersToMove,2,3);
console.log(outputOfMove);


// const testarr=[1,2,3,4,5];
// const testout=testarr.splice(2,1);
// console.log(testarr);
// console.log(testout);

console.log('----Count the occurance of an item in an array----');

const numberToFindOccurrences=[1,2,3,2,2,4,5,6,7,8];

function counttheOccurrences(inputArray,itemToFindTheOccurrences){
    return inputArray.reduce((previousValue,currentValue)=>{
        // console.log(previousValue);
        return (previousValue+=(currentValue===itemToFindTheOccurrences)?1:0);
        // console.log(previousValue);
    },0)
};

let occurenceValue=counttheOccurrences(numberToFindOccurrences,2);
console.log(occurenceValue);

console.log('----max value in the array----');

const maxArray=[1,4,5,6,2,3,4];

function maxValue(myArray){
    return myArray.sort()[myArray.length-1];
}

const returnMaxValue=maxValue(maxArray);
console.log(returnMaxValue);
console.log(maxValue([]));


console.log('----Ex- movies----');

const movies=[
    {title:'a',year:2018,rating:4.5},
    {title:'b',year:2018,rating:4.7},
    {title:'c',year:2018,rating:3},
    {title:'d',year:2017,rating:4.5},
];

function filterMovies(movies){
    return movies
    .filter((item)=> item.year===2018 && item.rating>4)
    .sort((a,b)=>{
        if(a.rating<b.rating){  return 1; }
        if(a.rating>b.rating){  return -1;}
        // console.log(a,b, '=');
        return 0;
    })
    .map((item)=>{
        return item.title;
    });
    // return movies;
}

let myMovies=filterMovies(movies);

console.log(myMovies);

console.log('----Rest operator in JS----');

function sum(discount,...prices){
    let total=prices.reduce((prevVal,currentVal)=>{return prevVal+=currentVal},0);
    return total*(1-discount);
}

console.log(sum(0.5,20,30));

console.log('----getter and setter in JS----');

person={
    firstname:'Manish',
    lastname:'Kumar',
    get fullname(){
        return `${this.firstname} ${this.lastname}` 
    },
    set fullname(value){
        const parts=value.split(' ');
        this.firstname=parts[0];
        this.lastname=parts[1];
    }
};

person.fullname='another name';

console.log(person.fullname);

console.log('----Playing with this variable----');

const myMoviewVariable={
    title:'Lagaan',
    year:2001,
    tags:['cricket','aamir','british'],
    printAlltags(){
        this.tags.forEach(tag=>{console.log(this.title,tag)});
    }
};

myMoviewVariable.printAlltags();

console.log('----Sum function with unlimited arguments----');

function sum(...args){
    // console.log(args);

    if(args.length===1 && Array.isArray(args[0]))
        args=args[0];
    // if(Array.isArray(args)){
        return args.reduce((previousValue,currentValue)=>{
            return previousValue+=currentValue;
        },0)
    // }
    // else{

    // }
}

console.log(sum(1,2,3,4,5,6));

console.log(sum([1,2,3,4,5,6]));

console.log('----Ex- Area of a circle----');

const circleForRadius={
    radius:1,
    get area(){
        return Math.PI*(this.radius**2);
    }
};

console.log(circleForRadius.area);