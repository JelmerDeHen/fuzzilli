function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v4(v5,v6,v7,v8) {
    'use strict'
    const v12 = [1337,1337];
    // v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v14 = [13.37,13.37,13.37];
    // v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v15 = v14.toString();
    // v15 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
    const v18 = [13.37,13.37];
    // v18 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v21 = Symbol.e;
    // v21 = .unknown
    const v22 = Symbol[v21];
    // v22 = .unknown
    const v23 = {getPrototypeOf:v22,get:v22};
    // v23 = .object(ofGroup: Object, withProperties: ["getPrototypeOf", "__proto__", "get"])
    const v25 = new Proxy(Reflect,v23);
    // v25 = .unknown
    Object.__proto__ = v25;
    const v32 = [1337];
    // v32 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v33 = {b:v18,c:v12,valueOf:-9007199254740993,d:v15,constructor:1337,__proto__:v32};
    // v33 = .object(ofGroup: Object, withProperties: ["constructor", "d", "__proto__", "c", "b", "valueOf"])
    let v34 = v33;
    const v37 = new Proxy(v34,Object);
    // v37 = .unknown
    const v38 = Object.freeze(v37);
    // v38 = .undefined
}
const v39 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:1337,has:v4};
// v39 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "__proto__"], withMethods: ["deleteProperty", "get", "ownKeys", "call", "preventExtensions", "construct", "getPrototypeOf", "isExtensible", "set", "has"])
const v41 = new Proxy(v3,v39);
// v41 = .unknown
v41[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
