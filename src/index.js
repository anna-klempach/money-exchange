// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    let objExchange = {};
    if (currency <= 0) {
    	return objExchange;
    }

    if (currency >= 10000) {
    	objExchange.error = "You are rich, my friend! We don't have so much coins for exchange";
    	return objExchange;
    }

    let arrExchange = [50, 25, 10, 5, 1];
    let keyExchange =  ['H', 'Q', 'D', 'N', 'P'];
    let count = 0;
    let keyName;

    for (let i = 0; i < 5; i++) {

    	while (currency >= arrExchange[i]) {
    		currency -= arrExchange[i];
    		count++;
    	}
    	if (count != 0) {
    		keyName = keyExchange[i];
    		objExchange[keyName] = count;
    		count = 0;
    	}
    }
    return objExchange;
}
