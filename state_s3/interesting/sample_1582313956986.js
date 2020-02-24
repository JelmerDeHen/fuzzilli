function main() {
const v2 = {__proto__:"POSITIVE_INFINITY"};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v6 = v5;
const v10 = [13.37,this,13.37,10];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v11 = [13.37,1337,v10];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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
// v24 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "byteLength", "buffer", "constructor", "__proto__", "length"], withMethods: ["every", "keys", "fill", "sort", "indexOf", "map", "set", "entries", "reduce", "reduceRight", "find", "values", "some", "filter", "join", "lastIndexOf", "reverse", "forEach", "subarray", "findIndex", "includes", "copyWithin", "slice"])
const v25 = v24.sort(v23);
// v25 = .undefined
}
%NeverOptimizeFunction(main);
main();
