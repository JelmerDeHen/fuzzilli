function main() {
function v1(v2,v3) {
    const v7 = new Int16Array(19873);
    // v7 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
    const v11 = [1337,1337];
    // v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v12 = {b:13.37,d:1607264097,e:1607264097,__proto__:v11,valueOf:WeakSet};
    // v12 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "e", "valueOf", "d"])
    for (const v13 in v12) {
        for (const v14 of v7) {
            const v15 = v12.b;
            // v15 = .unknown
        }
    }
    return v2;
}
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v18 = v17;
const v19 = v1(v18);
// v19 = .unknown
const v20 = v1(v19,-0.0);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
