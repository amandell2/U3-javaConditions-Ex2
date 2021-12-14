const name1 = "Ada Lovelace";
const name2 = "Charles";
const name3 = "Brendan";

length1 = name1.length;
length2 = name2.length;
length3 = name3.length;

/*name1 is greatest*/
if(length1 > length2 && length1 > length3){
    console.log(`${name1} has the longest name.`);
}
/*name2 is greatest*/
else if(length2 > length1 && length2 > length3){
    console.log(`${name2} has the longest name.`);
}
/*name3 is greatest*/ 
else if(length3 > length1 && length3 > length2){
    console.log(`${name3} has the longest name.`);
}
/*name1 & name2 are tied and longest*/ 
else if(length1 == length2 && length1 > length3){
    console.log(`${name1} and ${name2} tie for the longest name.`);
}
/*name1 & name3 are tied*/ 
else if(length1 == length3 && length1 > length2){
    console.log(`${name1} and ${name3} tie for the longest name.`);
}
/*name2 & name3 are tied*/ 
else if(length2 == length3 && length2 > length1){
    console.log(`${name2} and ${name3} tie for the longest name.`);
}
/*all 3 are tied*/
else if(length1 == length2 && length1 == length3){
    console.log(`All three names, ${name1}, ${name2}, and ${name3}, are the same length.`);
}

console.log(name1.length)
console.log(name2.length)
console.log(name3.length)