'use strict';
//14.1
/*
let country = "vietnam"
let continent ="hcm"
let population = "100m"
console.log(country)
console.log(continent)
console.log(population)
console.log (`im ${country}`) ;/*template literal */

//15.1 , 15.2
/*
let isLand = true;
let language = "Enghlish";
let country = "vietnam";
let continent ="hcm";
let population = "100m";
console.log(typeof(isLand));
console.log(typeof(language));
console.log(typeof(country));
console.log(typeof(population));*/

//15.3 154 155
/*
let country = "vietnam";
let language = "Enghlish";
let population = 100;
let songuoi = population/2;
console.log(songuoi);
population ++;
console.log(population);
let populationPL = 6;
if(population> populationPL)
{
    console.log("lon hon");
}
else
{
    console.log(" nho hon");
}
let populationAvg = 33;
if(population< populationAvg)
{
    console.log(`${country}'s population is ${populationAvg-population} million below average`);
}
else
{
    console.log(`'${country}s population is above average`);
}
let description = `${country} and its ${population} million people speak ${language}.`;
*/

//15.6
/*
let massMark =1.69;
let heightMark = 78;
let massJohn = 1.95;
let heightJohn = 92;
let BMIMark = massMark/(heightMark*heightMark);
let BMIJohn = massJohn/(heightJohn*heightJohn);
console.log(BMIJohn);
console.log(BMIMark);
console.log(heightJohn<BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
*/

/*16.2*/
/*
var numNeighbours = prompt("hpw many neighbor countries does your country have ?");
console.log(numNeighbours);
if(numNeighbours===1)
{
    console.log("only 1 border");
}
else if(numNeighbours ===0 || numNeighbours !=1)
{
    console.log("no border");
}

// 16.2
/*
let numNeighbours = prompt('How many neighbor countries does your country have?');

numNeighbours = Number(numNeighbours);
if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}
*/




/*16.3*/
/*var country = prompt("your country is portugal ? ");


if(country.toLocaleLowerCase() === "yes")
{
    var language = prompt("your language");
    if(language.toLocaleLowerCase() === "english")
    {
        var population = prompt("your population");
        if(population<50)
        {
            console.log("You should live in Portugal  ")
        }
    }
}
else
{
    console.log("Portugal does not meet your criteria")
}
*/

/*16.4 */
/*
var language = prompt("input language: ");
switch(language.toLocaleLowerCase())
{
    case "chinese":
        case "mandarin":
            console.log("most number of native speaker");
            break;
            case "spanish":
                console.log("2 nd place");
                break;
                case "english":
                console.log("3rd place");
                break;
                case "hindi":
                    console.log("4th place");
                    break;
                    case "arabic":
                        console.log("5th place");
                        break;
                        default:
                            console.log("Great language too :D")
}
*/

//16.5
/*
var population = 13;
console.log(`${population>= 33 ? `Portugal's population is above average`: `Portugal's population is below average`}`);
*/




//
/*
var calcTip = bills=> (bills >=50 && bills <=300 )?  bills*0.15 :  bills * 0.2;
var total = (tips, bill) =>　tips+bills ;
var bills = [125,555,44];
var tips =[];

tips.push(`${calcTip(bills[0])} `);
tips.push(`${calcTip(bills[1])} `);
tips.push(`${calcTip(bills[2])} `);
console.log(tips);
var totals = [];
totals.push(total(tips[0], bills[0]));
totals.push(total(tips[1], bills[1]));
totals.push(total(tips[2], bills[2]));
console.log(totals);*/


//16.6.1
/*
let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins) {
  console.log('Koalas win the trophy');
} else {
  console.log('Both win the trophy');
}
*/


//16.6.2
/*
var userinput = prompt("input your money");
var bill = +userinput;
var tip = bill >=50 && bill<=300 ? bill*0.15 : bill*0.2;
console.log(`the bill was ${bill} so the tip was ${tip} and the total value ${tip+bill}`);
 var total;

var tip = bill>= 50 && bill <= 300 ? `the bill was ${bill} so the tip was ${tip = bill *0.15} and the total value ${tip+bill}`:`the bill was ${bill} so the tip was ${tip = bill *0.2} and the total value ${ tip+bill}`;
console.log(tip);
*/






//array 17.1
/*
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
  }
  
  
  let descriptionJapan = describeCountry('japan', 8, 'tokyo');
  let descriptionVn = describeCountry('vn', 33, 'hn');
  let descriptionRussia = describeCountry('russia', 69, 'Moscow');
  
  
  console.log(descriptionJapan);
  console.log(descriptionVn);
  console.log(descriptionRussia);
*/

//17.2
/*
function percentageOfWorld1(population) {
    return (population / 7900000000) * 100;
  }
  
 
  let china = percentageOfWorld1(1441000000);
  let vn = percentageOfWorld1(190000000);
  let japan = percentageOfWorld1(2360000000);
  
  console.log(china);
 console.log(vn);
 console.log(japan);
 
 const percentageOfWorld2 = function (population) {
    return (population / 7900000000) * 100;
  };
  
 
  let china2 = percentageOfWorld2(1441000000);
  let vn2 = percentageOfWorld2(190000000);
  let japan2 = percentageOfWorld2(2360000000);
  
 
  console.log(china2);
  console.log(vn2);
  console.log(japan2);
  
//17.2
   const percentageOfWorld3 = population => (population / 7900000000) * 100;
  
  
   let china3 = percentageOfWorld3(1441000000);
   let vn3 = percentageOfWorld3(190000000);
   let japan3 = percentageOfWorld3(2360000000);
  
   console.log(china3);
   console.log(vn3);
   console.log(japan3);
   
   //17.4
   function describePopulation(country, population) 
   {
    const percentage = percentageOfWorld1(population);
    return `${country},${population}`;
  }
  
 
  const chinaDescription = describePopulation('china', 1441000000);
  const vnDescription = describePopulation('vn', 1393000000);
  const jpDescription = describePopulation('jp', 332915073);
 
  console.log(chinaDescription);
  console.log(vnDescription);
  console.log(jpDescription);


//17.5
let populations = [1441000000, 190000000, 2360000000, 332915073];
console.log(populations.length===4);
const percentages = 
[
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
]
console.log(percentages);

//17.6
const neighbohurs = ["Thai","Lao","Sweden"];
neighbohurs.push("Utopia ");

let Germany = false;
for(let i =0 ; i < neighbohurs.length ; i++)
{
    if(neighbohurs[i]=== "Germany")
    {
        Germany = true;
        break;
    }
   
}
if(Germany=false)
{
    console.log("Probably not a central European country :D");
}
const swedenIndex = neighbohurs.indexOf("Sweden");
{
    if(swedenIndex!==-1)
    {
        neighbohurs.splice(swedenIndex, 1, "Republic of Sweden");
    }
}
console.log(neighbohurs);
*/

//17.7
/*
var calcTip = bills=> (bills >=50 && bills <=300 )?  bills*0.15 :  bills * 0.2;
var total = (tips, bill) =>　tips+bills ;
var bills = [125,555,44];
var tips =[];

tips.push(`${calcTip(bills[0])} `);
tips.push(`${calcTip(bills[1])} `);
tips.push(`${calcTip(bills[2])} `);
console.log(tips);
var totals = [];
totals.push(total(tips[0], bills[0]));
totals.push(total(tips[1], bills[1]));
totals.push(total(tips[2], bills[2]));
console.log(totals);
*/
/*
const calcAverage =(x,y,z)=> ((x+y+z)/3)

const scoreDolphins = calcAverage(44,23,71) ;
const scoreKoalas = calcAverage(65,54,49);
console.log(scoreDolphins, scoreKoalas);
const checkWinner = (scoreDolphins, scoreKoalas) =>
{
    if(scoreDolphins >= 2* scoreKoalas)
    {
        return `Dolphins win (${scoreDolphins} vs ${scoreKoalas})`;
    }
    else if(scoreDolphins <= 2* scoreKoalas)
    {
        return `Koalas win (${scoreDolphins} vs ${scoreKoalas})`;
    }
    else 
    {
        console.log("No team wins ...");
    }
};
console.log(checkWinner(scoreKoalas,scoreDolphins));
*/

//object


//18.1.2.3
/*
var myCountry =
{
    country:"vn",
    capital: "hcm",
    language:"viet",
    population:100,
    neighbohurs:3,
     describe : function()
    {
        return `${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbohurs} neighbouring countries and a capital called ${this.capital}`;
        
    },
    checksland : function(islsland)
    {
        this.islsland = this.neighbohurs　===0 ? true : false;
    }
}
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours} neighbouring countries, and a capital called ${myCountry.capital}.`);
myCountry.population +=2;
myCountry['population'] -= 20;
console.log(myCountry);
console.log(myCountry.describe());
*/

//18.4
/*
for(let i=1;i<=50;i++)
{
    console.log(`voter number ${i} is currently voting`);
}
*/

//18.5
/*
let populations = [1441000000, 190000000, 2360000000, 332915073];
let percentage = [];
function percentageOfWorld1(population) 
{
    return (population / 7900000000) * 100;
  }
for(let i =0 ; i<populations.length; i ++)
{
    percentage.push( percentageOfWorld1(populations[i]));
    
}
console.log(percentage);
*/

//18.6
/*
let listOfNeighbohurs = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for(let i = 0; i<listOfNeighbohurs.length;i++)
{
    if(listOfNeighbohurs[i].length > 1)
    {
        
       

        var j = listOfNeighbohurs[i];
     
        console.log(j.length);
        for( let k = j.length-1;k>=1;k--)
        {
          
             console.log(listOfNeighbohurs[i][k]);
        }
        
    }
}*/

//18.7
/*
let populations = [1441000000, 190000000, 2360000000, 332915073];
let percentage3 = [];
function percentageOfWorld1(population) 
{
    return (population / 7900000000) * 100;
}

let i = 0;
while (i<populations.length)
{
    percentage3.push( percentageOfWorld1(populations[i]));
    i++;
}
console.log(percentage3);
*/

/*var mark =
{
    fullName: "Mark Miller",
    mass:1.69,
    height: 78
}
var john =
{
    fullName: "John Smith",
    mass: 1.95,
    height: 92
}
function calcBMI(mass, height)
{
    return mass / (height * height);
}
console.log(calcBMI(mark.mass,mark.height));
console.log(calcBMI(john.mass,john.height))*/

//18.8.1
/*
var mark =
{
    fullName: "Mark Miller",
    mass:1.69,
    height: 78,
    calcBMI: function ()
{
   this.bmi = this.mass / (this.height* this.height);
   return this.bmi;
}
}
var john =
{
    fullName: "John Smith",
    mass: 1.95,
    height: 92,
    calcBMI: function ()
    {
   this.bmi = this.mass / (this.height* this.height);
   return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();
 
if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
}
*/

//18.8.2 for while
/*
const calcTip = function (bill)
 {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  

  var tips = [];
  var totals =[];
  var bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  for(var i=0 ; i<bill.length ; i++)
  {
      tips.push(`${calcTip(bill[i])}`);
      console.log(tips[i]);
      totals.push(`${calcTip(bill[i])+bill[i]}`);
      console.log(totals[i]);
      
       
  }
  const calcAvaerage = function(arr)
  {
     for(var i =0; i <arr.length; i++)
     {
        var sum = 0;
        sum += arr[i];
       
     }
     return sum/arr.length;
  }
   
  console.log(`${calcAvaerage(totals)}`);
  */