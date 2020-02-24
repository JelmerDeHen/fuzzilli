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
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v18 = v17;
const v19 = v2(v18);
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();
