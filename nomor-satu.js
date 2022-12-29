// contoh
// const arr = [5, 7, 7, 9, 10, 4, 5, 10, 6, 5];

// soal bagian a
// const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];

// soal bagian b
// const arr = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5];

// soal bagian c
const arr = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];

const duplicates = arr.reduce((acc,el,i,arr) => {
    if(arr.indexOf(el) !== i && acc.indexOf(el) < 0) {
        acc.push(el);
    }
    return acc;
}, [])

let count = 0;

arr.map((i, index) => {
    duplicates.map((j, jindex) => {
        if(arr.filter(()=>{return i===j}).length){
            count++;
        }
    })
})
count = Math.floor(count/2); 

console.log(count)