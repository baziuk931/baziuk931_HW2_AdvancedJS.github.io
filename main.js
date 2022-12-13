//Variables
let result = 0;

let n = prompt('please specify the N value - integer number');
while (!Number.isInteger(Number(n)) || n === '' || n < 0) {
    alert("Wrong value, please add integer number");
    n = prompt('please specify the N value - integer number');
}

let m = prompt('please specify the M value - integer number');
while (!Number.isInteger(Number(m)) || m === '' || m < 0) {
    alert("Wrong value, please add integer number");
    m = prompt('please specify the M value - integer number');
}

while (m <= n) {
    alert(`Wrong value, please add integer number bigger than ${n}`);
    m = prompt('please specify the M value - integer number');
}

const skipEvenNumber = confirm("Should we skip even numbers? If so click 'Ok', otherwise we will summarize all values");
console.log(skipEvenNumber);

if (skipEvenNumber) {
    if (!(n % 2)) {
        n++;
        for (let i = n; i <= m; i += 2) {
            result += i;
            console.log(result);
        }
    }
    else {
        for (let i = Number(n); i <= m; i += 2) {
            result += i;
            console.log(result);
        }
    }
}
else {
    for (let i = n; i <= m; i++) {
        result += Number(i);
        console.log(result);
    }
}

document.writeln(`The sum of numbers is ${result}.`);
