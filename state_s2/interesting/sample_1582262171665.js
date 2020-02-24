function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v2 = v1;
let v4 = undefined;
let v7 = 0;
try {
    const v10 = new Uint32Array(907);
    // v10 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "buffer", "constructor", "byteOffset", "length", "byteLength"], withMethods: ["reduceRight", "slice", "filter", "fill", "keys", "reverse", "indexOf", "reduce", "lastIndexOf", "includes", "find", "copyWithin", "map", "forEach", "some", "join", "subarray", "values", "every", "entries", "set", "findIndex", "sort"])
    const v12 = {get:undefined};
    // v12 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
    const v14 = Object.defineProperty(v10,10000,v12);
    // v14 = .undefined
} catch(v15) {
}
const v19 = v7 + 1;
// v19 = .primitive
v7 = v19;
}
%NeverOptimizeFunction(main);
main();
