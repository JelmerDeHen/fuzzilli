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
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v18 = v17;
const v19 = v2(v18);
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();
