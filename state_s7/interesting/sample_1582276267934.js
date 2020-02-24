function main() {
const v0 = [];
// v0 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v3 = 0;
do {
    function v4(v5,v6) {
        const v8 = {construct:v5,deleteProperty:v5,apply:v6,defineProperty:v5};
        // v8 = .object(ofGroup: Object, withProperties: ["construct", "deleteProperty", "defineProperty", "apply", "__proto__"])
        const v10 = new Proxy(v0,v8);
        // v10 = .unknown
        const v11 = v10 != v4;
        // v11 = .boolean
        const v13 = new Int16Array(19873);
        // v13 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
        for (const v14 of v13) {
        }
    }
    const v16 = [1337];
    // v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
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
