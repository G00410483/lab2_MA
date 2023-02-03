//boolean
let stock: boolean = true;
console.log("Value assigned to stock is:" + stock);

//number
let num: number = 24;
console.log("Value assigned to number is:" + num);

//String
let car: String = "Toyota";
console.log("Value assigned to stock is:" + car);

//any
let list:any [] = [22, 33, 44];
for(let i = 0; i < list.length; i++)
{
    console.log("The value at position" +(i + 1) + " is" + list[i]);
}