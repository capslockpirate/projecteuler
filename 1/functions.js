function findMult () {
	var total = 0;
	for (i = 0; i <= 1000; i++) {
		if (i % 3 == 0 || i % 5 == 0) {

			//console.log(i);
			total = total + i;
			
			
			console.log("multiple #" + i + "Total is now: " + total);
			
		} else {
			//console.log("bah humbug! " + i);
				}
	}

}


findMult();


