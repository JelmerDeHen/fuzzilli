function main() {
const v2 = [1337,-4096,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = new Uint32Array(1337);
// v5 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "buffer", "constructor", "byteOffset", "length", "byteLength"], withMethods: ["reduceRight", "slice", "filter", "fill", "keys", "reverse", "indexOf", "reduce", "lastIndexOf", "includes", "find", "copyWithin", "map", "forEach", "some", "join", "subarray", "values", "every", "entries", "set", "findIndex", "sort"])
const v7 = [1337,1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {valueOf:v7};
// v8 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
const v10 = {e:v8,d:"uiE9i+FtGy"};
// v10 = .object(ofGroup: Object, withProperties: ["e", "d", "__proto__"])
function v11(v12,v13) {
    let v17 = -128;
    while (v17 < 5) {
        const v18 = v10 <= 0;
        // v18 = .boolean
        const v19 = v17 + 1;
        // v19 = .primitive
        const v20 = v18 & v17;
        // v20 = .integer
        v17 = v19;
        v5[64] = v20;
    }
}
const v21 = v2.findIndex(v11,v7);
// v21 = .integer
}
%NeverOptimizeFunction(main);
main();
