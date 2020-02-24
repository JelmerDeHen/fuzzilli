function main() {
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v3 = {valueOf:v2,length:eval};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"], withMethods: ["length"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v7(v8,v9,v10,v11) {
    'use strict'
    try {
        v11[3] = v11;
    } catch(v12) {
        const v18 = {length:"N0Xx92zvHQ"};
        // v18 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
        const v19 = {constructor:13.37,length:13.37,__proto__:v18,toString:Number,a:"N0Xx92zvHQ"};
        // v19 = .object(ofGroup: Object, withProperties: ["a", "constructor", "length", "__proto__"], withMethods: ["toString"])
        const v21 = v11 instanceof v7;
        // v21 = .boolean
        let v22 = v10;
        const v23 = gc();
        // v23 = .undefined
        const v24 = {toString:v3,valueOf:"MIN_VALUE",d:v18,constructor:v6,c:Number,length:v6};
        // v24 = .object(ofGroup: Object, withProperties: ["constructor", "d", "valueOf", "toString", "__proto__", "length"], withMethods: ["c"])
        const v25 = v6.__proto__;
        // v25 = .object()
        const v26 = {isExtensible:eval,setPrototypeOf:v8,has:v7,preventExtensions:v7,getPrototypeOf:v7,call:Object,apply:v7,ownKeys:v7,set:v12,deleteProperty:v9,getOwnPropertyDescriptor:Number,construct:eval};
        // v26 = .object(ofGroup: Object, withProperties: ["set", "__proto__", "setPrototypeOf", "deleteProperty"], withMethods: ["isExtensible", "has", "ownKeys", "getPrototypeOf", "getOwnPropertyDescriptor", "call", "construct", "apply", "preventExtensions"])
        const v34 = [13.37,13.37];
        // v34 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        Reflect[Symbol] = v34;
    }
    return v6;
}
const v35 = {deleteProperty:v7,set:v7,getPrototypeOf:v7,call:v7,preventExtensions:v7,isExtensible:v7,construct:v7,get:v7,ownKeys:v7,setPrototypeOf:v7,has:v7};
// v35 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "ownKeys", "preventExtensions", "has", "set", "setPrototypeOf", "getPrototypeOf", "call", "isExtensible", "get", "construct"])
const v37 = new Proxy(v6,v35);
// v37 = .unknown
v37[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
