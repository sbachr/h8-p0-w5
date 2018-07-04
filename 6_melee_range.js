// Logic Challenge: Melee Ranged Grouping
// Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

// Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

// Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

// Jika input adalah string kosong ('') maka return array kosong

// Submit Tugas Disini

function meleeRangedGrouping (str) {
    if(str.length == 0) return []

    str = str.split(',')
    var result = [];
    var near   = [];
    var far    = [];
    str.forEach(element => {
        const [weapon, range] = element.split('-')
        console.log(range);
        if(range == 'Ranged') near.push(weapon)
        else far.push(weapon)
    });
    result.push(near)
    result.push(far)

    return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

// console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

// console.log(meleeRangedGrouping('')); // []