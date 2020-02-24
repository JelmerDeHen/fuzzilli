function main() {
const v2 = [1337,-4096,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = new Uint32Array(1337);
// v5 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "length", "byteLength", "constructor", "byteOffset", "__proto__"], withMethods: ["some", "copyWithin", "reduce", "lastIndexOf", "forEach", "indexOf", "findIndex", "fill", "slice", "every", "set", "join", "values", "filter", "reverse", "subarray", "sort", "reduceRight", "includes", "keys", "map", "find", "entries"])
const v7 = [1337,1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
