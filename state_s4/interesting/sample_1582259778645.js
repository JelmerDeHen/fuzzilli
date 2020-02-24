function main() {
const v3 = [13.37,7];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = {valueOf:v3,b:Float64Array,__proto__:13.37};
// v4 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "valueOf"])
const v6 = [371375.4036167406,371375.4036167406,371375.4036167406];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v9 = [13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v10 = v9[1024];
// v10 = .unknown
const v11 = {has:gc,construct:v10,defineProperty:v10,deleteProperty:gc,setPrototypeOf:gc,preventExtensions:v10,isExtensible:v10,call:v10,set:gc,getOwnPropertyDescriptor:gc};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "construct", "preventExtensions", "isExtensible", "call", "defineProperty"], withMethods: ["setPrototypeOf", "set", "deleteProperty", "getOwnPropertyDescriptor", "has"])
const v13 = new Proxy(v9,v11);
// v13 = .unknown
for (const v15 in "object") {
    v6.__proto__ = v13;
    for (const v17 in "boolean") {
    }
}
for (const v18 in v4) {
    const v19 = v6.constructor;
    // v19 = .object(ofGroup: Function, withProperties: ["caller", "constructor", "arguments", "__proto__", "prototype", "length", "name"], withMethods: ["apply", "call", "bind"]) + .function([.integer] => .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])) + .constructor([.integer] => .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"]))
}
}
%NeverOptimizeFunction(main);
main();
