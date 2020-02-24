function main() {
const v2 = new Float64Array(6992);
// v2 = .object(ofGroup: Float64Array, withProperties: ["byteLength", "length", "__proto__", "constructor", "buffer", "byteOffset"], withMethods: ["reduceRight", "findIndex", "reverse", "fill", "forEach", "every", "copyWithin", "includes", "set", "some", "find", "slice", "subarray", "reduce", "values", "keys", "sort", "lastIndexOf", "entries", "indexOf", "filter", "join", "map"])
let v3 = v2;
const v6 = new Proxy(v3,Reflect);
// v6 = .unknown
const v9 = [1337,1337,1337,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v10(v11,v12,v13,v14) {
    'use strict'
    const v17 = [13.37,13.37,13.37];
    // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    function v18(v19,v20) {
        const v23 = [1337,1337,1337,1337,1337];
        // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        function v24(v25,v26,v27,v28) {
            'use strict'
            try {
                v28[3] = v28;
            } catch(v29) {
                v6[1337] = v24;
            }
            return v23;
        }
        const v30 = {deleteProperty:v24,set:v24,getPrototypeOf:v24,call:v24,preventExtensions:v24,isExtensible:v24,construct:v24,get:v24,ownKeys:v24,setPrototypeOf:v24,has:v24};
        // v30 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "setPrototypeOf", "preventExtensions", "has", "set", "getPrototypeOf", "isExtensible", "call", "construct", "ownKeys", "get"])
        const v32 = new Proxy(v23,v30);
        // v32 = .unknown
        v32[1] = "MIN_VALUE";
    }
    const v33 = ["undefined",v17];
    // v33 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v36 = new Int16Array(19873);
    // v36 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
    const v37 = v18(...v33,...v36);
    // v37 = .unknown
}
const v38 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
// v38 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "ownKeys", "construct", "preventExtensions", "set", "call", "deleteProperty", "isExtensible", "has", "getPrototypeOf", "get"])
const v40 = new Proxy(v9,v38);
// v40 = .unknown
v40[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
