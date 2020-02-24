function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v4 = 0;
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v7(v8,v9,v10,v11) {
    'use strict'
    const v16 = [-2331916614,-2331916614,-2331916614];
    // v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v17 = [3664180981,3664180981,"string","string"];
    // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v18 = {valueOf:v17,length:v16,toString:parseFloat,constructor:"string",c:parseFloat};
    // v18 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "constructor", "__proto__"], withMethods: ["c", "toString"])
    function v19(v20,v21) {
        const v25 = [1337,1337,1337,1337,1337];
        // v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        function v26(v27,v28,v29,v30) {
            'use strict'
            try {
                const v33 = Object.defineProperty(this,v20,v30);
                // v33 = .undefined
            } catch(v34) {
            }
            return v26;
        }
        const v35 = {deleteProperty:v26,set:v26,getPrototypeOf:v26,call:v26,preventExtensions:v26,isExtensible:v26,construct:v26,get:v26,ownKeys:v26,setPrototypeOf:v26,has:v26};
        // v35 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "call", "deleteProperty", "preventExtensions", "ownKeys", "isExtensible", "setPrototypeOf", "has", "set", "getPrototypeOf", "construct"])
        const v37 = new Proxy(v25,v35);
        // v37 = .unknown
        v37[1] = "MIN_VALUE";
    }
    const v38 = v19(v18,v10);
    // v38 = .unknown
    return v9;
}
const v39 = {deleteProperty:v7,set:v7,getPrototypeOf:v7,call:v7,preventExtensions:v7,isExtensible:v7,construct:v7,get:v7,ownKeys:v7,setPrototypeOf:v7,has:v7};
// v39 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "setPrototypeOf", "set", "ownKeys", "preventExtensions", "get", "isExtensible", "deleteProperty", "getPrototypeOf", "construct", "has"])
const v41 = new Proxy(v6,v39);
// v41 = .unknown
v41[1] = v1;
}
%NeverOptimizeFunction(main);
main();
