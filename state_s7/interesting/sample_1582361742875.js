function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [v4,128,13.37,128];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v9 = {__proto__:v8};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v10 = Int16Array;
const v15 = [13.37,13.37,13.37];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v16 = {a:"boolean",constructor:-931982090,e:arguments,b:v15,length:arguments,__proto__:arguments,valueOf:arguments};
// v16 = .object(ofGroup: Object, withProperties: ["valueOf", "b", "constructor", "__proto__", "length", "a", "e"])
const v19 = [-536870912,-536870912,-536870912,-536870912,-536870912];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v20(v21,v22,v23,v24) {
    'use strict'
    let v27 = 0;
    while (v27 < 1337) {
        const v28 = v27 + 1;
        // v28 = .primitive
        v27 = v28;
        let v31 = 0;
        do {
            const v35 = new Int16Array(1337);
            // v35 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
            v35.constructor = Float32Array;
            const v36 = arguments[1337];
            // v36 = .unknown
            const v37 = v31 + 1;
            // v37 = .primitive
            v31 = v37;
        } while (v31 < 7);
        const v38 = [13.37,...v16,0];
        // v38 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    }
    return v23;
}
const v39 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
// v39 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "setPrototypeOf", "get", "isExtensible", "set", "construct", "call", "deleteProperty", "ownKeys", "getPrototypeOf", "has"])
const v41 = new Proxy(v19,v39);
// v41 = .unknown
v41.b = v39;
const v42 = ~Int16Array;
// v42 = .boolean
const v43 = v20("MIN_VALUE",arguments,v19,Int16Array);
// v43 = .unknown
}
%NeverOptimizeFunction(main);
main();
