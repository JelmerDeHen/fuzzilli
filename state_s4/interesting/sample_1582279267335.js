function main() {
let v3 = 0;
let v6 = 0;
function v7(v8,v9) {
    const v12 = new Uint8ClampedArray(56474);
    // v12 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "constructor", "byteLength", "length", "__proto__", "byteOffset"], withMethods: ["forEach", "map", "lastIndexOf", "every", "slice", "values", "subarray", "join", "fill", "filter", "copyWithin", "sort", "some", "reduceRight", "entries", "set", "findIndex", "reverse", "reduce", "find", "includes", "indexOf", "keys"])
    const v14 = {get:v7,valueOf:v9};
    // v14 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"], withMethods: ["get"])
    const v16 = Reflect.defineProperty(v12,2990149688,v14);
    // v16 = .boolean
}
const v18 = [1337];
// v18 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v19 = v18;
const v20 = v7(v19);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
