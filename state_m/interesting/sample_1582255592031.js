function main() {
function v2(v3,v4) {
    let v7 = 0;
    let v10 = 0;
    const v11 = v10 + 1;
    // v11 = .primitive
    v10 = v11;
    const v12 = v7 + 1;
    // v12 = .primitive
    v7 = v12;
}
const v14 = [1337];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v15 = v14;
const v16 = v2(1024,4.0);
// v16 = .unknown
function v17(v18,v19) {
}
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v22 = v21;
const v23 = v17(v22);
// v23 = .unknown
for (const v25 in "object") {
    let v27 = 1903240934;
    const v29 = new Int8Array(v27);
    // v29 = .object(ofGroup: Int8Array, withProperties: ["constructor", "buffer", "__proto__", "length", "byteOffset", "byteLength"], withMethods: ["indexOf", "includes", "fill", "entries", "forEach", "reduceRight", "set", "values", "find", "slice", "map", "some", "copyWithin", "findIndex", "reverse", "keys", "filter", "subarray", "reduce", "join", "sort", "lastIndexOf", "every"])
}
const v30 = v2(v16,v15);
// v30 = .unknown
}
%NeverOptimizeFunction(main);
main();
