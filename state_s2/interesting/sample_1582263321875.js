function main() {
function v2(v3,v4) {
    let v8 = 0;
    const v10 = v8 + 1;
    // v10 = .primitive
    v8 = v10;
    let v14 = 0;
    arguments[0] = 13.37;
    const v15 = v14 + 1;
    // v15 = .primitive
    v14 = v15;
}
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v18 = v17;
const v19 = v2(v18);
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();
