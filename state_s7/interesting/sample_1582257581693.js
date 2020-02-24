function main() {
function v2(v3,v4) {
    const v8 = new Int16Array(19873);
    // v8 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
    const v12 = [1337,1337];
    // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v13 = {b:13.37,d:1607264097,e:1607264097,__proto__:v12,valueOf:WeakSet};
    // v13 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "b", "valueOf", "d"])
    for (const v14 of v8) {
        const v15 = v13.b;
        // v15 = .unknown
    }
}
const v16 = [v2];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
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
