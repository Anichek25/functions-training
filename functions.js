function combineWords(word1, word2) {
 return(word1 + " " + word2);
}

var result = combineWords("meat", "loaf");
console.log(result);



function repeatPhrase(phrase, n) {
 for(var i = 0; i <= n; i++) {
    console.log(phrase);
 }

}
repeatPhrase("Hi", 10);



function toTheNthPower(number, power) {
  var result = 1;
  for(var i = 0; i < power; i++ ) {
  result *= number;
}
return result;
}

toTheNthPower(3, 3);


function areaOfACircle(radius) {
 var r = radius * radius;
	var area = Math.PI * r * r;
	return area;
}
areaOfACircle(1);






function isXEvenlyDivisibleByY(x, y) {
 var result = x % y == 0;
 return result;
}
isXEvenlyDivisibleByY(33, 3);




function countVowels(str1) {
  var vowelList = 'aeiouAEIOU';
  var count = 0;

  for(var i = 0; i < str1.length ; i++) {
    if (vowelList.indexOf(str1[i]) !== -1) {
      count += 1;
    }
  }
  return count;
}
countVowels("AEIOUY");




function findWdi(arr) {
    for(var i = 0; i < length; i++) {
        if(arr[i] == wdi)
            return true;
    }
    return false;
}
findWdi();





function printTriangle(length) {
	for(var i = 1; i <= length; i+=1) {

		var pyramid = '';

		for(var j = 0; j < i; j+=1) {
			pyramid += '*';
		}

		console.log(pyramid);
	}
}
printTriangle(5);




function printPyramid(length) {
	for(var i = 1; i <= length; i+=1) {
		var pyramid = '';

		for(var x = length - i; x > 0; x-=1) {
			pyramid += ' ';
		}
		for(var y = 0; y < i; y+=1) {
			pyramid += '* ';
		}
		console.log(pyramid);
	}
}
printPyramid(10);
