
// o(n^2)

function findDuplicates (arr) {
    let seen = new Set ()
    let duplicates = []

    for (let element of arr) {
        if(seen.has(element) && !duplicates.includes(element)) {
            duplicates.push(element)
        }
        seen.add(element)
    }
    return duplicates
}

// o(n) 

function findDuplicates(arr) {
    let seen = new Set();
    let duplicates = new Set();

    for (let element of arr) {
        if(seen.has(element)) {
            duplicates.add(element);
        }
        seen.add(element);
    }
    return Array.from(duplicates);
}