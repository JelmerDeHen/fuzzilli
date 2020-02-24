function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
// v32 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v33 = {b:v32,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v33 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "valueOf", "b", "a", "e"])
const v37 = "object".constructor;
// v37 = .function()
for (const v38 in "object") {
    const v39 = {deleteProperty:gc,has:v37,toString:gc,construct:v37,setPrototypeOf:gc,getOwnPropertyDescriptor:gc,preventExtensions:gc,apply:gc,getPrototypeOf:v37,isExtensible:gc};
    // v39 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["apply", "preventExtensions", "deleteProperty", "getPrototypeOf", "setPrototypeOf", "isExtensible", "toString", "getOwnPropertyDescriptor", "construct", "has"])
    const v41 = new Proxy(v33,v39);
    // v41 = .unknown
    const v42 = {preventExtensions:gc,apply:gc,construct:v41,isExtensible:v41,deleteProperty:v41,call:gc};
    // v42 = .object(ofGroup: Object, withProperties: ["__proto__", "construct", "deleteProperty", "isExtensible"], withMethods: ["apply", "call", "preventExtensions"])
    v41[v42] = Uint16Array;
}
v11 = v19;
}
%NeverOptimizeFunction(main);
main();
