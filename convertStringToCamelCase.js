// Date: July 2, 2023
// CodeWars: Isograms (6 kyu challenge)
// Description: Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

function toCamelCase(str) {
  var words = str.split(/[-_]/);
  var camelCase = words[0];

  for (let i = 1; i < words.length; i++) {
    camelCase += words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return camelCase;
}


// ----- Best Practices ----- //

// function toCamelCase(str){
//   return str.split(/-|_/).map((word, i) => {
//     return i == 0 ? word : word[0].toUpperCase() + word.slice(1); 
//   }).join('');
// }

// ----- Best Practices ----- //