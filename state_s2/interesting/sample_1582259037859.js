function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [13.37,"symbol"];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {toString:"symbol",d:v7,c:WeakSet,b:v7};
// v8 = .object(ofGroup: Object, withProperties: ["d", "c", "b", "__proto__", "toString"])
const v9 = {valueOf:WeakSet,e:WeakSet,d:WeakSet,__proto__:1337};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "e", "d"])
let v10 = "symbol";
const v16 = [1337,1337,1337,1337,1337];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v17 = {get:2147483647,call:Uint8Array,isExtensible:13.37,setPrototypeOf:v4,preventExtensions:-2235553098,has:v6,apply:WeakSet};
// v17 = .object(ofGroup: Object, withProperties: ["isExtensible", "apply", "get", "call", "preventExtensions", "has", "__proto__", "setPrototypeOf"])
const v19 = new Proxy(v6,v17);
// v19 = .unknown
"undefined".__proto__ = v7;
for (let v23 = 0; v23 < 7; v23++) {
}
const v24 = ["undefined",13.37,13.37];
// v24 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v25 = {b:2147483647};
// v25 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
let v30 = 0;
const v31 = v30 + 1;
// v31 = .primitive
let v38 = 0;
let v41 = 0;
let v44 = 0;
function v46(v47,v48) {
    const v50 = [1337];
    // v50 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v53 = 0;
    while (v53 < 10) {
        v50.length = 2147483648;
        const v55 = v53 + 1;
        // v55 = .primitive
        v53 = v55;
    }
}
for (let v60 = 0; v60 < 100; v60++) {
    const v61 = v46("boolean",1337);
    // v61 = .unknown
}
let v63 = 0;
v30 = v31;
const v65 = v25 == 6;
// v65 = .boolean
for (const v68 of v6) {
    for (let v72 = 0; v72 < 4; v72++) {
        v68.__proto__ = v9;
    }
}
const v74 = new Uint8Array(v16);
// v74 = .object(ofGroup: Uint8Array, withProperties: ["buffer", "byteLength", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["copyWithin", "keys", "forEach", "findIndex", "map", "sort", "entries", "subarray", "includes", "set", "reverse", "reduceRight", "join", "values", "fill", "indexOf", "every", "slice", "find", "filter", "some", "reduce", "lastIndexOf"])
v24.length = 1;
}
%NeverOptimizeFunction(main);
main();
