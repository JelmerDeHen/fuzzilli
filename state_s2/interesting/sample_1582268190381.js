function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v3 = {valueOf:v2,__proto__:v2};
// v3 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
let v5 = 13.37;
const v8 = [1337,1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v9(v10,v11,v12,v13) {
    'use strict'
    try {
        v13[3] = v13;
        const v14 = v3();
        // v14 = .unknown
        const v15 = v14[-2900725722];
        // v15 = .unknown
        function v16(v17,v18) {
            let v25 = 0;
            for (let v29 = 0; v29 < 1; v29++) {
                const v30 = {get:isNaN};
                // v30 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
            }
        }
    } catch(v34) {
    }
    return v5;
}
const v35 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
// v35 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "has", "construct", "preventExtensions", "deleteProperty", "getPrototypeOf", "get", "isExtensible", "setPrototypeOf", "set", "ownKeys"])
const v37 = new Proxy(v8,v35);
// v37 = .unknown
v37[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
