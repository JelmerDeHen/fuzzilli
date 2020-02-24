function main() {
function v0(v1,v2) {
    const v5 = new Uint8ClampedArray(56474);
    // v5 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteOffset", "__proto__", "buffer", "length", "byteLength", "constructor"], withMethods: ["every", "reduce", "indexOf", "reverse", "map", "join", "entries", "reduceRight", "subarray", "includes", "sort", "some", "values", "copyWithin", "filter", "lastIndexOf", "set", "fill", "find", "findIndex", "keys", "forEach", "slice"])
    const v7 = {get:v0,valueOf:v2};
    // v7 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"], withMethods: ["get"])
    const v9 = Reflect.defineProperty(v5,4096,v7);
    // v9 = .boolean
}
const v11 = [1337];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v12 = v11;
const v13 = v0(v12);
// v13 = .unknown
}
%NeverOptimizeFunction(main);
main();
