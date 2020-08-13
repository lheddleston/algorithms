// loop through the array of characters
// check if other characters in array match current character
// if yes - move on
// if no, print character and exit

function firstNotRepeatingCharacter(s) {
    var charTrack = {};
    for (var i = 0; i < s.length; i++) {
        if (charTrack[s[i]])
            charTrack[s[i]] = 'Repeat Value'

        else
            charTrack[s[i]] = 'First Time'

    }
    for (i = 0; i < s.length; i++) {
        if (charTrack[s[i]] === 'First Time') {
            return s[i];
        }
    }
    return '';
}

console.log(firstNotRepeatingCharacter('abacdeca'));