function main() {
function v1(v2,v3) {
    let v10 = 0;
    v10 = 8;
    return v2;
}
const v13 = [1337];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
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
