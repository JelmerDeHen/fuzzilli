function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = [v6,1337,13.37,Object];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = {constructor:Object,__proto__:v6};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["constructor"])
const v9 = {__proto__:13.37,constructor:v6,d:v8,b:v6};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "d", "constructor"])
let v10 = "EPSILON";
const v13 = [1337,1337,1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v14 = {valueOf:v13,length:eval};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"], withMethods: ["length"])
const v18 = [1337,1337,1337,1337,1337];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v19(v20,v21,v22,v23) {
    'use strict'
    try {
        v23[3] = v23;
    } catch(v24) {
        const v30 = {length:"N0Xx92zvHQ"};
        // v30 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
        const v31 = {constructor:13.37,length:-4294967295,__proto__:v30,toString:Number,a:"N0Xx92zvHQ"};
        // v31 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__", "a"], withMethods: ["toString"])
        const v35 = v23 instanceof v19;
        // v35 = .boolean
        let v36 = v22;
        const v37 = gc();
        // v37 = .undefined
        const v38 = {toString:v14,valueOf:"MIN_VALUE",d:v30,constructor:v18,c:Number,length:v18};
        // v38 = .object(ofGroup: Object, withProperties: ["toString", "d", "valueOf", "__proto__", "length", "constructor"], withMethods: ["c"])
        const v39 = v18.__proto__;
        // v39 = .object()
        const v40 = {isExtensible:eval,setPrototypeOf:v20,has:v19,preventExtensions:v19,getPrototypeOf:v19,call:Object,apply:v19,ownKeys:v19,set:v24,deleteProperty:v21,getOwnPropertyDescriptor:Number,construct:eval};
        // v40 = .object(ofGroup: Object, withProperties: ["set", "deleteProperty", "__proto__", "setPrototypeOf"], withMethods: ["has", "ownKeys", "preventExtensions", "isExtensible", "construct", "call", "getPrototypeOf", "getOwnPropertyDescriptor", "apply"])
        const v42 = new Proxy(Number,v40);
        // v42 = .unknown
        const v43 = Object();
        // v43 = .object()
        const v44 = v30[-2147483649];
        // v44 = .unknown
    }
    return v18;
}
const v45 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
// v45 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "call", "setPrototypeOf", "isExtensible", "deleteProperty", "ownKeys", "getPrototypeOf", "preventExtensions", "has", "set", "get"])
const v47 = new Proxy(v18,v45);
// v47 = .unknown
v47[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
