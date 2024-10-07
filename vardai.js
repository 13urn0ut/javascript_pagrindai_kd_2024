const names = [`Olivia`, `Jackson`, `Sophia`, `Elijah`, `Ava`, `Liam`, `Isabella`]


const removeOlivia = (arr = names) => {
    const names = [...arr]
    const nameIdx = names.indexOf(`Olivia`)
    names.splice(nameIdx, 1);
    return names 
}

const removeName = (arr = names, name) => {
    const names = [...arr]
    const nameIdx = names.indexOf(name)
    names.splice(nameIdx, 1);
    return names 
}

const addMason = (arr = names) => {
    const names = [...arr]
    names.unshift(`Mason`)
    return names
}

const addNameToStart = (arr = names, name) => {
    const names = [...arr]
    names.unshift(name)
    return names
}

const addNameToEnd = (arr = names, name) => {
    const names = [...arr]
    names.push(name)
    return names
}

const addWithBob = (arr = names) => [...arr].map(name => `${name}withBob`);

const sortZA = (arr = names) => [...arr].sort().reverse()
  

console.log(removeOlivia());
console.log(removeName(names, `Olivia`));
console.log(addMason(names));
console.log(addNameToStart(names, `Mason`));
console.log(addNameToEnd(names, `Arturas`));
console.log(addWithBob(names));
console.log(sortZA(names));

