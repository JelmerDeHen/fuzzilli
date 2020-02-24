function main() {
const v5 = {b:2147483647};
// v5 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
const v6 = {__proto__:Uint8Array,a:v5,constructor:1337,d:"undefined",valueOf:1337,b:13.37};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "d", "b", "a", "valueOf"])
function v7(v8,v9) {
    for (const v11 in "boolean") {
        let v14 = 0;
        do {
            const v15 = v14 + 1;
            // v15 = .primitive
            v14 = v15;
        } while (v14 < 8);
    }
    const v19 = 1337 | Uint16Array;
    // v19 = .integer
    const v22 = new Int16Array(19873);
    // v22 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
    const v26 = new Int16Array(19873);
    // v26 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
    const v30 = [1337,1337];
    // v30 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v31 = {b:13.37,d:1607264097,e:1607264097,constructor:v30,valueOf:WeakSet};
    // v31 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "d", "e", "constructor", "__proto__"])
    const v35 = [1337,1337];
    // v35 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v36 = {b:13.37,d:1607264097,e:1607264097,constructor:v35,valueOf:WeakSet};
    // v36 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "valueOf", "constructor", "e", "d"])
    for (const v37 of v22) {
    }
}
const v39 = [1337];
// v39 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v40 = v39;
const v41 = v7(v40);
// v41 = .unknown
const v42 = v7(v5,v6);
// v42 = .unknown
}
%NeverOptimizeFunction(main);
main();
