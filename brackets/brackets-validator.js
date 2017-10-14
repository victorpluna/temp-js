
module.exports.validate = function(brackets) {

    //empty parameter
    if(!brackets || !brackets.length){
        return false;
    }

    var opening_brackets = ['[', '{', '('];
    var closing_brackets = [']', '}', ')'];
    var result = [];

    for (var i = 0; i < brackets.length; i++) {
        var character = brackets[i];

        if (opening_brackets.indexOf(character) > -1) {
            result.push(character);
        } else {
            var expected_bracket = opening_brackets[closing_brackets.indexOf(character)];
            
            if (result.length === 0 || (result.pop() !== expected_bracket)) {
                return false;
            }
        }
    }
    return !result.length;
}