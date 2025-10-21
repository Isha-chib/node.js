 //function  statement
 function greet() {
    console.log("Hello, World!");
 }
    //function call
    greet();

    //function are first class
    function greetUser(name) {
        return `Hello, ${name}!`;
    }
    const message = greetUser("Alice");
    console.log(message);