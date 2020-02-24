function main() {
function v1(v2,v3) {
    const v7 = new Int16Array(19873);
    // v7 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
    const v11 = [1337,1337];
    // v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v12 = {b:13.37,d:1607264097,e:1607264097,constructor:v11,valueOf:WeakSet};
    // v12 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "b", "constructor", "valueOf", "d"])
    const v17 = [1337,1337];
    // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    for (const v18 in v12) {
        for (const v19 of v7) {
        }
    }
    const v20 = {b:13.37,d:1607264097,b:1607264097,constructor:v17,valueOf:WeakSet};
    // v20 = .object(ofGroup: Object, withProperties: ["b", "d", "constructor", "__proto__", "valueOf"])
    const v22 = gc();
    // v22 = .undefined
}
const v23 = [3815473127];
// v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v24 = v23;
const v25 = v1(v24);
// v25 = .unknown
const v26 = v1(3815473127);
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();
