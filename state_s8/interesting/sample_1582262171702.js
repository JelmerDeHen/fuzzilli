function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v2 = v1;
let v4 = undefined;
let v7 = 0;
try {
    const v10 = new Uint32Array(907);
    // v10 = .object(ofGroup: Uint32Array, withProperties: ["length", "buffer", "byteOffset", "byteLength", "__proto__", "constructor"], withMethods: ["findIndex", "keys", "join", "sort", "slice", "indexOf", "reverse", "fill", "forEach", "map", "every", "includes", "lastIndexOf", "copyWithin", "entries", "some", "reduce", "values", "set", "find", "subarray", "filter", "reduceRight"])
    const v12 = {get:undefined};
    // v12 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
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
