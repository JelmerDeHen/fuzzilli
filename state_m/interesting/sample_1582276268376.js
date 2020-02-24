function main() {
const v0 = [];
// v0 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v3 = 0;
do {
    function v4(v5,v6) {
        const v8 = {construct:v5,deleteProperty:v5,apply:v6,defineProperty:v5};
        // v8 = .object(ofGroup: Object, withProperties: ["apply", "construct", "__proto__", "deleteProperty", "defineProperty"])
        const v10 = new Proxy(v0,v8);
        // v10 = .unknown
        const v11 = v10 != v4;
        // v11 = .boolean
        const v13 = new Int16Array(19873);
        // v13 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
        for (const v14 of v13) {
        }
    }
    const v16 = [1337];
    // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    let v17 = v16;
    const v18 = v4(v17);
    // v18 = .unknown
    const v19 = v3 + 1;
    // v19 = .primitive
    v3 = v19;
} while (v3 <= 3);
}
%NeverOptimizeFunction(main);
main();
