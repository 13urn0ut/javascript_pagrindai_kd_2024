const names = [`Olivia`, `Jackson`, `Sophia`, `Elijah`, `Ava`, `Liam`, `Isabella`]


const removeOlivia = (arr) => {
    const names = [...arr]
    const nameIdx = names.indexOf(`Olivia`)
    names.splice(nameIdx, 1);
    return names 
}

const removeName = (arr, name) => {
    const names = [...arr]
    const nameIdx = names.indexOf(name)
    names.splice(nameIdx, 1);
    return names 
}

const addMason = (arr) => {
    const names = [...arr]
    names.unshift(`Mason`)
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
  

console.log(removeOlivia(names));
console.log(removeName(names, `Olivia`));
console.log(addMason(names));
console.log(addNameToStart(names, `Mason`));
console.log(addNameToEnd(names, `Arturas`));
console.log(addWithBob(names));
console.log(sortZA(names));

