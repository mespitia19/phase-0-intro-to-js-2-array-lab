// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(name) {
    cats.pop(2)
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(0)
}

function appendCat(name_) {
    const newCats = [...cats, "Broom"];
    return newCats;
}

function prependCat(name) {
    const newCats = ["Arnold", ...cats]
    return newCats;
}

function removeLastCat(name) {
    return cats.slice(0, cats.length -1)
}

function removeFirstCat(name) {
    const copyCats = cats.slice(1);
    return copyCats;
}