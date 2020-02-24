function main() {
function v2(v3,v4) {
    const v8 = new Int16Array(19873);
    // v8 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
    const v12 = [1337,1337];
    // v12 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v13 = {b:13.37,d:1607264097,e:1607264097,__proto__:v12,valueOf:WeakSet};
    // v13 = .object(ofGroup: Object, withProperties: ["b", "e", "d", "__proto__", "valueOf"])
    for (const v14 of v8) {
        const v15 = v13.b;
        // v15 = .unknown
    }
}
const v16 = [v2];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
