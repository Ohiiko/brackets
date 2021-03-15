module.exports = function check(input, bracketsConfig, opening, closing) {
    if (opening == undefined || closing == undefined) {
        (opening = []), (closing = []);
        for (let i = 0; i < bracketsConfig.length; i++) {
            opening.push(bracketsConfig[i][0]);
            closing.push(bracketsConfig[i][1]);
        }
    } else {
        opening, closing;
    }

    if (input.length == 0) return true;
    let type = opening.indexOf(input.charAt(0));
    if (type == -1) return false;
    for (let pos = 1; pos < input.length; pos++) {
        // forward search
        if (closing.indexOf(input.charAt(pos)) == type) {
            let inside = input.slice(1, pos);
            let after = input.slice(pos + 1);
            if (
                check(inside, bracketsConfig, opening, closing) &&
                check(after, bracketsConfig, opening, closing)
            )
                return true;
        }
    }
    return false;
};
