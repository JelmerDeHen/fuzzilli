function main() {
let v1 = 0;
const v3 = [13.37,v1,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v4(v5,v6) {
    const v10 = new Int8Array(1337);
    // v10 = .object(ofGroup: Int8Array, withProperties: ["constructor", "buffer", "__proto__", "length", "byteOffset", "byteLength"], withMethods: ["indexOf", "includes", "fill", "entries", "forEach", "reduceRight", "set", "values", "find", "slice", "map", "some", "copyWithin", "findIndex", "reverse", "keys", "filter", "subarray", "reduce", "join", "sort", "lastIndexOf", "every"])
    v10.constructor = Uint8ClampedArray;
    const v12 = v10.slice(v5,1337);
    // v12 = .object(ofGroup: Int8Array, withProperties: ["buffer", "__proto__", "length", "constructor", "byteOffset", "byteLength"], withMethods: ["every", "subarray", "set", "keys", "includes", "join", "lastIndexOf", "fill", "map", "find", "findIndex", "forEach", "reduceRight", "values", "entries", "slice", "copyWithin", "some", "indexOf", "reduce", "reverse", "sort", "filter"])
}
const v13 = v3.sort(v4);
// v13 = .undefined
}
%NeverOptimizeFunction(main);
main();
