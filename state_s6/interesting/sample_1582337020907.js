function main() {
const v1 = {__proto__:536870912};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v4 = [-4163351276,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = {valueOf:v4};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
const v7 = {e:v5,d:"d"};
// v7 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "d"])
function v8(v9,v10) {
    let v13 = -128;
    while (v13 != 5) {
        const v14 = v7 <= v13;
        // v14 = .boolean
        const v15 = v13 + 1;
        // v15 = .primitive
        const v16 = v14 - v13;
        // v16 = .number
        const v17 = v13 + v16;
        // v17 = .primitive
        v13 = v15;
    }
}
const v19 = [1337];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v20 = v19;
const v21 = v8(v20);
// v21 = .unknown
const v25 = v8(v19,v21);
// v25 = .unknown
}
%NeverOptimizeFunction(main);
main();
