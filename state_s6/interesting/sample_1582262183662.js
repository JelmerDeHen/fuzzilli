function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v2 = v1;
let v4 = undefined;
let v7 = 0;
try {
    const v10 = new Uint32Array(907);
    // v10 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "byteOffset", "__proto__", "constructor", "byteLength", "length"], withMethods: ["entries", "keys", "map", "every", "set", "reduce", "includes", "reduceRight", "lastIndexOf", "some", "findIndex", "find", "subarray", "filter", "join", "values", "reverse", "copyWithin", "indexOf", "forEach", "sort", "fill", "slice"])
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
