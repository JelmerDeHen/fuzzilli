function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v2 = [v1];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = [371375.4036167406,371375.4036167406,371375.4036167406];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = [13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = v7[1024];
// v8 = .unknown
const v9 = {has:gc,construct:v8,defineProperty:v8,deleteProperty:gc,setPrototypeOf:gc,preventExtensions:v8,isExtensible:v8,call:v8,set:gc,getOwnPropertyDescriptor:gc};
// v9 = .object(ofGroup: Object, withProperties: ["call", "construct", "defineProperty", "isExtensible", "__proto__", "preventExtensions"], withMethods: ["set", "has", "setPrototypeOf", "deleteProperty", "getOwnPropertyDescriptor"])
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
