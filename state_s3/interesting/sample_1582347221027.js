function main() {
const v3 = [-4163351276,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = {valueOf:v3};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
const v6 = {e:v4,d:"d"};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "e"])
function v7(v8,v9) {
    let v12 = -128;
    while (v12 < 5) {
        const v13 = v6 <= v12;
        // v13 = .boolean
        const v14 = v12 + 1;
        // v14 = .primitive
        const v15 = v13 - v13;
        // v15 = .number
        const v16 = v12 + v15;
        // v16 = .primitive
        v12 = v14;
        let v17 = Int8Array;
        delete v16[v17];
    }
}
const v19 = [1337];
// v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v20 = v19;
const v21 = v7(v20);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
