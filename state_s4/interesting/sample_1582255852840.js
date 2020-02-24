function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = {toString:Uint8Array,d:"symbol",c:v4,a:13.37};
// v5 = .object(ofGroup: Object, withProperties: ["a", "toString", "__proto__", "d", "c"])
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
// v27 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
