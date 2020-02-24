function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v2 = v1;
let v4 = undefined;
let v11 = 0;
let v14 = 0;
const v15 = v14 + 1;
// v15 = .primitive
v14 = v15;
const v19 = v11 + 1;
// v19 = .primitive
const v32 = [1337];
// v32 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v33 = {b:v32,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v33 = .object(ofGroup: Object, withProperties: ["valueOf", "b", "e", "length", "__proto__", "a"])
const v37 = "object".constructor;
// v37 = .function()
for (const v38 in "object") {
    const v39 = {deleteProperty:gc,has:v37,toString:gc,construct:v37,setPrototypeOf:gc,getOwnPropertyDescriptor:gc,preventExtensions:gc,apply:gc,getPrototypeOf:v37,isExtensible:gc};
    // v39 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "getOwnPropertyDescriptor", "preventExtensions", "isExtensible", "construct", "getPrototypeOf", "apply", "toString", "setPrototypeOf", "deleteProperty"])
    const v41 = new Proxy(v33,v39);
    // v41 = .unknown
    const v42 = {preventExtensions:gc,apply:gc,construct:v41,isExtensible:v41,deleteProperty:v41,call:gc};
    // v42 = .object(ofGroup: Object, withProperties: ["__proto__", "construct", "isExtensible", "deleteProperty"], withMethods: ["preventExtensions", "apply", "call"])
    v41[v42] = Uint16Array;
}
v11 = v19;
}
%NeverOptimizeFunction(main);
main();
