var i;
var fib = [];
var total = 0;

fib[0] = 0;
fib[1] = 1;


for(i=2; i<=50; i++) {
	
    fib[i] = fib[i-2] + fib[i-1];
    
    	if (fib[i] % 2 === 0 && fib[i] < 4000000) {	
    		total = total + fib[i];
    		console.log("new total is " + total);
    	}
}



