function main() {
try {
    const v3 = new Uint8Array(39754);
    // v3 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "constructor", "length", "buffer", "byteOffset", "byteLength"], withMethods: ["map", "includes", "every", "reduceRight", "find", "filter", "lastIndexOf", "indexOf", "subarray", "join", "fill", "sort", "slice", "findIndex", "reverse", "forEach", "reduce", "values", "copyWithin", "entries", "keys", "set", "some"])
    const v5 = {set:Array};
    // v5 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
    const v7 = Object.defineProperty(v3,512,v5);
    // v7 = .undefined
} catch(v8) {
}
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
}
%NeverOptimizeFunction(main);
main();
