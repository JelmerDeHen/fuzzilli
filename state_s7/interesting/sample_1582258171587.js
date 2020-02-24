function main() {
function v1(v2,v3) {
    let v10 = 0;
    v10 = 8;
    return v2;
}
const v13 = [1337];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
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
