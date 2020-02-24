function main() {
const v0 = [];
// v0 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v3 = 0;
do {
    function v4(v5,v6) {
        const v8 = {construct:v5,deleteProperty:v5,apply:v6,defineProperty:v5};
        // v8 = .object(ofGroup: Object, withProperties: ["construct", "defineProperty", "deleteProperty", "__proto__", "apply"])
        const v10 = new Proxy(v0,v8);
        // v10 = .unknown
        const v11 = v10 != v4;
        // v11 = .boolean
        const v13 = new Int16Array(19873);
        // v13 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
        for (const v14 of v13) {
        }
    }
    const v16 = [1337];
    // v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
