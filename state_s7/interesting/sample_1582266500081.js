function main() {
let v1 = 0;
const v4 = new Int16Array(19873);
// v4 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
try {
    const v7 = {get:undefined};
    // v7 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
    const v9 = Object.defineProperty(v4,7,v7);
    // v9 = .undefined
} catch(v10) {
}
}
%NeverOptimizeFunction(main);
main();
