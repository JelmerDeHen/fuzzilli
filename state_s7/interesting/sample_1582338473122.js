function main() {
const v4 = "undefined" % -2;
// v4 = .number
const v6 = [13.37,13.37,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = [1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v9 = [v8,v6,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v10 = {__proto__:-2,length:eval,valueOf:13.37};
// v10 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"], withMethods: ["length"])
const v11 = {constructor:eval,__proto__:eval};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["__proto__", "constructor"])
let v12 = 13.37;
const v16 = [-2637407539,-2637407539,-2637407539,-2637407539,-2637407539];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v17(v18,v19,v20,v21) {
    'use strict'
    let v23 = 13.37;
    try {
        const v26 = new Float32Array(19873);
        // v26 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "constructor", "buffer", "length", "__proto__"], withMethods: ["filter", "every", "fill", "copyWithin", "slice", "includes", "entries", "reduceRight", "indexOf", "sort", "map", "lastIndexOf", "find", "values", "reverse", "reduce", "findIndex", "join", "keys", "some", "set", "subarray", "forEach"])
        v21[3] = v21;
    } catch(v27) {
        const v32 = [-2008211595];
        // v32 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v33 = {valueOf:v32};
        // v33 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
        const v36 = new ArrayBuffer(1337);
        // v36 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
        v36.constructor = v33;
        const v39 = v36.slice(1024,1337);
        // v39 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
        const v40 = [13.37,13.37,13.37];
        // v40 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v42 = {a:"caller",valueOf:v40,__proto__:1337,constructor:-277544492,c:-277544492,b:"caller"};
        // v42 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "c", "b", "a", "constructor"])
    }
    return v20;
}
const v43 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
// v43 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "has", "preventExtensions", "set", "get", "deleteProperty", "setPrototypeOf", "call", "ownKeys", "construct", "isExtensible"])
const v45 = new Proxy(v16,v43);
// v45 = .unknown
v45[1] = "toString";
}
%NeverOptimizeFunction(main);
main();
