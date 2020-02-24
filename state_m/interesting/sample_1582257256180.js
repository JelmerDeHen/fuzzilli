function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v2(v3,v4) {
    const v6 = Symbol.search;
    // v6 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    const v7 = v1[v6];
    // v7 = .unknown
    const v10 = new Int16Array(19873);
    // v10 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
    for (const v11 of v10) {
    }
}
const v13 = [1337];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v14 = v13;
const v15 = v2(v14);
// v15 = .unknown
const v16 = v2();
// v16 = .unknown
const v17 = v2();
// v17 = .unknown
let v20 = 0;
const v21 = v20 + 1;
// v21 = .primitive
v20 = v21;
v1[2] = v13;
const v22 = v2();
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();
