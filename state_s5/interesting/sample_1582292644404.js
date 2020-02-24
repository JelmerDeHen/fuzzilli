function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {constructor:v7,valueOf:Symbol,c:Symbol,length:v6,d:"iterator",a:Symbol,e:v4};
// v8 = .object(ofGroup: Object, withProperties: ["length", "e", "__proto__", "constructor", "d"], withMethods: ["valueOf", "a", "c"])
const v9 = {length:4294967297,c:1337,e:13.37,a:Symbol,d:v8};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "length", "d", "e"], withMethods: ["a"])
let v10 = v9;
const v14 = [1337,1337,1337,1337,1337];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v16(v17,v18,v19,v20) {
    'use strict'
    try {
        const v22 = {};
        // v22 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v23 = v22;
        const v24 = Object.entries(v19);
        // v24 = .object()
        const v29 = [2153514987,1,13.37,13.37,v20];
        // v29 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v31 = [v23,v29,v29];
        // v31 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v32 = {length:13.37,b:v19,valueOf:v29,__proto__:v31};
        // v32 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "__proto__", "length"])
        const v33 = {a:1337,toString:v19,constructor:"NEGATIVE_INFINITY",valueOf:v32,b:13.37,c:JSON,e:JSON};
        // v33 = .object(ofGroup: Object, withProperties: ["e", "toString", "a", "b", "c", "valueOf", "__proto__", "constructor"])
        const v35 = JSON.stringify(v33,Reflect,"name");
        // v35 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
    } catch(v36) {
    }
    return v10;
}
const v37 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:v16,has:v16};
// v37 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "get", "construct", "ownKeys", "preventExtensions", "isExtensible", "set", "call", "getPrototypeOf", "has", "deleteProperty"])
const v39 = new Proxy(v14,v37);
// v39 = .unknown
v39[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
