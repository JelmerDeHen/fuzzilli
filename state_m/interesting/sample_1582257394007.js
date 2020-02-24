function main() {
const v5 = {b:2147483647};
// v5 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
const v6 = {__proto__:Uint8Array,a:v5,constructor:1337,d:"undefined",valueOf:1337,b:13.37};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "a", "b", "d", "constructor"])
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
    // v18 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
    const v22 = {b:13.37,d:1607264097,e:1607264097,constructor:13.37,valueOf:WeakSet};
    // v22 = .object(ofGroup: Object, withProperties: ["d", "constructor", "b", "__proto__", "e", "valueOf"])
    for (const v23 of v18) {
    }
}
const v25 = [1337];
// v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
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
