function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = [v2];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = {e:v5,c:v5,d:v2,b:v4,constructor:v2};
// v6 = .object(ofGroup: Object, withProperties: ["e", "b", "constructor", "__proto__", "d", "c"])
function v8(v9,v10) {
}
const v12 = [13.37];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v18 = v4.__proto__;
// v18 = .object()
const v19 = {e:v6,__proto__:v12,construct:v12,length:v5};
// v19 = .object(ofGroup: Object, withProperties: ["length", "e", "__proto__", "construct"])
const v20 = {set:parseInt,getPrototypeOf:Object,get:parseInt,defineProperty:parseInt,ownKeys:v8,preventExtensions:v8};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "defineProperty", "ownKeys", "getPrototypeOf", "set", "preventExtensions"])
const v22 = new Proxy(v8,v20);
// v22 = .unknown
const v24 = new v22(v19,"valueOf",v18,Float64Array);
// v24 = .object()
}
%NeverOptimizeFunction(main);
main();
