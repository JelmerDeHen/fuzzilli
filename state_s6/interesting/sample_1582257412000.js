function main() {
const v5 = {b:2147483647};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v6 = {__proto__:Uint8Array,a:v5,constructor:1337,d:"undefined",valueOf:1337,b:13.37};
// v6 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "b", "a", "constructor", "d"])
function v7(v8,v9) {
    for (const v11 in "boolean") {
        let v14 = 0;
        do {
            const v15 = v14 + 1;
            // v15 = .primitive
            v14 = v15;
        } while (v14 < 8);
    }
    const v18 = new Int16Array(19873);
    // v18 = .object(ofGroup: Int16Array, withProperties: ["constructor", "byteOffset", "byteLength", "__proto__", "buffer", "length"], withMethods: ["sort", "entries", "findIndex", "slice", "subarray", "map", "find", "every", "some", "join", "copyWithin", "includes", "filter", "lastIndexOf", "values", "reduce", "set", "indexOf", "reduceRight", "forEach", "fill", "reverse", "keys"])
    const v22 = {b:13.37,d:1607264097,e:1607264097,constructor:13.37,valueOf:WeakSet};
    // v22 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "__proto__", "constructor", "e", "d"])
    for (const v23 of v18) {
    }
}
const v25 = [1337];
// v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v26 = v25;
const v27 = v7(v26);
// v27 = .unknown
const v28 = v7(v5,v6);
// v28 = .unknown
let v32 = 0;
let v35 = 0;
}
%NeverOptimizeFunction(main);
main();
