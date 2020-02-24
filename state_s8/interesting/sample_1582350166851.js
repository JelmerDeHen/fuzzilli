function main() {
let v1 = 0;
const v3 = [13.37,v1,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v4(v5,v6) {
    const v10 = new Int8Array(1337);
    // v10 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["values", "every", "reverse", "reduce", "lastIndexOf", "slice", "sort", "fill", "indexOf", "copyWithin", "set", "some", "subarray", "filter", "reduceRight", "forEach", "find", "join", "includes", "findIndex", "keys", "entries", "map"])
    v10.constructor = Uint8ClampedArray;
    const v12 = v10.slice(v5,1337);
    // v12 = .object(ofGroup: Int8Array, withProperties: ["byteLength", "__proto__", "buffer", "constructor", "length", "byteOffset"], withMethods: ["every", "slice", "reverse", "values", "filter", "findIndex", "reduceRight", "includes", "subarray", "fill", "reduce", "find", "sort", "map", "entries", "keys", "set", "indexOf", "copyWithin", "some", "forEach", "join", "lastIndexOf"])
}
const v13 = v3.sort(v4);
// v13 = .undefined
}
%NeverOptimizeFunction(main);
main();
