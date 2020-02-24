function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v2 = v1;
let v4 = undefined;
let v7 = 0;
try {
    const v10 = new Uint32Array(907);
    // v10 = .object(ofGroup: Uint32Array, withProperties: ["byteOffset", "byteLength", "buffer", "constructor", "__proto__", "length"], withMethods: ["lastIndexOf", "slice", "keys", "map", "sort", "indexOf", "set", "join", "forEach", "reverse", "filter", "fill", "reduce", "every", "values", "copyWithin", "entries", "some", "subarray", "find", "findIndex", "includes", "reduceRight"])
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
