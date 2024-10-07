const monetos = () => {
    let coinSum = 0;
    alert(`Turite ${coinSum} monetų.`)
    let answ = prompt(`Ar norėtumėt monėtos?`)
    while(answ !== `Ne`) {
        if (answ === `Taip`) coinSum++;
        alert(`Turite ${coinSum} monetą/as/ų.`)
        answ = prompt(`Ar norėtumėt monėtos?`);
    }
    alert(`Iki!`);
    return
}

monetos()