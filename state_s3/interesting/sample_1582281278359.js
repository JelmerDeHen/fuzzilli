function main() {
const v2 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v2 = .object(ofGroup: Object, withProperties: ["d", "b", "toString", "__proto__", "e"])
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
// v26 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v30 = 0;
let v35 = undefined;
try {
    const v38 = [13.37,13.37];
    // v38 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v39 = v38[1024];
    // v39 = .unknown
    const v40 = {has:gc,construct:v39,defineProperty:v39,deleteProperty:gc,setPrototypeOf:gc,preventExtensions:v39,isExtensible:v39,call:v39,set:gc,getOwnPropertyDescriptor:gc};
    // v40 = .object(ofGroup: Object, withProperties: ["construct", "defineProperty", "call", "preventExtensions", "__proto__", "isExtensible"], withMethods: ["deleteProperty", "set", "getOwnPropertyDescriptor", "setPrototypeOf", "has"])
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
