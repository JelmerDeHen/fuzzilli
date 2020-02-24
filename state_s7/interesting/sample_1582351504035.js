function main() {
const v1 = [-1000.0,-1000.0,-1000.0,-1000.0];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v2(v3,v4) {
    const v8 = new Float64Array(1337);
    // v8 = .object(ofGroup: Float64Array, withProperties: ["byteOffset", "length", "buffer", "byteLength", "constructor", "__proto__"], withMethods: ["lastIndexOf", "forEach", "find", "indexOf", "copyWithin", "filter", "every", "some", "reduceRight", "join", "values", "reduce", "includes", "reverse", "entries", "slice", "map", "sort", "set", "keys", "subarray", "findIndex", "fill"])
    v8.constructor = Uint8ClampedArray;
    const v11 = v8.slice(-1,1337);
    // v11 = .object(ofGroup: Float64Array, withProperties: ["buffer", "byteOffset", "length", "constructor", "byteLength", "__proto__"], withMethods: ["filter", "values", "reduceRight", "includes", "forEach", "fill", "indexOf", "find", "findIndex", "subarray", "reduce", "copyWithin", "sort", "map", "slice", "set", "keys", "entries", "every", "reverse", "some", "lastIndexOf", "join"])
}
const v12 = v1.sort(v2);
// v12 = .undefined
}
%NeverOptimizeFunction(main);
main();
