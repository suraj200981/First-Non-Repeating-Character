function main(input) {
  //initalising input as string
  var str = "";
  str = input;

  var countArr = [];

  var sortedString = "";

  sortedString = sortAlphabets(str);

  for (var i = 0; i < sortedString.length; i++) {
    if (sortedString.charAt(i) === sortedString.charAt(i + 1)) {
    } else {
      if (sortedString.charAt(i + 1) != sortedString.charAt(i + 2)) {
        return "First non repeating character is " + sortedString.charAt(i + 1);
      }
    }
  }
  return -1;
}

var sortAlphabets = function (text) {
  return text.split("").sort().join("");
};
console.log(main("aaabcccdeeef"));
console.log(main("abcbad"));
console.log(main("abcabcabc"));
