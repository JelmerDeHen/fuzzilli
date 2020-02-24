function main() {
function v1(v2,v3) {
    const v5 = Math.fround(v2);
    // v5 = .number
    const v6 = v5 != Infinity;
    // v6 = .boolean
}
const v9 = [];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v12 = [13.37,13.37,13.37,13.37];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v14 = [v12,-2,-4294967297];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v18 = [13.37,13.37,13.37,-4294967297];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v20 = [13.37,-93687789,v18];
// v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v25 = 0;
do {
    let v27 = 2237842118;
    const v28 = v27 + 1;
    // v28 = .primitive
    const v29 = v20.push(v28,v25,2237842118,v9);
    // v29 = .integer
    const v30 = v25 + 1;
    // v30 = .primitive
    v25 = v30;
} while (v25 < 10000);
const v31 = [-1242988596,2.2250738585072014e-308,2.2250738585072014e-308,2.2250738585072014e-308,2.2250738585072014e-308];
// v31 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v32 = v31;
const v33 = v14[v32];
// v33 = .unknown
const v34 = new Float64Array(v20);
// v34 = .object(ofGroup: Float64Array, withProperties: ["constructor", "length", "buffer", "__proto__", "byteOffset", "byteLength"], withMethods: ["map", "set", "filter", "sort", "findIndex", "forEach", "some", "copyWithin", "keys", "subarray", "join", "every", "find", "entries", "indexOf", "reduce", "values", "reverse", "reduceRight", "lastIndexOf", "fill", "slice", "includes"])
const v35 = v34.sort(v33);
// v35 = .undefined
}
%NeverOptimizeFunction(main);
main();
