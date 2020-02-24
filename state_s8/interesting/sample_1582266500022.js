function main() {
let v1 = 0;
const v4 = new Int16Array(19873);
// v4 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
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
