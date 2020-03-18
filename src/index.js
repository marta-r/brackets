module.exports = function check(str, bracketsConfig) {
    let obj = {};
    let arr = str.split("");

    for (let i = 0; i < bracketsConfig.length; i++) {
        obj[[bracketsConfig[i][0]]] = [bracketsConfig[i][1]];
    }
    let arrProperty = Object.values(obj);

    let arrBracket = [];

    if (!(arr.length % 2 == 0)) {
        return false;
    }

    for (let a = 0; a < arr.length; a++) {
        if (arrBracket.length == 0) {
            arrBracket.push(arr[a]);
        } else if (
            obj.hasOwnProperty(arr[a]) ||
            arrProperty.find(item => item == arr[a])
        ) {
            if (obj[arrBracket[arrBracket.length - 1]] == arr[a]) {
                arrBracket.pop();
            } else {
                arrBracket.push(arr[a]);
            }
        } else if (!obj.hasOwnProperty(arr[i]) || !(obj[key] == arr[i])) {
            return false;
        }
    }

    if (arrBracket.length == 0) return true;
    else return false;
};
