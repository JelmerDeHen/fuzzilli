function main() {
let v3 = 0;
const v12 = [-22411.210504713817,-22411.210504713817];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v14 = [-162257780,-162257780,-162257780,-162257780,-162257780];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v15 = [v14];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v16 = {a:-4278040760,constructor:-22411.210504713817,__proto__:v15,d:"xJs.h31L*m",toString:v12,length:Set};
// v16 = .object(ofGroup: Object, withProperties: ["a", "d", "length", "constructor", "toString", "__proto__"])
const v17 = {constructor:v12};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
let v18 = v17;
function v19(v20,v21) {
    const v23 = {a:v21,preventExtensions:v21,defineProperty:v19,getPrototypeOf:v21,deleteProperty:v21,has:v19,set:v20,apply:v21};
    // v23 = .object(ofGroup: Object, withProperties: ["apply", "a", "__proto__", "set", "getPrototypeOf", "preventExtensions", "deleteProperty"], withMethods: ["has", "defineProperty"])
    const v25 = new Proxy(v19,v23);
    // v25 = .unknown
    const v26 = {__proto__:0,...Proxy,...v19,...v25};
    // v26 = .object(ofGroup: Object, withProperties: ["__proto__"])
    return v16;
}
const v27 = v19();
// v27 = .unknown
const v28 = v27[9007199254740991];
// v28 = .unknown
const v29 = v19();
// v29 = .unknown
let v32 = 0;
const v33 = v32 + 1;
// v33 = .primitive
v32 = v33;
let v36 = 0;
const v37 = v36 + 1;
// v37 = .primitive
v36 = v37;
const v38 = v19(v18);
// v38 = .unknown
let v41 = 0;
const v42 = v41 + 1;
// v42 = .primitive
v41 = v42;
function v43(v44,v45,v46) {
    let v49 = 0;
}
const v50 = {preventExtensions:v27,call:v38,construct:v27,has:v43,getPrototypeOf:v28,isExtensible:v19,ownKeys:v27,getOwnPropertyDescriptor:v28,get:v43,setPrototypeOf:v19,defineProperty:v27,deleteProperty:v38,set:v29};
// v50 = .object(ofGroup: Object, withProperties: ["construct", "deleteProperty", "preventExtensions", "getOwnPropertyDescriptor", "set", "defineProperty", "ownKeys", "call", "getPrototypeOf", "__proto__"], withMethods: ["has", "get", "setPrototypeOf", "isExtensible"])
const v52 = new Proxy(v17,v50);
// v52 = .unknown
const v53 = v19(v52,v43);
// v53 = .unknown
}
%NeverOptimizeFunction(main);
main();
