

    
// Problem Solving No - 1

    const alienWord = "olleh dlrow";
    const reverseWords = alienWord.split(" ");
    const humanWords = reverseWords.map(word => word.split("").reverse().join(""));
    const showHumanwords = humanWords.join(" ");
    console.log(showHumanwords);
    

// Problem Solving No - 2

    const findNumbers = [10, null, 20, null, 30];
    const showNumbers = findNumbers.map((value, index) => {
    
        if (value === null) {
        const prevValue = findNumbers[index - 1];
        const nextValue = findNumbers[index + 1];
        return prevValue + (nextValue - prevValue) / 2;
        } else {
        return value;}
    });

    console.log(showNumbers);


// Problem Solving No - 3     
    
    const parrotSay = ["rum", "gold", "parrot food", "rum", "gold", "map"];
    const pirateSay = removeDuplicates(parrotSay);
    
    console.log(pirateSay);

    function removeDuplicates(shoppingList) {
        return shoppingList.filter((value, index, self) => self.indexOf(value) === index);
    }

// Problem Solving No - 4

    function countWays(n) {
        if (n === 1) return 1;
        if (n === 2) return 2;
        if (n === 3) return 4;
      
        const ways = [0, 1, 2, 4];
        for (let i = 4; i <= n; i++) {
          ways[i] = ways[i - 1] + ways[i - 2] + ways[i - 3];
        }
        return ways[n];
    }

    const n = 4;
    const ways = countWays(n);
    
    console.log(ways);


// Problem Solving No - 5

    const ingredients = "tomatoesOnionsLettuce";
    const separatedIngredients = separateIngredients(ingredients);
    console.log(separatedIngredients);

    function separateIngredients(ingredients) {
        let result = [];
        let currentIngredient = '';
      
        for (let i = 0; i < ingredients.length; i++) {
          let char = ingredients[i];
          if (char === char.toUpperCase()) {
            if (currentIngredient !== '') {
              result.push(currentIngredient);
            }
            currentIngredient = char.toLowerCase();
          } else {
            currentIngredient += char;
          }
        }
        if (currentIngredient !== '') {
          result.push(currentIngredient);
        }
        return result;
      }



// Problem Solving No - 6


function totalGoldCoins(m) {
  let totalCoins = 0;
  for (let i = 1; i <= m; i++) {
    totalCoins += i;
  }
  return totalCoins;
}
const m = 5;
let totalCoins = totalGoldCoins(m);
console.log(totalCoins);

function totalGoldCoins(m) {
  return m * (m + 1) / 2;
}

// Problem Solving No - 7

function isPerfectSquare(n) {
  let sqrt = Math.sqrt(n);
  return sqrt === parseInt(sqrt) ? n : "Try again!";
}

const age = 49;
const result = isPerfectSquare(age);
console.log(result);

const age2 = 50;
const result2 = isPerfectSquare(age2);
console.log(result2);


// Problem Solving No - 8


function reverseWord(phrase) {
  let words = phrase.split(' ');
  let reversedWords = words.reverse();
  return reversedWords.join(' ');
}
const phrase = "The dragon breathes fire";
const reversedPhrase = reverseWord(phrase);
console.log(reversedPhrase);


// Problem Solving No - 9


function mergeInventories(inventory1, inventory2) {
  let mergedInventory = [...inventory1, ...inventory2];
  let uniqueItems = [...new Set(mergedInventory)];
  return uniqueItems;
}
const inventory1 = ["sword", "shield", "potion"];
const inventory2 = ["potion", "ring", "shield"];
const mergedInventory = mergeInventories(inventory1, inventory2);
console.log(mergedInventory);


// Problem Solving No - 10


function sortMapFragments(fragmentIds) {
  return fragmentIds.sort((a, b) => a - b);
}
const fragmentIds = [9, 3, 5, 7, 1];
const sortedFragmentIds = sortMapFragments(fragmentIds);
console.log(sortedFragmentIds);


