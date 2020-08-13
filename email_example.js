/**
 * We have an email template with places for personalized 
 * info to be inserted. Insert the values in the dictionary into the 
 * appropriate places in the string.
 **/
var string = "Hello there {{firstName}} {{lastName}}! I heard you are big into {{thing}}. That's great!";
var valueDict = { firstName: "Susan", lastName: "Beavers", thing: "gardening" };

var finalTemplate = (string, valueDict) => {

    var finalTemplate = string;

    for (var key in valueDict) {

        var keyPlace = finalTemplate.indexOf("{{" + key + "}}");
        var firstString = finalTemplate.slice(0, keyPlace);
        var lastString = finalTemplate.slice(keyPlace + key.length + 4, finalTemplate.length);

        if (keyPlace >= 0) {
            finalTemplate = firstString + valueDict[key] + lastString;
        }
        else {
            return -1;
        }
    }
    return finalTemplate;
}

console.log(finalTemplate(string, valueDict));
