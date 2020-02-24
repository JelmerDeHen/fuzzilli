function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v2 = v1;
const v5 = [13.37,13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [v5,-2,-4294967297];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v10 = [13.37,13.37,13.37,-4294967297];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v12 = [v1,-93687789,v10];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v17 = 0;
while (v17 < 4) {
    const v18 = v12.push(v2);
    // v18 = .integer
    const v19 = v17 + 1;
    // v19 = .primitive
    v17 = v19;
}
const v20 = [-1242988596,-105358.03612783318,-105358.03612783318,-105358.03612783318,-105358.03612783318];
// v20 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v21 = v20;
const v22 = v7[v21];
// v22 = .unknown
const v23 = new Uint16Array(v12);
// v23 = .object(ofGroup: Uint16Array, withProperties: ["buffer", "byteOffset", "length", "byteLength", "__proto__", "constructor"], withMethods: ["join", "slice", "sort", "reduceRight", "reverse", "forEach", "values", "some", "findIndex", "find", "keys", "map", "filter", "fill", "set", "includes", "subarray", "reduce", "indexOf", "entries", "every", "copyWithin", "lastIndexOf"])
const v24 = v23.sort(v22);
// v24 = .undefined
}
%NeverOptimizeFunction(main);
main();
