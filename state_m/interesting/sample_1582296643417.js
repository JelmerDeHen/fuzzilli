function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = ["number"];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = {d:"number",constructor:v7,toString:1337,length:v4,c:1337};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "length", "toString", "constructor", "c"])
const v9 = {d:"number",b:1337,e:8};
// v9 = .object(ofGroup: Object, withProperties: ["d", "b", "e", "__proto__"])
const v10 = 1337 / v7;
// v10 = .number
let v11 = v8;
let v13 = RegExp;
let v14 = v13;
const v19 = [1337,1337,1337,1337,1337];
// v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v20 = {constructor:Proxy};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
function v21(v22,v23,v24,v25) {
    'use strict'
    const v28 = typeof v25;
    // v28 = .string
    const v30 = v28 === "symbol";
    // v30 = .boolean
    let v31 = v24;
    if (v23) {
        const v33 = Symbol.search;
        // v33 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        const v34 = Symbol[v33];
        // v34 = .unknown
        v31 = v24;
    } else {
        const v35 = v4.__proto__;
        // v35 = .object()
        v31 = v35;
    }
    const v37 = {get:v21};
    // v37 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
    const v39 = Object.defineProperty(v14,1337,v37);
    // v39 = .undefined
    for (let v43 = 0; v43 < 10; v43++) {
        v8[-4006377351] = v21;
    }
    const v44 = Symbol.e;
    // v44 = .unknown
    const v45 = Symbol[v44];
    // v45 = .unknown
    const v46 = {getPrototypeOf:v45,get:v45};
    // v46 = .object(ofGroup: Object, withProperties: ["get", "__proto__", "getPrototypeOf"])
    const v48 = new Proxy(Reflect,v46);
    // v48 = .unknown
    Object.__proto__ = v48;
    return v19;
}
const v50 = {deleteProperty:v21,set:v21,getPrototypeOf:v21,call:v21,preventExtensions:v21,isExtensible:v21,construct:v21,get:v21,ownKeys:v21,setPrototypeOf:1337,has:v21};
// v50 = .object(ofGroup: Object, withProperties: ["__proto__", "setPrototypeOf"], withMethods: ["getPrototypeOf", "deleteProperty", "get", "preventExtensions", "set", "isExtensible", "construct", "call", "ownKeys", "has"])
const v52 = new Proxy(v19,v50);
// v52 = .unknown
v52[1] = "MIN_VALUE";
const v53 = new Proxy(v14,Object);
// v53 = .unknown
const v54 = Object.freeze(v53);
// v54 = .undefined
for (const v55 in v53) {
}
}
%NeverOptimizeFunction(main);
main();
