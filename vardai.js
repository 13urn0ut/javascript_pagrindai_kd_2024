const names = [`Olivia`, `Jackson`, `Sophia`, `Elijah`, `Ava`, `Liam`, `Isabella`]

const removeName = (arr, name) => {
    const names = [...arr]
    const nameIdx = names.indexOf(name)
    names.splice(nameIdx, 1);
    return names 
}

const addNameToStart = (arr, name) => {
    const names = [...arr]
    names.unshift(name)
    return names
}

const addNameToEnd = (arr, name) => {
    const names = [...arr]
    names.push(name)
    return names
}

const addWithBob = (arr) => [...arr].map(name => `${name}withBob`);

const sortZA = (arr) => [...arr].sort().reverse()
  

console.log(removeName(names, `Olivia`));
console.log(addNameToStart(names, `Mason`));
console.log(addNameToEnd(names, `Arturas`));
console.log(addWithBob(names));
console.log(sortZA(names));

