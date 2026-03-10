
// scope mane shimana 

// js e 3 type scope ase 1. global scope. 2. block scope. 3. Function scope or local scope 

// global scope 
let test = "test"
if (true){
    console.log("test")
}
for(let i = 0; i<5; i++){
    let num = i+1;
    console.log(num,test)
}

    // block scope 
    // var not maintain block scope 
    // let and const maintain block scope 

    {
        var test1 = "test1"
        const test2 = "test2"
    }
    // console.log(test1)
    // console.log(test2)

    // Function and local scope 

    function myfunc (){
        // var testv = "test3"
        let test4 = "test4"
        const test5 = "test5"
    }

    myfunc
    // console.log(testv)
    //  console.log(test5)
