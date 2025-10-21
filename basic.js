 function sum(a, b) {
        return a + b;
    }

    function greetWithSum(text,a,b,sum){
        const result = sum(a,b);
        console.log(text , result);

    }

    greetWithSum("The sum is:", 10, 15, sum);

