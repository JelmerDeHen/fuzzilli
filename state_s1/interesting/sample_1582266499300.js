function main() {
let v1 = 0;
const v4 = new Int16Array(19873);
// v4 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
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
