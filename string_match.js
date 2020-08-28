/** 
* Fresh is running a promotion in which customers receive prizes for purchasing a secret combination of fruits. The combination will change each day, and the team running the promotion wants to use a code list to make it easy to change the combination. The code list contains groups of fruits. Both the order of the groups within the code list and the order of the fruits within the groups matter. However, between the groups of fruits, any number, and type of fruit is allowable. The term "anything" is used to allow for any type of fruit to appear in that location within the group.
* Consider the following secret code list: [[apple, apple], [banana, anything, banana]]
* Based on the above secret code list, a customer who made either of the following purchases would win the prize:
* orange, apple, apple, banana, orange, banana
* apple, apple, orange, orange, banana, apple, banana, banana
* Write an algorithm to output 1 if the customer is a winner else output 0.
* Input: The input to the function/method consists of two arguments:
*  codeList, a list of lists of strings representing the order and grouping of specific fruits that must be purchased in order to win the prize for the day.
*  shoppingCart, a list of strings representing the order in which a customer purchases fruit.
* Output: 1 (winner) or 0 (loser)
* Constraints: Order matters - both for the fruits and the order of the groups, filler fruits are okay
* Edge: if codeList is emtpy = winner, if shoppingCart is empty = loser
*/

var findWinner = () => {
    let codeList = [["apple", "apple"], ["banana", "anything", "banana"]];
    let shoppingCart = ["orange", "apple", "banana", "orange", "banana"];

    if (codeList.length < 1) { return 1; }
    if (shoppingCart.length < codeList.length) { return 0; }

    let cartIndex = 0;
    let goalIndex = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i] === codeList[cartIndex][goalIndex] || codeList[cartIndex][goalIndex] === "anything" && goalIndex < codeList[cartIndex].length) {
            goalIndex++;
        }
        else if (goalIndex === codeList[cartIndex].length - 1) {
            cartIndex++;
        }
        // need to add in a loop break for promo losers
        // else { return 0; }
    }
    return 1;
}


console.log(findWinner());