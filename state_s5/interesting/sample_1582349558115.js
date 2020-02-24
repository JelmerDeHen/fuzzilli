function main() {
const v2 = new Float64Array(6992);
// v2 = .object(ofGroup: Float64Array, withProperties: ["buffer", "constructor", "byteOffset", "byteLength", "__proto__", "length"], withMethods: ["forEach", "fill", "subarray", "set", "reduce", "join", "slice", "includes", "lastIndexOf", "filter", "find", "reverse", "values", "map", "keys", "reduceRight", "copyWithin", "sort", "some", "indexOf", "entries", "findIndex", "every"])
let v3 = v2;
const v6 = new Proxy(v3,Reflect);
// v6 = .unknown
const v9 = [1337,1337,1337,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v10(v11,v12,v13,v14) {
    'use strict'
    const v17 = [13.37,13.37,13.37];
    // v17 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    function v18(v19,v20) {
        const v23 = [1337,1337,1337,1337,1337];
        // v23 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
        // v30 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "get", "setPrototypeOf", "call", "ownKeys", "deleteProperty", "preventExtensions", "isExtensible", "set", "getPrototypeOf", "has"])
        const v32 = new Proxy(v23,v30);
        // v32 = .unknown
        v32[1] = "MIN_VALUE";
    }
    const v33 = ["undefined",v17];
    // v33 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v36 = new Int16Array(19873);
    // v36 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
    const v37 = v18(...v33,...v36);
    // v37 = .unknown
}
const v38 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
// v38 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "preventExtensions", "isExtensible", "set", "setPrototypeOf", "deleteProperty", "construct", "ownKeys", "call", "has", "getPrototypeOf"])
const v40 = new Proxy(v9,v38);
// v40 = .unknown
v40[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
