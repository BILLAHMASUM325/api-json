function doSomething(){
    console.log(3333);
}
console.log(2222);
// setTimeout ar jonno output ta sobar last a print korba
    // setTimeout(doSomething, 10000);
// 10000 ms mana hocca 10 sec por output print korba

// setTimeout dea function laka
setTimeout(function(){
    console.log("This is billah")
},4000)

//  setInterval hocca kisu time por por ata print korba

setInterval(function(){
    console.log('doing it');
},4000)
console.log(44444);
console.log(55555);
console.log(66666);
