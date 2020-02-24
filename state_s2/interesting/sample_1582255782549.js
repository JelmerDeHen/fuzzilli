function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = {toString:Uint8Array,d:"symbol",c:v4,a:13.37};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "a", "d", "toString"])
let v6 = -9007199254740991;
function v7(v8,v9) {
    const v10 = v8 in v7;
    // v10 = .boolean
    let v16 = 0;
    let v19 = 0;
    let v20 = 0;
    const v21 = v20 + 1;
    // v21 = .primitive
    v20 = v21;
    return v4;
}
const v27 = [1337];
// v27 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v28 = v27;
const v29 = v7(v28);
// v29 = .unknown
const v30 = v7();
// v30 = .unknown
const v31 = v30 + v6;
// v31 = .primitive
const v32 = v7(v31,v5);
// v32 = .unknown
}
%NeverOptimizeFunction(main);
main();
