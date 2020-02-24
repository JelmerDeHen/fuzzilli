function main() {
let v1 = 13.37;
function v2(v3,v4) {
    const v5 = v3 in v2;
    // v5 = .boolean
    let v8 = 0;
    const v10 = Math.log1p(v5);
    // v10 = .number
    const v15 = v8 + 1;
    // v15 = .primitive
    v8 = v15;
}
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v18 = v17;
const v19 = v2(v18);
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();
