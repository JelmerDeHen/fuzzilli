function main() {
const v3 = [13.37,7];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = {valueOf:v3,b:Float64Array,__proto__:13.37};
// v4 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "valueOf"])
const v6 = [371375.4036167406,371375.4036167406,371375.4036167406];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v9 = [13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v10 = v9[1024];
// v10 = .unknown
const v11 = {has:gc,construct:v10,defineProperty:v10,deleteProperty:gc,setPrototypeOf:gc,preventExtensions:v10,isExtensible:v10,call:v10,set:gc,getOwnPropertyDescriptor:gc};
// v11 = .object(ofGroup: Object, withProperties: ["preventExtensions", "call", "defineProperty", "isExtensible", "__proto__", "construct"], withMethods: ["has", "set", "getOwnPropertyDescriptor", "deleteProperty", "setPrototypeOf"])
const v13 = new Proxy(v9,v11);
// v13 = .unknown
for (const v15 in "object") {
    v6.__proto__ = v13;
    for (const v17 in "boolean") {
    }
}
for (const v18 in v4) {
    const v19 = v6.constructor;
    // v19 = .object(ofGroup: Function, withProperties: ["prototype", "__proto__", "constructor", "length", "arguments", "caller", "name"], withMethods: ["apply", "bind", "call"]) + .function([.integer] => .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])) + .constructor([.integer] => .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"]))
}
}
%NeverOptimizeFunction(main);
main();
