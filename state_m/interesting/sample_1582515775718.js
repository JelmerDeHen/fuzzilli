function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
let v6 = 127;
const v9 = String.fromCharCode(v6,3085701344);
// v9 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
let v11 = "p8Xp0R1moN";
v11 = v9;
const v12 = JSON.stringify(v11);
// v12 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
const v17 = [-536870912,-536870912,-536870912,-536870912,-536870912];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v18(v19,v20,v21,v22) {
    'use strict'
    let v25 = 0;
    while (v25 < 1337) {
        const v26 = v25 + 1;
        // v26 = .primitive
        v25 = v26;
        let v29 = 0;
        do {
            v29 = v12;
            const v30 = v29 + 1;
            // v30 = .primitive
            v29 = v30;
        } while (v29 < 7);
    }
}
const v31 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
// v31 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "setPrototypeOf", "ownKeys", "has", "getPrototypeOf", "call", "isExtensible", "deleteProperty", "construct", "set", "preventExtensions"])
const v33 = new Proxy(v17,v31);
// v33 = .unknown
v33.b = v31;
const v34 = v18("MIN_VALUE",arguments,v17,Int16Array);
// v34 = .unknown
}
%NeverOptimizeFunction(main);
main();
