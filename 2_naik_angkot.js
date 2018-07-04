// Logic Challenge - Naik Angkot
// Problem
// Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

// Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

// Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]

// Code
function naikAngkot(arrPenumpang) {
    if(arrPenumpang == undefined) return []
    const arr = arrPenumpang
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    let result = [];

    function bayaran(turun, naik) {
        for (let a = 0; a < rute.length ; a++) {

            if (rute[a] == turun) down = a
            else if (rute[a] == naik) up = a
        }
        return (down - up) * 2000
    }

    for (let a = 0; a < arr.length; a++) {
        let temp = {}
        for (let b = 0; b < arr[a].length; b++) {
            temp.name = arr[a][0],
            temp.tujuan = arr[a][2],
            temp.naikDari = arr[a][1],
            temp.bayar = bayaran(temp.tujuan, temp.naikDari)

        }
        result.push(temp)
    }
    return result

}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]