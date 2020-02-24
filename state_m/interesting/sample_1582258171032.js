function main() {
function v1(v2,v3) {
    let v10 = 0;
    v10 = 8;
    return v2;
}
const v13 = [1337];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v14 = v13;
const v15 = v1(v14);
// v15 = .unknown
const v16 = v1();
// v16 = .unknown
v15.length = 2;
v13[1337] = 13.37;
}
%NeverOptimizeFunction(main);
main();
