function main() {
const v3 = new Uint16Array(1337);
// v3 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "buffer", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["keys", "some", "sort", "includes", "join", "values", "reduceRight", "fill", "indexOf", "subarray", "reduce", "lastIndexOf", "findIndex", "find", "every", "copyWithin", "entries", "slice", "filter", "set", "forEach", "map", "reverse"])
const v5 = [1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = {valueOf:v5};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
const v8 = {e:v6,d:"d"};
// v8 = .object(ofGroup: Object, withProperties: ["e", "d", "__proto__"])
function v9(v10,v11) {
    let v15 = -128;
    while (v15 < 5) {
        const v16 = v8 < 0;
        // v16 = .boolean
        const v17 = {constructor:5,...1337,...Uint16Array};
        // v17 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__"])
        const v18 = v15 + 1;
        // v18 = .primitive
        const v19 = v16 & v15;
        // v19 = .integer
        v15 = v18;
        v3[64] = v19;
    }
}
const v21 = [9007199254740993];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v22 = v21;
const v23 = v9(v22);
// v23 = .unknown
const v24 = v9();
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
