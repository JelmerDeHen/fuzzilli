function main() {
const v2 = new Float64Array(6992);
// v2 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteOffset", "__proto__", "byteLength", "buffer", "length"], withMethods: ["entries", "every", "some", "indexOf", "subarray", "lastIndexOf", "findIndex", "keys", "map", "reverse", "reduce", "filter", "sort", "slice", "join", "set", "find", "forEach", "copyWithin", "includes", "reduceRight", "values", "fill"])
let v3 = v2;
const v6 = new Proxy(v3,Reflect);
// v6 = .unknown
const v9 = [1337,1337,1337,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v10(v11,v12,v13,v14) {
    'use strict'
    const v17 = [13.37,13.37,13.37];
    // v17 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    function v18(v19,v20) {
        const v23 = [1337,1337,1337,1337,1337];
        // v23 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
        // v30 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "isExtensible", "set", "deleteProperty", "preventExtensions", "call", "has", "construct", "setPrototypeOf", "ownKeys", "get"])
        const v32 = new Proxy(v23,v30);
        // v32 = .unknown
        v32[1] = "MIN_VALUE";
    }
    const v33 = ["undefined",v17];
    // v33 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v36 = new Int16Array(19873);
    // v36 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reverse", "indexOf", "map", "reduceRight", "find", "reduce", "lastIndexOf", "keys", "entries", "values", "copyWithin", "every", "subarray", "fill", "some", "findIndex", "filter", "set", "slice", "join", "forEach", "includes", "sort"])
    const v37 = v18(...v33,...v36);
    // v37 = .unknown
}
const v38 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
// v38 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "set", "isExtensible", "construct", "deleteProperty", "call", "get", "has", "getPrototypeOf", "ownKeys", "preventExtensions"])
const v40 = new Proxy(v9,v38);
// v40 = .unknown
v40[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
