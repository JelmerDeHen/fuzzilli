function main() {
const v1 = [13.37];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        const v10 = {};
        // v10 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v11 = v10;
        const v15 = new Int32Array(65536);
        // v15 = .object(ofGroup: Int32Array, withProperties: ["length", "__proto__", "constructor", "buffer", "byteOffset", "byteLength"], withMethods: ["map", "copyWithin", "forEach", "subarray", "entries", "find", "reduceRight", "set", "filter", "keys", "indexOf", "some", "slice", "reverse", "values", "reduce", "findIndex", "includes", "sort", "fill", "every", "lastIndexOf", "join"])
        const v16 = new Uint8Array(v15);
        // v16 = .object(ofGroup: Uint8Array, withProperties: ["byteLength", "__proto__", "constructor", "buffer", "length", "byteOffset"], withMethods: ["indexOf", "every", "some", "includes", "reduce", "sort", "find", "keys", "subarray", "slice", "reduceRight", "fill", "copyWithin", "findIndex", "join", "forEach", "filter", "entries", "map", "set", "lastIndexOf", "values", "reverse"])
        const v22 = "undefined".indexOf("undefined",constructor);
        // v22 = .integer
        const v25 = [2153514987,13.37,13.37,13.37,v1];
        // v25 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v27 = [v11,v25,v25];
        // v27 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v28 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v25,__proto__:v27};
        // v28 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "length", "b"])
        const v29 = {a:1337,toString:v10,constructor:"NEGATIVE_INFINITY",valueOf:v28,b:13.37,c:JSON,e:JSON};
        // v29 = .object(ofGroup: Object, withProperties: ["toString", "b", "e", "c", "a", "__proto__", "constructor", "valueOf"])
        v9[8] = v9;
    } catch(v30) {
    }
}
const v31 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
// v31 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "preventExtensions", "setPrototypeOf", "construct", "set", "deleteProperty", "has", "getPrototypeOf", "isExtensible", "call", "ownKeys"])
const v33 = new Proxy(v4,v31);
// v33 = .unknown
v33[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
