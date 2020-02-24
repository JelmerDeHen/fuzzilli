function main() {
const v1 = [1337,1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v3 = [13.37,13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = [];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v5(v6,v7) {
    const v10 = [1337,1337,1337,1337,1337];
    // v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    function v11(v12,v13,v14,v15) {
        'use strict'
        try {
            v15[3] = v15;
        } catch(v16) {
            const v21 = [1337,1337,1337];
            // v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
            const v22 = [3664180981,3664180981,"string","string"];
            // v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
            const v23 = {valueOf:v22,length:v21,toString:parseFloat,constructor:"string",c:parseFloat};
            // v23 = .object(ofGroup: Object, withProperties: ["valueOf", "length", "constructor", "__proto__"], withMethods: ["toString", "c"])
            const v24 = v21.__proto__;
            // v24 = .object()
            let v26 = undefined;
            let v29 = undefined;
            const v31 = Object.freeze(v16);
            // v31 = .undefined
            try {
                const v34 = [13.37,v29];
                // v34 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
                const v35 = v34[1024];
                // v35 = .unknown
                const v36 = {has:Array,construct:v35,toString:v35,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v35,isExtensible:v35,call:v35,set:13.37,getOwnPropertyDescriptor:Array};
                // v36 = .object(ofGroup: Object, withProperties: ["call", "set", "isExtensible", "construct", "toString", "__proto__", "preventExtensions"], withMethods: ["getOwnPropertyDescriptor", "has", "deleteProperty", "setPrototypeOf"])
                const v38 = new Proxy(v31,v36);
                // v38 = .unknown
                for (const v39 in v38) {
                }
            } catch(v40) {
            }
        }
        return v10;
    }
    const v41 = {deleteProperty:v11,set:v11,getPrototypeOf:v1,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:v11,has:v11};
    // v41 = .object(ofGroup: Object, withProperties: ["__proto__", "getPrototypeOf"], withMethods: ["isExtensible", "has", "preventExtensions", "set", "deleteProperty", "get", "setPrototypeOf", "construct", "call", "ownKeys"])
    const v43 = new Proxy(v10,v41);
    // v43 = .unknown
    v43[1] = "MIN_VALUE";
}
const v44 = v3.some(v5,v4);
// v44 = .boolean
}
%NeverOptimizeFunction(main);
main();
