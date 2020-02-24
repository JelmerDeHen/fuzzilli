function main() {
const v2 = new Uint16Array(1337);
// v2 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["every", "findIndex", "reduceRight", "some", "values", "find", "fill", "forEach", "map", "filter", "reduce", "join", "subarray", "includes", "lastIndexOf", "indexOf", "keys", "copyWithin", "sort", "set", "entries", "reverse", "slice"])
const v4 = [1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = {valueOf:v4};
// v5 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
const v7 = {e:v5,d:"d"};
// v7 = .object(ofGroup: Object, withProperties: ["e", "d", "__proto__"])
function v8(v9,v10) {
    let v14 = -128;
    while (v14 < 5) {
        const v15 = v7 < 0;
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
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v20 = v19;
const v21 = v8(v20);
// v21 = .unknown
const v22 = v8();
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();
