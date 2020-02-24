function main() {
const v2 = [1337,-4096,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = new Uint32Array(1337);
// v5 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "length", "__proto__", "byteLength", "byteOffset", "constructor"], withMethods: ["includes", "forEach", "every", "some", "subarray", "lastIndexOf", "values", "copyWithin", "findIndex", "reverse", "sort", "keys", "filter", "join", "indexOf", "reduce", "reduceRight", "set", "slice", "find", "fill", "map", "entries"])
const v7 = [1337,1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = {valueOf:v7};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
const v10 = {e:v8,d:"uiE9i+FtGy"};
// v10 = .object(ofGroup: Object, withProperties: ["d", "e", "__proto__"])
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
