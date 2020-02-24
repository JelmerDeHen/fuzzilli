function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [1337,v6,v4];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {e:1337,d:-1891406937,toString:13.37,constructor:v4,__proto__:v6,c:v4};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "d", "c", "toString", "e"])
const v9 = {e:v7,length:v8,constructor:v6,__proto__:-1891406937,a:v6};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "a", "length", "e"])
let v10 = v4;
const v12 = [];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v15 = [13.37,13.37];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v17(v18,v19) {
    let v21 = 0;
    const v22 = ArrayBuffer + 1;
    // v22 = .primitive
    v21 = v22;
    const v23 = v15[v21];
    // v23 = .unknown
    let v26 = 0;
    const v27 = v19 & 65536;
    // v27 = .integer
    const v28 = v26 + 1;
    // v28 = .primitive
    v26 = v28;
    let v31 = 0;
    const v32 = v19 == v21;
    // v32 = .boolean
    const v33 = v31 + 1;
    // v33 = .primitive
    v31 = v33;
    this.valueOf = v21;
    const v36 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
    // v36 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "preventExtensions", "defineProperty", "apply", "getOwnPropertyDescriptor", "construct", "get", "getPrototypeOf", "isExtensible", "deleteProperty", "set"])
    const v38 = new ArrayBuffer(gc,v36);
    // v38 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    v38.toString = valueOf;
}
for (let v43 = 0; v43 < 100; v43++) {
    const v44 = v17();
    // v44 = .unknown
}
const v46 = [v12,-1882595336,-1882595336,-1882595336,-1882595336];
// v46 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v47(v48,v49,v50,v51) {
    'use strict'
    const v55 = Reflect.construct(WeakMap,Uint32Array,Uint32Array);
    // v55 = .unknown
    try {
        const v56 = v55 >= v46;
        // v56 = .boolean
    } catch(v57) {
    }
    return v51;
}
const v58 = {e:v47,set:v47,getPrototypeOf:v47,call:v47,preventExtensions:v47,isExtensible:v47,construct:v47,get:v47,a:v47,setPrototypeOf:v47,has:v47};
// v58 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "construct", "get", "setPrototypeOf", "has", "getPrototypeOf", "isExtensible", "call", "preventExtensions", "a", "e"])
const v60 = new Proxy(v46,v58);
// v60 = .unknown
v60[1] = "string";
}
%NeverOptimizeFunction(main);
main();
