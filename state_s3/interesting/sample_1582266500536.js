function main() {
let v1 = 0;
const v4 = new Int16Array(19873);
// v4 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
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
