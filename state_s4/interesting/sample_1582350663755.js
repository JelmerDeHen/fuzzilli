function main() {
let v2 = RegExp;
let v3 = v2;
const v8 = [1337,1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v9(v10,v11,v12,v13) {
    'use strict'
    let v16 = 0;
    function v17(v18,v19) {
        for (let v23 = 0; v23 < 100; v23++) {
            function v24(v25,v26) {
            }
        }
        const v27 = [13.37];
        // v27 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        let v30 = 0;
        let v32 = 13.37;
        const v34 = Number.isSafeInteger(v32);
        // v34 = .boolean
        const v37 = eval(1337);
        // v37 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
        const v38 = v30 + 1;
        // v38 = .primitive
        v30 = v38;
        if (v19) {
        } else {
            const v39 = v17(v16,v27);
            // v39 = .unknown
        }
    }
    const v41 = [1337];
    // v41 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    let v42 = v41;
    const v43 = v17(v42);
    // v43 = .unknown
}
const v47 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:1337,has:v9};
// v47 = .object(ofGroup: Object, withProperties: ["__proto__", "setPrototypeOf"], withMethods: ["call", "preventExtensions", "construct", "ownKeys", "set", "isExtensible", "getPrototypeOf", "has", "deleteProperty", "get"])
const v49 = new Proxy(v8,v47);
// v49 = .unknown
v49[1] = "MIN_VALUE";
const v50 = new Proxy(v3,Object);
// v50 = .unknown
let v53 = -65537;
const v54 = v53 + 1;
// v54 = .primitive
v53 = v54;
}
%NeverOptimizeFunction(main);
main();
