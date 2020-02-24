function main() {
let v1 = RegExp;
let v2 = v1;
const v7 = [1337,1337,1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v8(v9,v10,v11,v12) {
    'use strict'
    const v15 = Symbol.e;
    // v15 = .unknown
    const v16 = Symbol[v15];
    // v16 = .unknown
    const v17 = {getPrototypeOf:v16,get:v16};
    // v17 = .object(ofGroup: Object, withProperties: ["getPrototypeOf", "get", "__proto__"])
    const v19 = new Proxy(Reflect,v17);
    // v19 = .unknown
    Object.__proto__ = v19;
}
const v21 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:1337,has:v8};
// v21 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "__proto__"], withMethods: ["deleteProperty", "preventExtensions", "call", "set", "isExtensible", "get", "construct", "ownKeys", "has", "getPrototypeOf"])
const v23 = new Proxy(v7,v21);
// v23 = .unknown
v23[1] = "MIN_VALUE";
const v24 = new Proxy(v2,Object);
// v24 = .unknown
let v28 = undefined;
for (const v30 in "boolean") {
    let v33 = 0;
    do {
        const v35 = [1337,1337,1337,1337];
        // v35 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        const v38 = [1337,1337,1337,1337,1337];
        // v38 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        function v39(v40,v41,v42,v43) {
            'use strict'
            try {
                const v45 = Object.has(v43);
                // v45 = .unknown
            } catch(v46) {
            }
        }
        const v47 = {deleteProperty:v39,set:v39,getPrototypeOf:v39,call:v39,preventExtensions:v39,isExtensible:v35,construct:v39,get:v39,ownKeys:v39,setPrototypeOf:v39,has:v39};
        // v47 = .object(ofGroup: Object, withProperties: ["__proto__", "isExtensible"], withMethods: ["setPrototypeOf", "preventExtensions", "get", "ownKeys", "set", "construct", "deleteProperty", "has", "getPrototypeOf", "call"])
        const v49 = new Proxy(v38,v47);
        // v49 = .unknown
        v49[1] = "MIN_VALUE";
        const v53 = v33 + 1;
        // v53 = .primitive
        v33 = v53;
    } while (v33 < 8);
}
}
%NeverOptimizeFunction(main);
main();
