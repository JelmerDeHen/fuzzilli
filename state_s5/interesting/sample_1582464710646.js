function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {b:1337};
// v8 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
const v9 = {valueOf:v7,b:v8};
// v9 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "b"])
let v10 = v6;
const v13 = [1337,1337,1337,1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v14(v15,v16,v17,v18) {
    'use strict'
    const v21 = Symbol.e;
    // v21 = .unknown
    const v22 = Symbol[v21];
    // v22 = .unknown
    function v23(v24,v25) {
        let v29 = 0;
        function v30(v31,v32,v33,v34,v35) {
        }
        const v36 = v29 + 1;
        // v36 = .primitive
        v29 = v36;
        const v38 = [13.37];
        // v38 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        let v41 = -1024;
        while (v41 < 5) {
            const v43 = {set:v30,get:gc};
            // v43 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
            const v45 = Object.defineProperty(v38,"__proto__",v43);
            // v45 = .undefined
            const v46 = v41 + 1;
            // v46 = .primitive
            v41 = v46;
        }
        const v47 = v38.__proto__;
        // v47 = .object()
    }
    const v49 = [1337];
    // v49 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    let v50 = v49;
    const v51 = v23(v50);
    // v51 = .unknown
    const v52 = v23(v51,1337);
    // v52 = .unknown
    const v53 = {getPrototypeOf:v22,get:v22};
    // v53 = .object(ofGroup: Object, withProperties: ["__proto__", "get", "getPrototypeOf"])
    const v55 = new Proxy(Reflect,v53);
    // v55 = .unknown
    Object.__proto__ = v55;
    return "caller";
}
const v57 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:v14,construct:v14,get:v14,ownKeys:v14,constructor:1337,has:v14};
// v57 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"], withMethods: ["ownKeys", "construct", "deleteProperty", "getPrototypeOf", "call", "isExtensible", "set", "has", "preventExtensions", "get"])
const v59 = new Proxy(v13,v57);
// v59 = .unknown
v59[1] = "MIN_VALUE";
for (const v61 in "boolean") {
    let v64 = 0;
    do {
        const v66 = [1337,1337,1337,1337];
        // v66 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v69 = [1337,1337,1337,1337,1337];
        // v69 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        function v70(v71,v72,v73,v74) {
            'use strict'
            try {
                const v76 = Object.construct(v74);
                // v76 = .unknown
            } catch(v77) {
            }
            return "MIN_VALUE";
        }
        const v78 = {deleteProperty:v70,set:v70,getPrototypeOf:v70,call:v70,preventExtensions:v70,isExtensible:v66,construct:v70,get:v70,ownKeys:v70,setPrototypeOf:v70,has:v70};
        // v78 = .object(ofGroup: Object, withProperties: ["__proto__", "isExtensible"], withMethods: ["preventExtensions", "set", "getPrototypeOf", "get", "construct", "ownKeys", "has", "deleteProperty", "call", "setPrototypeOf"])
        const v80 = new Proxy(v69,v78);
        // v80 = .unknown
        v80[1] = "MIN_VALUE";
        const v81 = v64 + 1;
        // v81 = .primitive
        v64 = v81;
    } while (v64 < 8);
}
}
%NeverOptimizeFunction(main);
main();
