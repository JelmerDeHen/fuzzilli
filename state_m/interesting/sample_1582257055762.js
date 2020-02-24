function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = [v4,v6];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = {d:13.37,a:-65537,b:-65537,constructor:13.37,__proto__:v4,valueOf:v4,e:v7};
// v8 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "e", "valueOf", "d", "a", "constructor"])
const v9 = {constructor:"species"};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__"])
let v10 = -65537;
const v16 = {b:2147483647};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v17 = {__proto__:Uint8Array,a:v16,constructor:1337,d:"undefined",valueOf:1337,b:13.37};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "valueOf", "constructor", "a", "b"])
function v18(v19,v20) {
    for (const v22 in "boolean") {
        let v25 = 0;
        do {
            const v26 = v25 + 1;
            // v26 = .primitive
            v25 = v26;
        } while (v25 < 8);
    }
    const v30 = 1337 | Uint16Array;
    // v30 = .integer
    const v33 = new Int16Array(19873);
    // v33 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
    const v37 = new Int16Array(19873);
    // v37 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
    const v41 = [1337,1337];
    // v41 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v42 = {b:13.37,d:1607264097,e:1607264097,constructor:v41,valueOf:WeakSet};
    // v42 = .object(ofGroup: Object, withProperties: ["b", "constructor", "__proto__", "valueOf", "d", "e"])
    const v46 = [1337,1337];
    // v46 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v47 = {b:13.37,d:1607264097,e:1607264097,constructor:v46,valueOf:WeakSet};
    // v47 = .object(ofGroup: Object, withProperties: ["e", "d", "valueOf", "b", "__proto__", "constructor"])
    for (const v48 of v33) {
    }
    return 13.37;
}
const v50 = [1337];
// v50 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v51 = v50;
const v52 = v18(v51);
// v52 = .unknown
const v53 = v18(v16,v17);
// v53 = .unknown
v8.length = 257;
const v55 = {deleteProperty:v53,set:v52,defineProperty:v18,isExtensible:v18,call:v18,get:v18,apply:v53,construct:v52};
// v55 = .object(ofGroup: Object, withProperties: ["set", "apply", "__proto__", "construct", "deleteProperty"], withMethods: ["call", "get", "isExtensible", "defineProperty"])
const v57 = new Proxy(v7,v55);
// v57 = .unknown
v51.toString = v52;
const v58 = v18(v55,v53);
// v58 = .unknown
}
%NeverOptimizeFunction(main);
main();
