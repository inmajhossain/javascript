

    
// // Problem Solving No - 1

//     const alienWord = "olleh dlrow";
//     const reverseWords = alienWord.split(" ");
//     const humanWords = reverseWords.map(word => word.split("").reverse().join(""));
//     const showHumanwords = humanWords.join(" ");
//     console.log(showHumanwords);
    

// // Problem Solving No - 2

//     const findNumbers = [10, null, 20, null, 30];
//     const showNumbers = findNumbers.map((value, index) => {
    
//         if (value === null) {
//         const prevValue = findNumbers[index - 1];
//         const nextValue = findNumbers[index + 1];
//         return prevValue + (nextValue - prevValue) / 2;
//         } else {
//         return value;}
//     });

//     console.log(showNumbers);


// // Problem Solving No - 3     
    
//     const parrotSay = ["rum", "gold", "parrot food", "rum", "gold", "map"];
//     const pirateSay = removeDuplicates(parrotSay);
    
//     console.log(pirateSay);

//     function removeDuplicates(shoppingList) {
//         return shoppingList.filter((value, index, self) => self.indexOf(value) === index);
//     }

// // Problem Solving No - 4

//     function countWays(n) {
//         if (n === 1) return 1;
//         if (n === 2) return 2;
//         if (n === 3) return 4;
      
//         const ways = [0, 1, 2, 4];
//         for (let i = 4; i <= n; i++) {
//           ways[i] = ways[i - 1] + ways[i - 2] + ways[i - 3];
//         }
//         return ways[n];
//     }

//     const n = 4;
//     const ways = countWays(n);
    
//     console.log(ways);


// // Problem Solving No - 5

//     const ingredients = "tomatoesOnionsLettuce";
//     const separatedIngredients = separateIngredients(ingredients);
//     console.log(separatedIngredients);

//     function separateIngredients(ingredients) {
//         let result = [];
//         let currentIngredient = '';
      
//         for (let i = 0; i < ingredients.length; i++) {
//           let char = ingredients[i];
//           if (char === char.toUpperCase()) {
//             if (currentIngredient !== '') {
//               result.push(currentIngredient);
//             }
//             currentIngredient = char.toLowerCase();
//           } else {
//             currentIngredient += char;
//           }
//         }
//         if (currentIngredient !== '') {
//           result.push(currentIngredient);
//         }
//         return result;
//       }






      function totalGoldCoins(n) {
        let totalCoins = 0;
        for (let i = 1; i <= n; i++) {
          totalCoins += i;
        }
        return totalCoins;
      }

      const n = 5;
      const totalCoins = totalGoldCoins(n);
      console.log(totalCoins);