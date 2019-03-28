const n = 9;
const ar = [10,20,20,10,10,30,50,10,20]
function sockMerchant(n, ar) { // find how many pair
    ar.sort((a,b) => {
        return a - b;
    })
    let counter = 0;
    let lastI = 0;
    ar.forEach((y, idx, array) => {
        if (y !== lastI || idx === array.length - 1) {
            const countAr = ar.filter(x => {
                return x === lastI
            });
            counter += Math.floor(countAr.length / 2);
            lastI = y;
        }
    });
    return counter;
}