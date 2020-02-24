function main() {
function v1(v2,v3) {
    let v7 = 0;
    const v9 = v7 + 1;
    // v9 = .primitive
    v7 = v9;
    const v15 = Object();
    // v15 = .object()
    const v17 = Object(13.37,1337);
    // v17 = .object()
    Object.__proto__ = v17;
}
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v21 = v20;
const v22 = v1(v21);
// v22 = .unknown
const v23 = v1(1024,4.0);
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
