function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [eval,-9007199254740992,-9007199254740992,v6];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {valueOf:1337};
// v8 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
const v9 = {c:13.37,e:v8};
// v9 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "c"])
let v10 = 1337;
const v12 = [13.37,13.37,13.37,13.37];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v13(v14,v15) {
    const v18 = {set:v13,get:v13};
    // v18 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
    const v20 = Object.seal(arguments,7,v18);
    // v20 = .object()
    const v21 = Object.getOwnPropertyDescriptors(arguments);
    // v21 = .object()
    const v24 = [1337,1337,1337,1337,1337];
    // v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    function v25(v26,v27,v28,v29) {
        'use strict'
        const v31 = {a:Function};
        // v31 = .object(ofGroup: Object, withProperties: ["__proto__", "a"])
        const v34 = [1337,v31,1337,1337,1337];
        // v34 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        function v35(v36,v37) {
            function v38(v39,v40) {
                let v42 = 0;
                const v43 = v42 + 1;
                // v43 = .primitive
            }
            function v44(v45,v46,v47) {
            }
            const v50 = new Uint16Array(1000);
            // v50 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "buffer", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["keys", "some", "sort", "includes", "join", "values", "reduceRight", "fill", "indexOf", "subarray", "reduce", "lastIndexOf", "findIndex", "find", "every", "copyWithin", "entries", "slice", "filter", "set", "forEach", "map", "reverse"])
            try {
                let v53 = 0;
                const v54 = v53 + 1;
                // v54 = .primitive
                const v56 = {get:v38,set:v44};
                // v56 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
                const v58 = Object.defineProperty(v50,4294967297,v56);
                // v58 = .undefined
            } catch(v59) {
                const v60 = {__proto__:v59,a:v38,...v50,...4294967296,...v59,...v50};
                // v60 = .object(ofGroup: Object, withProperties: ["buffer", "byteOffset", "__proto__", "byteLength", "length", "constructor"], withMethods: ["indexOf", "join", "some", "filter", "set", "subarray", "reduceRight", "every", "find", "map", "fill", "findIndex", "entries", "copyWithin", "a", "reverse", "slice", "reduce", "includes", "keys", "forEach", "sort", "values", "lastIndexOf"])
            }
        }
        const v61 = v34.forEach(v35,"eeeRbEqfAO");
        // v61 = .undefined
    }
    const v62 = {deleteProperty:v25,set:v25,getPrototypeOf:v25,a:v25,preventExtensions:v25,isExtensible:v25,construct:v25,get:v25,ownKeys:v25,setPrototypeOf:v25,has:v25};
    // v62 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "get", "a", "isExtensible", "deleteProperty", "setPrototypeOf", "has", "set", "preventExtensions", "construct", "ownKeys"])
    const v64 = new Proxy(v24,v62);
    // v64 = .unknown
    v64[1] = "MIN_VALUE";
    return v15;
}
const v65 = v12.sort(v13);
// v65 = .undefined
}
%NeverOptimizeFunction(main);
main();
