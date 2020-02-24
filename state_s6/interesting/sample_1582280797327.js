function main() {
let v4 = 0;
const v5 = v4 + 1;
// v5 = .primitive
v4 = v5;
let v9 = 0;
let v14 = 0;
const v16 = [13.37];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v19 = [1337,1337,1337,1337,1337];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v20(v21,v22,v23,v24) {
    'use strict'
    try {
        const v26 = {};
        // v26 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v27 = v26;
        const v32 = [2153514987,13.37,13.37,13.37,v16];
        // v32 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        const v34 = [v27,v32,v32];
        // v34 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        const v35 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v32,__proto__:v34};
        // v35 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "b", "__proto__"])
        const v36 = {a:1337,toString:v26,constructor:"NEGATIVE_INFINITY",valueOf:v35,b:13.37,c:JSON,e:JSON};
        // v36 = .object(ofGroup: Object, withProperties: ["a", "constructor", "e", "valueOf", "__proto__", "b", "c", "toString"])
        const v38 = JSON.stringify(v36,Reflect,"name");
        // v38 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
        v24[3] = v24;
    } catch(v39) {
    }
    const v41 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
    // v41 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "getPrototypeOf", "set", "preventExtensions", "getOwnPropertyDescriptor", "apply", "deleteProperty", "isExtensible", "get", "defineProperty", "construct"])
}
const v42 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
// v42 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "isExtensible", "call", "ownKeys", "get", "preventExtensions", "deleteProperty", "getPrototypeOf", "has", "construct", "set"])
const v44 = new Proxy(v19,v42);
// v44 = .unknown
v44[1] = "MIN_VALUE";
const v48 = [13.37,13.37,13.37];
// v48 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v50 = [1337];
// v50 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v51 = ["undefined",v48];
// v51 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v52 = {a:3609309068,c:"undefined"};
// v52 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "c"])
const v53 = {e:1337,__proto__:v48,constructor:1337,a:v50,c:"undefined",valueOf:v52};
// v53 = .object(ofGroup: Object, withProperties: ["a", "constructor", "__proto__", "e", "c", "valueOf"])
let v54 = v52;
const v59 = new Float32Array(19873);
// v59 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "length", "constructor", "__proto__", "buffer", "byteLength"], withMethods: ["some", "find", "join", "keys", "forEach", "every", "reduceRight", "filter", "values", "entries", "sort", "copyWithin", "map", "subarray", "reverse", "fill", "reduce", "slice", "includes", "indexOf", "set", "findIndex", "lastIndexOf"])
const v61 = (1337)[13.37];
// v61 = .unknown
const v62 = v59.lastIndexOf(1.7976931348623157e+308,v61);
// v62 = .integer
}
%NeverOptimizeFunction(main);
main();
