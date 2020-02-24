function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v3(v4,v5,v6,v7) {
    'use strict'
    const v14 = [-2331916614,-2331916614,-2331916614];
    // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v15 = [3664180981,3664180981,"string","string"];
    // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v16 = {valueOf:v15,length:v14,toString:parseFloat,constructor:"string",c:parseFloat};
    // v16 = .object(ofGroup: Object, withProperties: ["constructor", "valueOf", "__proto__", "length"], withMethods: ["c", "toString"])
    function v17(v18,v19) {
        const v23 = [1337,1337,1337,1337,1337];
        // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        function v24(v25,v26,v27,v28) {
            'use strict'
            try {
                const v30 = {set:Symbol};
                // v30 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
                const v32 = Object.defineProperty(v23,v26,v30);
                // v32 = .undefined
                const v37 = Object.defineProperty(this,1337,v28);
                // v37 = .undefined
            } catch(v38) {
            }
            return v24;
        }
        const v39 = {deleteProperty:v24,set:v24,getPrototypeOf:v24,call:v24,preventExtensions:v24,isExtensible:v24,construct:v24,get:v24,ownKeys:v24,setPrototypeOf:v24,has:v24};
        // v39 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "call", "setPrototypeOf", "ownKeys", "get", "getPrototypeOf", "set", "construct", "has", "preventExtensions", "deleteProperty"])
        const v41 = new Proxy(v23,v39);
        // v41 = .unknown
        v41[1] = "MIN_VALUE";
    }
    const v42 = v14.constructor;
    // v42 = .object(ofGroup: Function, withProperties: ["__proto__", "caller", "constructor", "name", "prototype", "arguments", "length"], withMethods: ["call", "bind", "apply"]) + .function([.integer] => .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])) + .constructor([.integer] => .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"]))
    const v43 = v17(v16,v42);
    // v43 = .unknown
}
const v44 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v44 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "set", "preventExtensions", "construct", "get", "setPrototypeOf", "getPrototypeOf", "ownKeys", "call", "isExtensible", "has"])
const v46 = new Proxy(v2,v44);
// v46 = .unknown
v46[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
