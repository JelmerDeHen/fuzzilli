function main() {
let v3 = 0;
let v6 = 0;
function v7(v8,v9) {
    const v12 = new Uint8ClampedArray(56474);
    // v12 = .object(ofGroup: Uint8ClampedArray, withProperties: ["__proto__", "buffer", "length", "constructor", "byteOffset", "byteLength"], withMethods: ["copyWithin", "keys", "entries", "indexOf", "find", "subarray", "values", "sort", "some", "reduce", "filter", "slice", "every", "join", "fill", "map", "set", "reduceRight", "reverse", "forEach", "lastIndexOf", "findIndex", "includes"])
    const v14 = {get:v7,valueOf:v9};
    // v14 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"], withMethods: ["get"])
    const v16 = Reflect.defineProperty(v12,2990149688,v14);
    // v16 = .boolean
}
const v18 = [1337];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v19 = v18;
const v20 = v7(v19);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
