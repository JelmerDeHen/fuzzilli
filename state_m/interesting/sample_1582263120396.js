function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v2 = [v1];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = [371375.4036167406,371375.4036167406,371375.4036167406];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = [13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = v7[1024];
// v8 = .unknown
const v9 = {has:gc,construct:v8,defineProperty:v8,deleteProperty:gc,setPrototypeOf:gc,preventExtensions:v8,isExtensible:v8,call:v8,set:gc,getOwnPropertyDescriptor:gc};
// v9 = .object(ofGroup: Object, withProperties: ["defineProperty", "__proto__", "construct", "isExtensible", "preventExtensions", "call"], withMethods: ["set", "has", "deleteProperty", "setPrototypeOf", "getOwnPropertyDescriptor"])
const v11 = new Proxy(v7,v9);
// v11 = .unknown
let v13 = 0;
for (const v15 in "object") {
    v4.__proto__ = v11;
    for (const v17 in "boolean") {
    }
}
v4[2559617823] = v13;
}
%NeverOptimizeFunction(main);
main();
