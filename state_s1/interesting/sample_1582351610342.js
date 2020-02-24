function main() {
const v1 = [-1000.0,-1000.0,-1000.0,-1000.0];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v2(v3,v4) {
    const v8 = new Float64Array(1337);
    // v8 = .object(ofGroup: Float64Array, withProperties: ["constructor", "buffer", "__proto__", "byteOffset", "length", "byteLength"], withMethods: ["findIndex", "slice", "map", "find", "includes", "entries", "forEach", "some", "indexOf", "subarray", "reduce", "reduceRight", "fill", "join", "sort", "values", "keys", "copyWithin", "reverse", "filter", "set", "lastIndexOf", "every"])
    v8.constructor = Uint8ClampedArray;
    const v11 = v8.slice(-1,1337);
    // v11 = .object(ofGroup: Float64Array, withProperties: ["__proto__", "buffer", "byteOffset", "byteLength", "constructor", "length"], withMethods: ["findIndex", "forEach", "keys", "values", "join", "filter", "set", "sort", "reduceRight", "fill", "subarray", "find", "entries", "map", "includes", "slice", "some", "reduce", "copyWithin", "every", "reverse", "lastIndexOf", "indexOf"])
}
const v12 = v1.sort(v2);
// v12 = .undefined
}
%NeverOptimizeFunction(main);
main();
