function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = [v2];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = {e:v5,c:v5,d:v2,b:v4,constructor:v2};
// v6 = .object(ofGroup: Object, withProperties: ["e", "constructor", "__proto__", "c", "d", "b"])
function v8(v9,v10) {
}
const v12 = [13.37];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v18 = v4.__proto__;
// v18 = .object()
const v19 = {e:v6,__proto__:v12,construct:v12,length:v5};
// v19 = .object(ofGroup: Object, withProperties: ["length", "construct", "e", "__proto__"])
const v20 = {set:parseInt,getPrototypeOf:Object,get:parseInt,defineProperty:parseInt,ownKeys:v8,preventExtensions:v8};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["defineProperty", "set", "ownKeys", "get", "preventExtensions", "getPrototypeOf"])
const v22 = new Proxy(v8,v20);
// v22 = .unknown
const v24 = new v22(v19,"valueOf",v18,Float64Array);
// v24 = .object()
}
%NeverOptimizeFunction(main);
main();
