function main() {
const v1 = [-1000.0,-1000.0,-1000.0,-1000.0];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v2(v3,v4) {
    const v8 = new Float64Array(1337);
    // v8 = .object(ofGroup: Float64Array, withProperties: ["byteLength", "length", "__proto__", "constructor", "buffer", "byteOffset"], withMethods: ["reduceRight", "findIndex", "reverse", "fill", "forEach", "every", "copyWithin", "includes", "set", "some", "find", "slice", "subarray", "reduce", "values", "keys", "sort", "lastIndexOf", "entries", "indexOf", "filter", "join", "map"])
    v8.constructor = Uint8ClampedArray;
    const v11 = v8.slice(-1,1337);
    // v11 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteLength", "length", "buffer", "byteOffset", "__proto__"], withMethods: ["keys", "reduceRight", "sort", "lastIndexOf", "forEach", "some", "map", "set", "reverse", "fill", "slice", "join", "values", "copyWithin", "findIndex", "filter", "find", "includes", "indexOf", "every", "subarray", "entries", "reduce"])
}
const v12 = v1.sort(v2);
// v12 = .undefined
}
%NeverOptimizeFunction(main);
main();
