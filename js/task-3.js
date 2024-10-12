// function getElementWidth(content, padding, border) {
//     numContent = Number.parseFloat(content);
//     numPadding = Number.parseFloat(padding);
//     numBorder = Number.parseFloat(border);
//     let elementWidth = numContent + numPadding * 2 + numBorder * 2;
//     return elementWidth;
// }
// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200
// function checkForSpam(message) {
//     const word1 = "spam";
//     const word2 = "sale";
//     const normMessage = message.toLowerCase();
//     return normMessage.includes(word1) || normMessage.includes(word2);
// }

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

function filterArray(numbers, value) {
    const newArray = [];
    for (const a of numbers) {
        if (a > value) {
            newArray.push(a);
        }
    }
    return newArray;
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
