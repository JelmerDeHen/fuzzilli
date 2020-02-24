function main() {
const v2 = {__proto__:"POSITIVE_INFINITY"};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v6 = v5;
const v10 = [13.37,this,13.37,10];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v11 = [13.37,1337,v10];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
// v24 = .object(ofGroup: Int8Array, withProperties: ["buffer", "__proto__", "byteOffset", "length", "constructor", "byteLength"], withMethods: ["fill", "set", "sort", "subarray", "slice", "reduce", "includes", "every", "some", "copyWithin", "reduceRight", "reverse", "indexOf", "lastIndexOf", "values", "entries", "keys", "join", "map", "find", "findIndex", "forEach", "filter"])
const v25 = v24.sort(v23);
// v25 = .undefined
}
%NeverOptimizeFunction(main);
main();
