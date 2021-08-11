# CodeCamp 10
# Kittikawin Pawabut

# Exercise 1 การเขียน Code
  1.แก้ไขการเขียนโค้ดต่อไปนี้
 
# Exercise 2 การสร้าง Object
  1.ให้สร้าง Object แบบ Object Iteral โดยให้กำหนดตัวแปรชื่อ human โดยมี Properties ทั้ง 5 อย่าง
    
    - ชื่อของผู้เรียน เป็น String
    
    - อายุของผู้เรียนเป็น number
    
    - บ้านของตัวเองเป็น String
    
    - โสดหรือไม่โสดเป็น boolean
    
    - คะแนนความฉลาดของตัวเองเป็น number (เต็ม 10)
    
# Exercise 3 Computed Properties
   1.ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop 
  และนำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น console.log() object นั้นออกมา
  
  2.ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง โดยให้ key เป็นชื่อของผลไม้ 
  และ value เป็นจำนวนของผลไม้ (number) โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย

# Exercise 4 Object
  1.ให้ทำตามคำสั่งต่อไปนี้
  
      - สร้าง Object เปล่าขึ้นมา
      - เพิ่ม properties name เข้าไปและให้ value เป็น “Sonter”
      - เพิ่ม properties surname เข้าไปและให้ value เป็น “Pakorn”
      - เปลี่ยน properties name เป็น “Boy”
      - ลบ properties name ออกจาก Object
    
  2.ให้เขียนฟังก์ชันชื่อ isEmpty(obj) โดยจะมี parameters เป็น obj และ ฟังก์ชันนี้จะเช็คว่า obj นี้มี properties ไหม 
  ถ้ามีให้คืนค่า false ถ้าไม่มีให้คืนค่า true
  
  3.การเขียนข้างล่างต่อไปนี้ Error ไหม
  
  4.จงเขียนฟังก์ชัน sum(obj) ที่รับ obj ที่เก็บ properties โดยมี key เป็นชื่อพนักงานและมี value เป็นเงินเดือน 
  ให้ฟังก์ชันคืนค่าเป็นผลรวมของเงินเดือนพนักงานทั้งหมด
  
  5.จงเขียนฟังก์ชัน multiplyNumeric(obj, times) โดยถ้า properties นั้นมี value เป็น number 
  ให้คูณ value นั้นด้วย times ถ้าข้อมูลเเป็นอย่างอื่นไม่ต้องทำอะไร
  
# Exercise 5 Methods ของ Object

  1.การทำงานของ code ดังกล่าวจะได้อะไรออกมา

  2.การทำงานของ code ดังกล่าวจะได้อะไรออกมา

  3.สร้าง object calculator จาก 3 methods นี้:

    - read() ใช้ prompts สำหรับรับค่ามา 2 ค่าและเก็บเป็น object properties.
    - sum() คืนค่าผลบวกของ 2 ค่านั้น.
    - mul() คืนค่าผลคูณของ 2 ค่านั้น.

  4.ให้ Object ชื่อ ladder มี method ขึ้น และ ลง

    - Object ชื่อ ladder สามารถเรียก function แบบนี้ได้
    - ดัดแปลง Object ชื่อ ladder สามารถเรียก function แบบนี้ได้
    
# Exercise 6 Constructor กับ New

  1.สร้าง constructor function ที่ใช้สำหรับสร้าง Calculator โดยต้องมี 3 Methods นี้
  
    - read(): รับค่าจาก propmt สองตัว
    - sum(): ให้คืนค่าจากการบวกกันของตัวแปรสองตัว
    - mul(): ให้คืนค่าจากการคูณกันของตัวแปรสองตัว
    
  2.สร้าง constructor function Accumulator(startingValue)
  
    - โดยที่ Object ดังกล่าวควร เก็บผลรวมไว้ใน property ที่มี key ชื่อว่า value, ค่าเริ่มต้นของ key ชื่อ value นี้ คือ startingValue
    - ฟังก์ชัน read() ควรอ่านค่าจาก propmt() และ เพิ่มค่าที่ใส่เข้ามาใน key ชื่อ value
    พูดง่าย ๆ ก็คือ value คือผลรวมของ prompt โดยเริ่มจาก startingValue

# Exercise 7  Number

  1.ให้เขียนฟังก์ชัน random(min, max) ที่จะ random เลข float ตั้งแต่ min จนถึง max มาให้เรา (ไม่รวม max)
  
  
# Exercise 8  String

  1.เขียนฟังก์ชัน ucFirst(string) โดยทำคืนค่าเป็น string เดิม แต่ตัวแรกของ string กลายเป็นพิมพ์ใหญ่
  
  2.เขียนฟังก์ชันที่ checkSpam โดยถ้าข้อความดังกล่าวมีคำว่า “xxx” หรือ “viagra” ให้คืนค่าเป็น true ถ้าไม่มีให้คืนค่าเป็น false
  
  3.เขียนฟังก์ชันที่ truncate(str, maxlength) โดยฟังก์ชันดังกล่าวจะเช็คว่า string 
  ที่ถูกส่งเข้ามามีความยาวเกิน maxlength ไหม ถ้าเกินให้แทน ข้อความต่อจากนั้นด้วย “...”

  4.เขียนฟังก์ชันที่ extractCurrencyValue(string, rate) โดยที่ฟังก์ชันดังกล่าวจะแปลง string ที่เป็นค่าเงิน dollar 
  ให้เป็น number ที่มีค่าเป็นเงินบาทไทย โดยอ้างอิง  rate จาก parameters ตัวที่สอง ที่ส่งมาให้
  
# Exercise 9 Array
  1.ผลลัพธ์ของความยาว array คืออะไร
  
  2.ให้ทำตามขั้นตอนต่อไปนี้
  
    - สร้าง array ชื่อ styles ที่มี items ชื่อ “Jazz” และ “Blues”
    - เพิ่ม “Rock-n-Roll” ต่อท้าย
    - นำค่า Classics ไปทับค่าตรงกลางของ Array
    - นำ items ตัวแรกออกมาและลบ items ตัวนั้นออกจาก array
    - เพิ่ม “Rap” และ “Reggae” ไปข้างหน้าของ Array
  3.เขียนฟังก์ชัน sumInput() ที่
  
    - ใช้ propmt รับ value มาเก็บใน array
    - หยุดถามเมื่อเจอค่าที่ไม่ใช่ ตัวเลข
    - คำนวณผลรวมของตัวเลขทั้งหมดใน Array
    
   4.Maximal contiguous subarray (**Optional**)
   
    - ให้เขียนฟังก์ชัน getMaxSubSum(arr) ที่ return ผลรวมของ subarray ที่มากที่สุดที่ติดกัน
    
# Exercise 10 Methods ของ Array

  1.ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.map()
  
  2.ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.filter()"

# Exercise 11 Map และ Set

  1.ให้ arr เป็น Array สร้าง function ชื่อ unique(arr) ให้คืนค่าเป็น unique items ของ arr
  
  2.Anagram เป็นตัวอักษรที่มีจำนวนตัวอักษรแต่ละตัวที่เท่ากัน แต่เรียงไม่เหมือนกัน ( Optional )
  
  3.เราได้ array จาก map.keys() แต่ไม่สามารถใช้ push ได้เราจะทำยังไงให้ keys.push สามารถทำงานได้

# Exercise 12 Keys, Values และ Entities

  1. กำหนดให้ salaries เป็น Object ให้เขียนฟังก์ชัน sumSalaries(salaries) ที่คืนค่าเป็นผลผมรวมของเงินเดือน 
  ถ้า salaries ไม่มีสมาชิก ให้คืนค่าเป็น 0
  
   2.ให้เขียนฟังก์ชัน count(obj) ที่คืนค่าเป็นจำนวน properties ใน object"
































