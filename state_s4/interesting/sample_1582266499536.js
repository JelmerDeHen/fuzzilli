function main() {
let v1 = 0;
const v4 = new Int16Array(19873);
// v4 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reverse", "indexOf", "map", "reduceRight", "find", "reduce", "lastIndexOf", "keys", "entries", "values", "copyWithin", "every", "subarray", "fill", "some", "findIndex", "filter", "set", "slice", "join", "forEach", "includes", "sort"])
try {
    const v7 = {get:undefined};
    // v7 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
    const v9 = Object.defineProperty(v4,7,v7);
    // v9 = .undefined
} catch(v10) {
}
}
%NeverOptimizeFunction(main);
main();
