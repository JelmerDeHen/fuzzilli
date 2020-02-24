function main() {
const v2 = {__proto__:"POSITIVE_INFINITY"};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v6 = v5;
const v10 = [13.37,this,13.37,10];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v11 = [13.37,1337,v10];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v15 = 0;
do {
    let v18 = 0;
    while (v18 < 4) {
        const v19 = v11.push(v6);
        // v19 = .integer
        const v20 = v18 + 1;
        // v20 = .primitive
        v18 = v20;
        v11[v18] = v18;
    }
    const v21 = v15 + 1;
    // v21 = .primitive
    v15 = v21;
} while (v15 < 10);
let v22 = v2;
const v23 = (-2268785948)[v22];
// v23 = .unknown
const v24 = new Int8Array(v11);
// v24 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "byteOffset", "byteLength", "length", "buffer"], withMethods: ["reduce", "reverse", "values", "every", "some", "reduceRight", "join", "sort", "entries", "keys", "forEach", "filter", "copyWithin", "subarray", "lastIndexOf", "fill", "find", "slice", "findIndex", "includes", "indexOf", "set", "map"])
const v25 = v24.sort(v23);
// v25 = .undefined
}
%NeverOptimizeFunction(main);
main();
