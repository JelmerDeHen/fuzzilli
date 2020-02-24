function main() {
const v3 = [13.37,7];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = {valueOf:v3,b:Float64Array,__proto__:13.37};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "valueOf"])
const v6 = [371375.4036167406,371375.4036167406,371375.4036167406];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v9 = [13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v10 = v9[1024];
// v10 = .unknown
const v11 = {has:gc,construct:v10,defineProperty:v10,deleteProperty:gc,setPrototypeOf:gc,preventExtensions:v10,isExtensible:v10,call:v10,set:gc,getOwnPropertyDescriptor:gc};
// v11 = .object(ofGroup: Object, withProperties: ["defineProperty", "__proto__", "call", "construct", "preventExtensions", "isExtensible"], withMethods: ["set", "deleteProperty", "setPrototypeOf", "has", "getOwnPropertyDescriptor"])
const v13 = new Proxy(v9,v11);
// v13 = .unknown
for (const v15 in "object") {
    v6.__proto__ = v13;
    for (const v17 in "boolean") {
    }
}
for (const v18 in v4) {
    const v19 = v6.constructor;
    // v19 = .object(ofGroup: Function, withProperties: ["__proto__", "caller", "constructor", "name", "prototype", "arguments", "length"], withMethods: ["call", "bind", "apply"]) + .function([.integer] => .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])) + .constructor([.integer] => .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"]))
}
}
%NeverOptimizeFunction(main);
main();
