const n = 9;
const ar = [10,20,20,10,10,30,50,10,20];
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

// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
const c = [0,0,0,0,1,0];
function jumpingOnClouds(c) { // Jumping on the Clouds
    let counter = 0;
    for (let i = 0; i <= c.length; i++){
        if (c[i] == 0 && i != 0) {
            counter += 1;
        }
        if (c[i] == 0 && c[i + 1] == 0 && c[i + 2] == 0) {
            c.splice(i + 2, 1);
        }
    }
    return counter;
}