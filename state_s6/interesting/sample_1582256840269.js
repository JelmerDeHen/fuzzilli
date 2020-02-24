function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
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
// v32 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v33 = {b:v32,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v33 = .object(ofGroup: Object, withProperties: ["e", "b", "a", "valueOf", "length", "__proto__"])
const v37 = "object".constructor;
// v37 = .function()
for (const v38 in "object") {
    const v39 = {deleteProperty:gc,has:v37,toString:gc,construct:v37,setPrototypeOf:gc,getOwnPropertyDescriptor:gc,preventExtensions:gc,apply:gc,getPrototypeOf:v37,isExtensible:gc};
    // v39 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "apply", "isExtensible", "deleteProperty", "setPrototypeOf", "getOwnPropertyDescriptor", "preventExtensions", "has", "toString", "getPrototypeOf"])
    const v41 = new Proxy(v33,v39);
    // v41 = .unknown
    const v42 = {preventExtensions:gc,apply:gc,construct:v41,isExtensible:v41,deleteProperty:v41,call:gc};
    // v42 = .object(ofGroup: Object, withProperties: ["isExtensible", "deleteProperty", "__proto__", "construct"], withMethods: ["apply", "preventExtensions", "call"])
    v41[v42] = Uint16Array;
}
v11 = v19;
}
%NeverOptimizeFunction(main);
main();
