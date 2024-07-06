

//  Children's game called FizzBuzz
// * count from 1 to 30

function FizzBuzz() {
    let arr: number[] = [...Array(30)];
    const divisibleBy = (numerator: number, demonenator: number): boolean => 
        numerator % demonenator === 0;  

    const fizz = "fizz";
    const buzz = "buzz";

    type scenario = {
        text: string,
        value: number
    };

    const scenarios: scenario[] = [{text: "fizz", value: 3 }, {text: 'buzz', value: 5}];

    console.log(arr.map((el: number, index: number) => {
        const currValue = index + 1;

        const scenarioResult = 
            scenarios.map(sc => divisibleBy(currValue, sc.value) ? sc.text : "").join("");

        if (scenarioResult === "") {
            return currValue.toString();
        } 
        return scenarioResult;
    }));
}

FizzBuzz();