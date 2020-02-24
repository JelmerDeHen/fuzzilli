function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v5 = [13.37,13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v6(v7,v8) {
    const v12 = new Int8Array(1337);
    // v12 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["values", "every", "reverse", "reduce", "lastIndexOf", "slice", "sort", "fill", "indexOf", "copyWithin", "set", "some", "subarray", "filter", "reduceRight", "forEach", "find", "join", "includes", "findIndex", "keys", "entries", "map"])
    v12.constructor = Uint8ClampedArray;
    const v15 = v12.slice(1000,1337);
    // v15 = .object(ofGroup: Int8Array, withProperties: ["byteLength", "__proto__", "buffer", "constructor", "length", "byteOffset"], withMethods: ["every", "slice", "reverse", "values", "filter", "findIndex", "reduceRight", "includes", "subarray", "fill", "reduce", "find", "sort", "map", "entries", "keys", "set", "indexOf", "copyWithin", "some", "forEach", "join", "lastIndexOf"])
}
const v16 = v5.sort(v6);
// v16 = .undefined
}
%NeverOptimizeFunction(main);
main();
