function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = {toString:"species",valueOf:v3,__proto__:"species"};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "toString"])
let v7 = v6;
let v10 = 0;
do {
    v5.toString = Boolean;
    const v11 = v10 + 1;
    // v11 = .primitive
    v10 = v11;
} while (v10 < 10);
try {
    let v14 = 0;
    while (v14 < 5) {
        let v17 = 0;
        while (v17 < 4) {
            const v18 = new Boolean(v7);
            // v18 = .boolean
            const v19 = v17 + 1;
            // v19 = .primitive
            v17 = v19;
        }
        const v20 = v14 + 1;
        // v20 = .primitive
        v14 = v20;
    }
} catch(v21) {
    let v26 = 0;
    const v27 = v7 instanceof 0;
    // v27 = .boolean
    let v30 = 0;
    let v31 = 0;
}
v3.valueOf = Boolean;
const v33 = {set:Array};
// v33 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
v3[299523686] = v33;
let v36 = 0;
const v37 = v36 + 1;
// v37 = .primitive
v36 = v37;
let v50 = 0;
const v51 = v50 + 1;
// v51 = .primitive
v50 = v51;
let v54 = 0;
const v55 = v54 + 1;
// v55 = .primitive
v54 = v55;
}
%NeverOptimizeFunction(main);
main();
