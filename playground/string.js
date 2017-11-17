var test = 'Sander kick Timo';
var word1 = test.substr(0, test.indexOf(" "));
var rest = test.substr(test.indexOf(" "));
var word2 = rest.substr(1, rest.indexOf(" ", 2));
var name = rest.substr(rest.indexOf(word2)+word2.length);

console.log(test);
console.log(word1);
console.log(rest);
console.log(word2);
console.log(name);
