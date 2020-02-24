function main() {
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v3 = {valueOf:v2,length:eval};
// v3 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"], withMethods: ["length"])
const v7 = [1337,1337,1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v8(v9,v10,v11,v12) {
    'use strict'
    try {
        v12[3] = v12;
    } catch(v13) {
        const v19 = {length:"N0Xx92zvHQ"};
        // v19 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
        const v20 = {constructor:13.37,length:13.37,__proto__:v19,toString:Number,a:"N0Xx92zvHQ"};
        // v20 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "length", "constructor"], withMethods: ["toString"])
        const v24 = v12 instanceof v8;
        // v24 = .boolean
        let v25 = v11;
        const v26 = gc();
        // v26 = .undefined
        const v27 = {toString:v3,valueOf:"MIN_VALUE",d:v19,constructor:v7,c:Number,length:v7};
        // v27 = .object(ofGroup: Object, withProperties: ["length", "constructor", "toString", "__proto__", "valueOf", "d"], withMethods: ["c"])
        const v28 = v7.__proto__;
        // v28 = .object()
        const v29 = {isExtensible:eval,setPrototypeOf:v9,has:v8,preventExtensions:v8,getPrototypeOf:v8,call:Object,apply:v8,ownKeys:v8,set:v13,deleteProperty:v10,getOwnPropertyDescriptor:Number,construct:eval};
        // v29 = .object(ofGroup: Object, withProperties: ["deleteProperty", "set", "__proto__", "setPrototypeOf"], withMethods: ["call", "ownKeys", "getPrototypeOf", "apply", "getOwnPropertyDescriptor", "preventExtensions", "has", "isExtensible", "construct"])
        const v31 = new Proxy(Number,v29);
        // v31 = .unknown
        const v32 = Object();
        // v32 = .object()
        const v33 = v19[-2147483649];
        // v33 = .unknown
    }
    return v7;
}
const v34 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:v8,has:v8};
// v34 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "preventExtensions", "construct", "set", "ownKeys", "getPrototypeOf", "isExtensible", "call", "has", "deleteProperty", "get"])
const v36 = new Proxy(v7,v34);
// v36 = .unknown
v36[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
