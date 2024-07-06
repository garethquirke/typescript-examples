//  Children's game called FizzBuzz
// * count from 1 to 30
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function FizzBuzz() {
    var arr = __spreadArray([], Array(30), true);
    var divisibleBy = function (numerator, demonenator) {
        return numerator % demonenator === 0;
    };
    var fizz = "fizz";
    var buzz = "buzz";
    var scenarios = [{ text: "fizz", value: 3 }, { text: 'buzz', value: 5 }];
    console.log(arr.map(function (el, index) {
        var currValue = index + 1;
        var scenarioResult = scenarios.map(function (sc) { return divisibleBy(currValue, sc.value) ? sc.text : ""; }).join("");
        if (scenarioResult === "") {
            return currValue.toString();
        }
        return scenarioResult;
    }));
}
FizzBuzz();
