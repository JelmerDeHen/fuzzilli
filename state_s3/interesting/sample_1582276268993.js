function main() {
const v0 = [];
// v0 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v3 = 0;
do {
    function v4(v5,v6) {
        const v8 = {construct:v5,deleteProperty:v5,apply:v6,defineProperty:v5};
        // v8 = .object(ofGroup: Object, withProperties: ["defineProperty", "deleteProperty", "__proto__", "construct", "apply"])
        const v10 = new Proxy(v0,v8);
        // v10 = .unknown
        const v11 = v10 != v4;
        // v11 = .boolean
        const v13 = new Int16Array(19873);
        // v13 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
        for (const v14 of v13) {
        }
    }
    const v16 = [1337];
    // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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
