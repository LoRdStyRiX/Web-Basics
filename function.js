// theres 2 types of function

// - built in function
// alert(), date(), confirm(), prompt(), 

// - user defined function


function  myself() { //this is a user defined function
    var me = "I'm Raihan"
    return me
    
}
myself();

console.log("Whats my name? "+ myself());

function namee(a) {
    var name = a;
    return name;    
}
namee();
console.log(namee('1. Raihan'));
console.log(namee('2. Ammar'));

function circumference(height, width) {
    var circum = (height+width)*2;
    return circum;   
}
var answer = circumference(30,40);
var answer = circumference(10,50);
console.log("the circumference of the rectangle is "+answer);

function myname() {
    alert("Hello! i am Raihan");
};
document.getElementById("my-button").addEventListener("click",namee);

var naem = () => {
    console.log('Hi Raihan')
}

function car(color, brand) {
    var a = color;
    var b = brand;
    return [a,b];
    
}
 var output = car("that car is a "+'red','hypercar');
 console.log(output);


function plane(manufacturer, model){
    var a = prompt('Insert manufacturer')
    var b = prompt('insert model type')
    return ['Manufacturer : '+a+ ' Model : '+b]
}
var result = plane()
alert(result);

// conditional statements (if, else, else if, switch, case, etc)----------------------------------------------------------------------------------

var johndoe = 17;

if(johndoe < 13){
    console.log('john has to go to room A');
}
else if(johndoe > 13 && johndoe <= 17){
    console.log('john has to go to room B');
}
else(johndoe > 17);{
    console.log('john has to go to room A');
}
    
var day = prompt('insert day');

if(day == 'monday'){
    alert('Todays schedule is C++');
}
else if(day =='tuesday'){
    alert('Todays schedule is HTML');
}
else if(day == 'wednesday'){
    alert('Todays schedule is Python');
}
else if(day == 'thursday',day =='friday',day =='sunday',day =='saturday'){
    alert('Todays is free time');
}
else{
    alert('insert day');
}

var numbers = prompt('insert a number');

function evenorodd(number) {
    if (number % 2 == 0) {
      return "even ";
    } else {
      return "odd ";
    }
}
alert(numbers+' is an '+evenorodd(numbers)+'number!');

// switch and case--------------------------------------------------------------------------------------------------------------------------------

var day = prompt('insert day')

switch (day) {
  case 'monday':
      alert('HTML')
    break;
  case 'tuesday':
      alert('Python')
    break;
  default:
      alert('wrong value')
    break;
}

//study case

var value = prompt('insert your score')

switch (true) {
  case value < 60:
      prompt('D | kurang');
    break;

  case value <= 75:
      prompt('C | cukup');
    break;

  case value <= 85:
      prompt('B | baik');
    break;

  case value <= 100:
      prompt('A | ahsan');
    break;

  case value > 100:
      prompt('The value inserted is incorrect');
    break;

  default:
    prompt('???')
}

// ternerary-------------------------------------------------------------------------------------------------------------------------------------

var who = prompt('whos the smartest?')
var answer = (who.toLowerCase() == 'john doe') ? 'correct :)': 'incorrect :(';
alert(`your answer is ${answer}`)

var username = prompt('Insert your username')
var password = prompt('Insert your password')

if (username == 'johndoe'){
  if (password == '12345'){
    alert('Logged in!')
  }
  else{
    alert('username or password incorrect')
  }
}
else{
  alert('username does not exist')
}

var question1 = prompt('fishes breath using...')

if(question1 = 'gills'){
    alert('Correct!');
}
else{
    alert('Incorrect');
}

var question2 = prompt('humans breath using...')

switch (question2) {
  case 'lungs':
      alert('Correct')
    break;
  default:
      alert('Incorrect')
    break;
}


//loop -----------------------------------------------------------------------------------------------------------------------------------------

//2 types (countable & uncountable)

//countable (for, foreach, repeat)

//for
for(let i = 0; i <= 20; i++){
  console.log(`this code was looped ${i} times`)
}

// //foreach
var vehicle = ["toyota", "mazda", "mitsubishi", "porche", "bmw", "mercedes", "ford", "gm", "chevrolet", "koenigsegg", "lexus", ];
vehicle.forEach((car) => {
    console.log(`this car brand is ${car}`)
})

var students = [
  'Abdurahman Ilyasa', 'Ammar Zahran Syafiq', 'Andy Taft',
  'Arkan Naufal Ardhani','Azka Azkia Baiquni','Azka Savir Fauzie','Faris Dzu Khairil Muna','Firja Abiyu Alhilali',
  'Haikal Al Fatih','Ihsan Ahmad Fakhriansyah','Mawaldy Adha Majid','Muhammad Al Fathi Ahyan','Muhammad Fahri Al Mauludy',
  'Muhammad Imamussajidin','Muhammad Keenan Abigail','Naufal Azriel Al Azizy','Raihan Ksatria','Reveeno Dhirgham Putra',
  'Rizqi Irkham Maulana','Vallian Sayoga Chandra'];
  for(i = 1; i <= students.length;)
  
  students.forEach((people) => {
    document.write("<h1>"+ i++ + '. '+ people +"</h1>")
})

console.log("loop\n".repeat(100))

//uncountable (while, do/while)-------------------------------------------------------------------------------------------------------------------

var repeat = true;
var count = 0;

while (repeat) {
    count++
    repeat = confirm("repeat the process?")
}
alert(`you have repeated the process ${count} times`)

//object

var car = {
    brand : "Mazda RX-7", //property
    model : "FD3S type-R",
    color : "Yellow",
    seater : "2 seater",
    specification : {
        engine : "13B Rotary",
        horsepower : "276 HP",
        turbo : "sequential twin-turbocharger",
        transmission : "5 gearbox"
    }
}

Object.values(car).forEach(row => 
    {console.log(row);
});
var a = car.specification
Object.values(a).forEach(roow => {
    console.log(roow);
})

function car(brand, model, color, engine){
    var data = {};
    data.brand = brand;
    data.model = model;
    data.color = color;
    data.engine = engine;
    return data;
}
var vehicle = car('Mazda', 'MX-5 1997', 'Red', '1.8 L inline-4' );
var vehicle2= car('Mazda', 'RX-7 1994', 'Yellow', '13B Rotary' );

console.log(vehicle, vehicle2)

function student(name, age, grade, major ){
    this.name = name;
    this.age = age;
    this.grade = grade;
    this.major = major;
};
var studentData = new student('John', '16', '11', 'IT ');
console.log(studentData);

var bis1 = {
    nama : "Transjakarta", //property
    tujuan : "Jakarta - Bekasi",
    kode : "sn-420",
    nomorpolisi : "B 6942 JS",
    fasilitas : {
        makan : "mini bar",
        sirkulasi : "air conditioner",
        internet : "free wifi",
        kebersihan : "toilet & wastafel",
    tambahan : ("aqua gratis", "kue gratis")
    }
}

Object.values(bis1).forEach(row => 
    {console.log(row);
});
