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
        
    2. ถ้าเราต้องการสร้างใช้ constructor ของ obj เราสามารถเขียนแบบนี้ได้ไหม
        function OB() {}
        OB.prototype
        let obj = new OB()
        let obj2 = new obj.constructor();


