function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        const v11 = Float32Array(19873);
        // v11 = .unknown
    } catch(v12) {
        const v15 = [1337];
        // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        let v19 = 0;
        let v20 = v15;
        function v21(v22,v23) {
            const v25 = {deleteProperty:Object,apply:Object,getPrototypeOf:RegExp,defineProperty:v23,set:RegExp,construct:v21,setPrototypeOf:v23,has:v21};
            // v25 = .object(ofGroup: Object, withProperties: ["defineProperty", "__proto__", "setPrototypeOf"], withMethods: ["has", "apply", "set", "deleteProperty", "getPrototypeOf", "construct"])
            const v27 = new Proxy(v12,v25);
            // v27 = .unknown
            const v28 = Object.freeze(v27);
            // v28 = .undefined
        }
        let v29 = v20;
        const v30 = v21(v29);
        // v30 = .unknown
    }
}
const v31 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v31 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "has", "deleteProperty", "preventExtensions", "construct", "ownKeys", "isExtensible", "set", "get", "call", "setPrototypeOf"])
const v33 = new Proxy(v3,v31);
// v33 = .unknown
v33[1] = "MIN_VALUE";
let v36 = 0;
let v39 = 0;
const v40 = v39 + 1;
// v40 = .primitive
v39 = v40;
}
%NeverOptimizeFunction(main);
main();
