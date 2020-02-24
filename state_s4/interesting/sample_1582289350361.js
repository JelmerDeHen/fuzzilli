function main() {
const v2 = [1337];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v3 = v2;
const v11 = [13.37,13.37,13.37,-4294967297];
// v11 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v12 = [13.37,1337,v11];
// v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v17 = 0;
do {
    let v20 = 0;
    while (v20 < 4) {
        const v21 = v12.push(v3);
        // v21 = .integer
        const v22 = v20 + 1;
        // v22 = .primitive
        v20 = v22;
    }
    const v23 = v17 + 1;
    // v23 = .primitive
    v17 = v23;
} while (v17 < 10);
const v24 = [-1242988596,2.2250738585072014e-308,2.2250738585072014e-308,2.2250738585072014e-308,2.2250738585072014e-308];
// v24 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v25 = v24;
const v26 = (-2268785948)[v25];
// v26 = .unknown
const v27 = new Int32Array(v12);
// v27 = .object(ofGroup: Int32Array, withProperties: ["length", "__proto__", "constructor", "buffer", "byteOffset", "byteLength"], withMethods: ["map", "copyWithin", "forEach", "subarray", "entries", "find", "reduceRight", "set", "filter", "keys", "indexOf", "some", "slice", "reverse", "values", "reduce", "findIndex", "includes", "sort", "fill", "every", "lastIndexOf", "join"])
const v28 = v27.sort(v26);
// v28 = .undefined
}
%NeverOptimizeFunction(main);
main();
