const sum = () => {
    const result = {
        sumOdd: 0,
        sumEven: 0,
    }

    for (let i = 0; i <= 100; i++) {
        i % 2 === 0 ? result.sumEven += i : result.sumOdd += i;
    }

    return result
}

console.log(sum())