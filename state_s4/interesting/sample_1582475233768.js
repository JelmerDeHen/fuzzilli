function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v3 = {valueOf:WeakSet,__proto__:v2};
// v3 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
const v6 = [13.37];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = [1337,1337,1337,"xcycrfnQjT",1337];
// v8 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v9(v10,v11,v12,v13) {
    'use strict'
    try {
        const v17 = [13.37,"DPtrqeeOKz"];
        // v17 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        function v19(v20,v21) {
            const v24 = [13.37,13.37,13.37,13.37,13.37];
            // v24 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            const v25 = new Set(v24);
            // v25 = .object(ofGroup: Set, withProperties: ["__proto__", "size"], withMethods: ["clear", "keys", "delete", "values", "has", "forEach", "add", "entries"])
            const v26 = v25.entries();
            // v26 = .object()
            return v19;
        }
        const v28 = [1337];
        // v28 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        let v29 = v28;
        const v30 = v19(v29);
        // v30 = .unknown
        for (let v34 = 0; v34 < 100; v34++) {
            const v35 = v30(1337,v17,13.37);
            // v35 = .unknown
        }
        let v39 = 0;
        const v43 = v39 + 1;
        // v43 = .primitive
        v39 = v43;
        const v44 = v30(1337,v3,v6,v28);
        // v44 = .unknown
        const v46 = Object.defineProperty(this,v13,v13);
        // v46 = .undefined
    } catch(v47) {
    }
}
const v48 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
// v48 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "setPrototypeOf", "deleteProperty", "has", "isExtensible", "preventExtensions", "construct", "get", "set", "getPrototypeOf", "call"])
const v50 = new Proxy(v8,v48);
// v50 = .unknown
v50.constructor = v6;
}
%NeverOptimizeFunction(main);
main();