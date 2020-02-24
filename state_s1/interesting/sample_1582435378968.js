function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v4(v5,v6,v7,v8) {
    'use strict'
    const v13 = [-2331916614,-2331916614,-2331916614];
    // v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v14 = [3664180981,3664180981,"string","string"];
    // v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v15 = {valueOf:v14,length:v13,toString:Number,constructor:"string",c:Number};
    // v15 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "__proto__", "constructor"], withMethods: ["toString", "c"])
    function v16(v17,v18) {
        const v21 = [1337,1337,1337,1337,1337];
        // v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        function v22(v23,v24,v25,v26) {
            'use strict'
            try {
                const v29 = Object.defineProperty(this,v17,v26);
                // v29 = .undefined
            } catch(v30) {
            }
            return v22;
        }
        const v31 = {deleteProperty:v22,set:v22,getPrototypeOf:v22,call:v22,preventExtensions:v22,isExtensible:v22,construct:v22,get:v22,ownKeys:v22,setPrototypeOf:v22,has:v22};
        // v31 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "get", "has", "setPrototypeOf", "call", "set", "deleteProperty", "construct", "ownKeys", "getPrototypeOf", "preventExtensions"])
        const v33 = new Proxy(v21,v31);
        // v33 = .unknown
        v33[1] = "MIN_VALUE";
    }
    const v34 = v16(v15,v7);
    // v34 = .unknown
}
const v35 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v35 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "has", "set", "ownKeys", "deleteProperty", "getPrototypeOf", "isExtensible", "preventExtensions", "setPrototypeOf", "get", "construct"])
const v37 = new Proxy(v3,v35);
// v37 = .unknown
v37[1] = v1;
}
%NeverOptimizeFunction(main);
main();
