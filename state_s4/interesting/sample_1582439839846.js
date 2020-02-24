function main() {
const v2 = new Uint8Array(1337);
// v2 = .object(ofGroup: Uint8Array, withProperties: ["byteLength", "__proto__", "constructor", "buffer", "length", "byteOffset"], withMethods: ["indexOf", "every", "some", "includes", "reduce", "sort", "find", "keys", "subarray", "slice", "reduceRight", "fill", "copyWithin", "findIndex", "join", "forEach", "filter", "entries", "map", "set", "lastIndexOf", "values", "reverse"])
const v4 = [1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = {valueOf:v4};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
const v7 = {e:v5,d:"d"};
// v7 = .object(ofGroup: Object, withProperties: ["d", "e", "__proto__"])
function v8(v9,v10) {
    let v14 = -128;
    while (v14 < 5) {
        const v15 = v7 <= 0;
        // v15 = .boolean
        const v16 = v14 + 1;
        // v16 = .primitive
        const v17 = v15 & v14;
        // v17 = .integer
        v14 = v16;
        v2[64] = v17;
    }
}
const v19 = [9007199254740993];
// v19 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v20 = v19;
const v21 = v8(v20);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
