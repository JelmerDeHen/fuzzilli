function main() {
const v5 = {b:2147483647};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v6 = {__proto__:Uint8Array,a:v5,constructor:1337,d:"undefined",valueOf:1337,b:13.37};
// v6 = .object(ofGroup: Object, withProperties: ["valueOf", "a", "constructor", "__proto__", "b", "d"])
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
    // v18 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
    const v22 = {b:13.37,d:1607264097,e:1607264097,constructor:13.37,valueOf:WeakSet};
    // v22 = .object(ofGroup: Object, withProperties: ["e", "b", "d", "__proto__", "constructor", "valueOf"])
    for (const v23 of v18) {
    }
}
const v25 = [1337];
// v25 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
