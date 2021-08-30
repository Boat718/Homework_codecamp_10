# Homework_codecamp_10

Kittikawin Pawabut

Javascript for React 

Exercise Destructuring

    1. ถ้าเรามี Object 
        let user = {
        name: "John",
        years: 30
        };

        ให้เขียน Destrcutring assignment ที่ให้
        - property ที่ชื่อ name ไปอยู่ในตัวแปร name
        - property ที่ชื่อ years ไปอยู่ในตัวแปร age
        - property ที่ชื่อ isAdmin ไปอยู่ในตัวแปร isAdmin (ให้เป็น false ถ้าไม่มีค่าให้กำหนด)
      
     
    2. ถ้าเรามี Object ชื่อ salaries
    let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
    };

    ให้สร้าง function topSalary(salaries) ที่คืนค่าชื่อคนที่มีเงินเดือนสูงสุด
    - ถ้า salaries ไม่มีข้อมูลให้คืนค่าเป็น null
    - ถ้าสูงสุดมีหลายคน ก็ให้คืนใครก็ได้สักคน


Exercise F.Prototype

    1. จากโค๊ดต่อไปนี้มีการสร้าง new Rabbit() ขึ้นมา

        function Rabbit() {}
            Rabbit.prototype = {
                eats: true
            };

        let rabbit = new Rabbit();

        alert( rabbit.eats ); //true

        ถ้ามีการ alert ในบรรทัดดังกล่าวจะได้อะไรออกมา 
        //function Rabbit() {};

        //ถ้ามีการเปลี่ยนบรรทัดสีเหลืองจะเป็นอย่างไร
        //Rabbit.prototype.eats = false;

        //ถ้ามีการเปลี่ยนบรรทัดสีเหลืองจะเป็นอย่างไร
        //delete rabbit.eats;

        //ถ้ามีการเปลี่ยนบรรทัดสีเหลืองจะเป็นอย่างไร
        //delete Rabbit.prototype.eats;

        //ถ้ามีการเปลี่ยนบรรทัดสีเหลืองจะเป็นอย่างไร
        delete Rabbit.prototype.eats;
        
Exercise Modern Prototype

    1. มี Object Dictionary ที่สร้างจาก Object.create(null) เพื่อเก็บ key/value pairs ให้เพิ่ม Method dictionary.toString() และคืนค่าเป็น key ทั้งหมดออกมาที่คั้นด้วย comma

    let dictionary = Object.create(null);

    // your code to add dictionary.toString method

    // add some data
    dictionary.apple = "Apple";
    dictionary.__proto__ = "test"; // __proto__ is a regular property key here

    // only apple and __proto__ are in the loop
    for(let key in dictionary) {
    alert(key); // "apple", then "__proto__"
    }

    // your toString in action
    alert(dictionary); // "apple,__proto__"
    
    
    2. สร้าง object rabbit ด้วย new keyword

    function Rabbit(name) {
        this.name = name;
    }

    Rabbit.prototype.sayHi = function()
    {
        alert(this.name);
    };

    let rabbit = new Rabbit("Rabbit");

    2.1 คำสั่งทั้งหมดนี้ทำงานเหมือนกันหรือไม่

    rabbit.sayHi();                        
    Rabbit.prototype.sayHi();               
    Object.getPrototypeOf(rabbit).sayHi();  
    rabbit.__proto__.sayHi();               

Exercise Native Prototype

    1 ให้เพิ่ม Method defer เข้าไปใน prototypes ของทุกฟังก์ชัน โดย Method นี้จะทำหน้าที่ alert ข้อความออกมาหลังจากผ่านไป ms

    function f() {
        alert("Hello!");
    }

    f.defer(1000);
    
    2. ให้เพิ่ม Method defer เข้าไปใน prototypes ของทุกฟังก์ชัน โดย Method นี้จะทำหน้าที่ return Function ให้ alert(a+b) เมื่อผ่านไป ms

    function f(a, b) {
        alert( a + b );
    }

    f.defer(1000)(1, 2);

