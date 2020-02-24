function main() {
function v2(v3,v4) {
    const v8 = new Int16Array(19873);
    // v8 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reverse", "indexOf", "map", "reduceRight", "find", "reduce", "lastIndexOf", "keys", "entries", "values", "copyWithin", "every", "subarray", "fill", "some", "findIndex", "filter", "set", "slice", "join", "forEach", "includes", "sort"])
    const v12 = [1337,1337];
    // v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v13 = {b:13.37,d:1607264097,e:1607264097,__proto__:v12,valueOf:WeakSet};
    // v13 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "valueOf", "b", "e"])
    for (const v14 of v8) {
        const v15 = v13.b;
        // v15 = .unknown
    }
}
const v16 = [v2];
// v16 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
