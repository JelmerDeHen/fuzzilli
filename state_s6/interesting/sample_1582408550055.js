function main() {
const v3 = [-4163351276,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = {valueOf:v3};
// v4 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
const v6 = {e:v4,d:"d"};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "d"])
function v7(v8,v9) {
    let v12 = -128;
    while (v12 < 5) {
        const v13 = v6 <= v12;
        // v13 = .boolean
        const v14 = v12 + 1;
        // v14 = .primitive
        const v15 = v13 - v13;
        // v15 = .number
        const v16 = -4163351276 - v15;
        // v16 = .number
        v12 = v14;
        let v17 = Int8Array;
        delete v16[v17];
    }
}
const v19 = [1337];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v20 = v19;
const v21 = v7(v20);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
