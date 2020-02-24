function main() {
const v3 = {toString:Set,c:1337};
// v3 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "c"])
const v5 = [13.37,v3];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = [v5];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {b:v7,a:-3005878662,__proto__:1337};
// v8 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "a"])
let v11 = 0;
do {
    function v12(v13,v14) {
        const v16 = Math.sinh(v8);
        // v16 = .number
        const v19 = new Uint8Array(19873);
        // v19 = .object(ofGroup: Uint8Array, withProperties: ["byteOffset", "length", "constructor", "byteLength", "buffer", "__proto__"], withMethods: ["findIndex", "set", "reduce", "reduceRight", "indexOf", "keys", "subarray", "values", "sort", "lastIndexOf", "forEach", "map", "copyWithin", "entries", "find", "reverse", "includes", "some", "join", "fill", "slice", "filter", "every"])
        for (const v20 of v19) {
        }
        return v16;
    }
    const v22 = [1337];
    // v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v23 = v22;
    const v24 = v12(v23);
    // v24 = .unknown
    const v25 = v11 + 1;
    // v25 = .primitive
    v11 = v25;
} while (v11 < 8);
}
%NeverOptimizeFunction(main);
main();
