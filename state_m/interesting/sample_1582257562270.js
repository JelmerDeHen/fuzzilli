function main() {
function v2(v3,v4) {
    const v8 = new Int16Array(19873);
    // v8 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
    const v12 = [1337,1337];
    // v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v13 = {b:13.37,d:1607264097,e:1607264097,__proto__:v12,valueOf:WeakSet};
    // v13 = .object(ofGroup: Object, withProperties: ["e", "d", "__proto__", "valueOf", "b"])
    for (const v14 of v8) {
        const v15 = v13.b;
        // v15 = .unknown
    }
}
const v16 = [v2];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v17 = v16;
const v18 = v2(v17);
// v18 = .unknown
const v19 = v2(v18,-0.0);
// v19 = .unknown
const v20 = v2(-2147483647);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
