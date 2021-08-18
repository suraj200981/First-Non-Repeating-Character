function main(input) {
  //initalising input as string
  var str = "";
  str = input;

  var nonRepeatingChar = "";

  for (var i = 0; i < str.length; i++) {
    for (var x = i + 1; x < str.length - 1; x++) {
      console.log(str[i] + "" + str[x]);
      if (str[i] === str[x]) {
        nonRepeatingChar = str[x];
      }
    }
  }
  if (nonRepeatingChar === "") {
    nonRepeatingChar = "-1";
  }

  return nonRepeatingChar;
}

console.log(main("abcbbac"));
