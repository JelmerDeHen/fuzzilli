function main() {
const v2 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v2 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "toString", "d", "e"])
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
let v12 = 0;
const v13 = v12 + 1;
// v13 = .primitive
v12 = v13;
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
let v23 = 0;
const v24 = v23 + 1;
// v24 = .primitive
v23 = v24;
const v26 = [1337];
// v26 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v30 = 0;
let v35 = undefined;
try {
    const v38 = [13.37,13.37];
    // v38 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v39 = v38[1024];
    // v39 = .unknown
    const v40 = {has:gc,construct:v39,defineProperty:v39,deleteProperty:gc,setPrototypeOf:gc,preventExtensions:v39,isExtensible:v39,call:v39,set:gc,getOwnPropertyDescriptor:gc};
    // v40 = .object(ofGroup: Object, withProperties: ["__proto__", "defineProperty", "preventExtensions", "construct", "isExtensible", "call"], withMethods: ["has", "set", "setPrototypeOf", "getOwnPropertyDescriptor", "deleteProperty"])
    const v42 = new Proxy(v38,v40);
    // v42 = .unknown
    for (const v43 in v42) {
    }
} catch(v44) {
}
const v45 = v30 + 1;
// v45 = .primitive
v30 = v45;
}
%NeverOptimizeFunction(main);
main();
