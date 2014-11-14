var n = 999;
var i = 999;
var x = 0;
var product = 0;
var prodArray = [];


function test () {

	while (n >= 100) {
		while(i >= 100){
			product = n*i;

				if (palTest(product)) {
					return product;
				}

			i--;
		}
	i = 999;
	n--;
	}
}

function palTest (num) {

	num = num.toString();
	
	numReverse = reverse(num);
	if (num === numReverse) {
		
		prodArray[x] = num;
		//console.log( x + " " + prodArray[x] );
		x++;
		
		
	} else {
		return false;
	}

}


function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}



test();

prodArray.sort(function(a, b){return b-a});

console.log(prodArray[0]);



