function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v2 = v1;
let v4 = undefined;
let v7 = 0;
try {
    const v10 = new Uint32Array(907);
    // v10 = .object(ofGroup: Uint32Array, withProperties: ["byteLength", "length", "__proto__", "constructor", "buffer", "byteOffset"], withMethods: ["fill", "sort", "entries", "some", "map", "findIndex", "subarray", "values", "forEach", "filter", "indexOf", "find", "reduce", "keys", "reduceRight", "includes", "copyWithin", "set", "lastIndexOf", "slice", "every", "join", "reverse"])
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
