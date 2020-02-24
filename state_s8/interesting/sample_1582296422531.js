function main() {
const v2 = [1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v3 = v2;
const v8 = [13.37,13.37,13.37,-4294967297];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v9 = [-2.2250738585072014e-308,1337,v8];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v14 = 0;
do {
    let v17 = 0;
    while (v17 < 4) {
        const v18 = v9.push(v3);
        // v18 = .integer
        const v19 = v17 + 1;
        // v19 = .primitive
        v17 = v19;
        v9[v17] = v17;
    }
    v2[0] = v17;
    const v20 = v14 + 1;
    // v20 = .primitive
    v14 = v20;
} while (v14 < 10);
const v21 = [-1242988596,2.2250738585072014e-308,2.2250738585072014e-308,2.2250738585072014e-308,2.2250738585072014e-308];
// v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v22 = v21;
const v23 = (-2268785948)[v22];
// v23 = .unknown
const v24 = new Int32Array(v9);
// v24 = .object(ofGroup: Int32Array, withProperties: ["buffer", "length", "__proto__", "constructor", "byteLength", "byteOffset"], withMethods: ["forEach", "entries", "find", "reduce", "lastIndexOf", "indexOf", "map", "slice", "findIndex", "set", "keys", "subarray", "join", "filter", "some", "values", "fill", "copyWithin", "reverse", "sort", "includes", "every", "reduceRight"])
const v25 = v24.sort(v23);
// v25 = .undefined
}
%NeverOptimizeFunction(main);
main();
