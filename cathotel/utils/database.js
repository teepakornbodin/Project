import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log("Mongo is already connected!");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "cathotel",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        isConnected = true;
        console.log("MongoDB is connected");
    } catch (error) {
        console.log(error);
    }
}

/* 
1. การนำเข้าและตัวแปร:

import mongoose from "mongoose";: นำเข้าโมดูล Mongoose เพื่อใช้ในการเชื่อมต่อกับฐานข้อมูล
let isConnected = false;: สร้างตัวแปร isConnected แบบบูลีนเริ่มต้นเป็น false เพื่อเก็บสถานะการเชื่อมต่อ
2. ฟังก์ชัน connectToDB:

mongoose.set('strictQuery', true);: ตั้งค่าให้ Mongoose ตรวจสอบการค้นหาข้อมูลอย่างเข้มงวด
if (isConnected) { ... }: ตรวจสอบว่าเชื่อมต่อฐานข้อมูลแล้ว (isConnected) ถ้าจริง จะแสดงข้อความและหยุดการทำงาน
    try ... catch: บล็อกสำหรับดำเนินการเชื่อมต่อกับฐานข้อมูลและจับข้อผิดพลาด:
    await mongoose.connect(process.env.MONGODB_URI, { ... }): พยายามเชื่อมต่อกับฐานข้อมูลโดย:
    process.env.MONGODB_URI: ใช้ URL สำหรับเชื่อมต่อกับฐานข้อมูลที่เก็บไว้ในตัวแปรสภาพแวดล้อม MONGODB_URI
    dbName: "cathotel": ระบุชื่อฐานข้อมูลที่จะเชื่อมต่อคือ "cathotel"
    useNewUrlParser: true, useUnifiedTopology: true: กำหนดค่าการเชื่อมต่อให้เป็นเวอร์ชันล่าสุด
isConnected = true;: หลังจากเชื่อมต่อสำเร็จ เปลี่ยนค่า isConnected เป็น true
console.log("MongoDB is connected");: แสดงข้อความผลสำเร็จ
catch (error) { ... }: กรณีเกิดข้อผิดพลาด จะแสดงข้อความผ่าน console
*/