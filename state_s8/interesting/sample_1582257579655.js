function main() {
function v2(v3,v4) {
    const v8 = new Int16Array(19873);
    // v8 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
    const v12 = [1337,1337];
    // v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v13 = {b:13.37,d:1607264097,e:1607264097,__proto__:v12,valueOf:WeakSet};
    // v13 = .object(ofGroup: Object, withProperties: ["valueOf", "b", "d", "__proto__", "e"])
    for (const v14 of v8) {
        const v15 = v13.b;
        // v15 = .unknown
    }
}
const v16 = [v2];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
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
