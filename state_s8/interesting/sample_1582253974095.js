function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [3156875969,3156875969,1337,DataView];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {constructor:v7,c:v7,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "constructor", "a", "c", "d"])
const v9 = {e:DataView,constructor:1337,valueOf:1337,d:v7};
// v9 = .object(ofGroup: Object, withProperties: ["d", "valueOf", "e", "__proto__", "constructor"])
let v10 = v6;
"boolean".toString = DataView;
const v14 = {call:1337,setPrototypeOf:13.37,apply:1337,has:1337,getOwnPropertyDescriptor:DataView,get:DataView,preventExtensions:13.37,set:1337,construct:v7,getPrototypeOf:"boolean",deleteProperty:1337};
// v14 = .object(ofGroup: Object, withProperties: ["call", "has", "getPrototypeOf", "getOwnPropertyDescriptor", "set", "get", "apply", "deleteProperty", "setPrototypeOf", "construct", "__proto__", "preventExtensions"])
const v16 = new Proxy(v10,v14);
// v16 = .unknown
const v17 = v8 << v4;
// v17 = .integer
const v18 = [3156875969,3156875969,1337,DataView];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v19 = {e:DataView,constructor:1337,valueOf:1337,d:v18};
// v19 = .object(ofGroup: Object, withProperties: ["d", "valueOf", "e", "__proto__", "constructor"])
const v24 = [1105823611,1105823611,1337,DataView];
// v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v25 = {e:DataView,a:1337,valueOf:1337,d:v24};
// v25 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "d", "valueOf", "e"])
}
%NeverOptimizeFunction(main);
main();
