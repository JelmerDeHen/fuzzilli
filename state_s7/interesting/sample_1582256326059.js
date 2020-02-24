function main() {
function v1(v2,v3) {
    const v7 = new Int16Array(19873);
    // v7 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
    const v11 = [1337,1337];
    // v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v12 = {b:13.37,d:1607264097,e:1607264097,__proto__:v11,valueOf:WeakSet};
    // v12 = .object(ofGroup: Object, withProperties: ["d", "valueOf", "e", "b", "__proto__"])
    for (const v13 in v12) {
        for (const v14 of v7) {
            const v15 = v12.b;
            // v15 = .unknown
        }
    }
    return v2;
}
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v18 = v17;
const v19 = v1(v18);
// v19 = .unknown
const v20 = v1(v19,-0.0);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
