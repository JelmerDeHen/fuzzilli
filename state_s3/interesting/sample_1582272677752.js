function main() {
const v1 = new Promise(Promise);
// v1 = .object()
let v3 = 13.37;
function v4(v5,v6) {
    for (let v10 = 0; v10 < 3; v10++) {
        for (let v14 = 0; v14 < 127; v14++) {
        }
    }
    let v18 = 0;
    const v19 = v18 + 1;
    // v19 = .primitive
    v18 = v19;
    const v23 = [1337,1337];
    // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v24 = {b:13.37,d:1607264097,e:1607264097,constructor:v23,valueOf:WeakSet};
    // v24 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "d", "b", "constructor", "e"])
    v24[268435456] = v1;
}
const v26 = [1337];
// v26 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v27 = v26;
const v28 = v4(v27);
// v28 = .unknown
const v29 = v4(v3,v28);
// v29 = .unknown
}
%NeverOptimizeFunction(main);
main();
