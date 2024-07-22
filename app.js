"use strict"

const input= Document.querySelector("imput");
const result= Document.querySelector("result");
const deleteBtn= Document.querySelector("delete");
const keys= Document.querySelector("bottom span");

let operation = ""
let answer
let decimalAdded = false

const operators =["+", "-", "x", "/"]

function handleKeyPress(e){
    const key = e.target. dataset.key
    const lastChar = operation[operation. length -1]
    
    if (key === "="){
        return
    }
    if (key === "." && decimalAdded){
        return
    }


   if(operators.indexOf(key)!== -1){
    decimalAdded = false
}
 
   if (operation.length === 0 && key === "-"){
    operation += key
    imput.innerHTML = operation
    return
   }

   if (operators.indexOf(lastChar)!== -1 && operators.indexOf(key)!== -1){
    operation = operation.replace(/.$/,)
    input.innerHTML = operation
    return
   }


}