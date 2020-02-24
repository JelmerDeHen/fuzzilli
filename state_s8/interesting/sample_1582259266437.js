function main() {
const v1 = [371375.4036167406,371375.4036167406,371375.4036167406];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = v4[1024];
// v5 = .unknown
const v6 = {has:Boolean,construct:v5,defineProperty:v5,deleteProperty:Boolean,setPrototypeOf:Boolean,preventExtensions:v5,isExtensible:v5,call:v5,set:Boolean,getOwnPropertyDescriptor:Boolean};
// v6 = .object(ofGroup: Object, withProperties: ["construct", "defineProperty", "preventExtensions", "isExtensible", "__proto__", "call"], withMethods: ["has", "getOwnPropertyDescriptor", "deleteProperty", "set", "setPrototypeOf"])
const v8 = new Proxy(v4,v6);
// v8 = .unknown
for (const v10 in "object") {
    v1.__proto__ = v8;
}
}
%NeverOptimizeFunction(main);
main();
