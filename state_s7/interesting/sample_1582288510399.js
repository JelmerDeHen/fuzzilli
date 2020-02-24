function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {b:v7,valueOf:13.37,d:"boolean"};
// v8 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "__proto__", "d"])
const v9 = {c:"boolean",e:v4,length:65535,toString:65535};
// v9 = .object(ofGroup: Object, withProperties: ["c", "e", "toString", "__proto__", "length"])
let v10 = v7;
const v14 = {length:13.37,a:gc,constructor:gc};
// v14 = .object(ofGroup: Object, withProperties: ["length", "__proto__"], withMethods: ["a", "constructor"])
let v15 = "unscopable";
try {
    const v19 = 371375.4036167406 in v14;
    // v19 = .boolean
    const v21 = [13.37,13.37];
    // v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v22 = v15[1024];
    // v22 = .unknown
    const v24 = Symbol.toStringTag;
    // v24 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
    const v25 = {has:Uint8Array,construct:v22,defineProperty:v22,deleteProperty:Uint8Array,setPrototypeOf:Uint8Array,preventExtensions:v22,isExtensible:v22,call:v22,set:Uint8Array,getOwnPropertyDescriptor:Uint8Array};
    // v25 = .object(ofGroup: Object, withProperties: ["__proto__", "has", "setPrototypeOf", "defineProperty", "isExtensible", "preventExtensions", "getOwnPropertyDescriptor", "call", "construct", "set", "deleteProperty"])
    const v27 = new Proxy(v21,v25);
    // v27 = .unknown
    const v30 = [-65536];
    // v30 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v32 = v30.flat(0);
    // v32 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v33 = v32.pop();
    // v33 = .unknown
    let v37 = 0;
    const v39 = [13.37,13.37,13.37,13.37,13.37];
    // v39 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    let v40 = v39;
    const v41 = Reflect.defineProperty(Symbol,v27,v24);
    // v41 = .boolean
} catch(v42) {
}
const v43 = v8[1337];
// v43 = .unknown
v4.__proto__ = v8;
Reflect.toString = gc;
const v44 = gc();
// v44 = .undefined
}
%NeverOptimizeFunction(main);
main();
