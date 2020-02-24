function main() {
function v0(v1,v2) {
    const v5 = new Uint8ClampedArray(56474);
    // v5 = .object(ofGroup: Uint8ClampedArray, withProperties: ["__proto__", "byteLength", "constructor", "byteOffset", "length", "buffer"], withMethods: ["filter", "forEach", "lastIndexOf", "find", "subarray", "reduce", "indexOf", "join", "entries", "copyWithin", "sort", "slice", "some", "fill", "reverse", "includes", "reduceRight", "values", "keys", "map", "every", "findIndex", "set"])
    const v7 = {get:v0,valueOf:v2};
    // v7 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"], withMethods: ["get"])
    const v9 = Reflect.defineProperty(v5,-2147483648,v7);
    // v9 = .boolean
}
const v11 = [1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v12 = v11;
const v13 = v0(v12);
// v13 = .unknown
}
%NeverOptimizeFunction(main);
main();
