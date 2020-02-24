function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [-4096];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {toString:1337,__proto__:v4,length:-4096,a:isNaN,b:1337,e:v4,d:"boolean"};
// v8 = .object(ofGroup: Object, withProperties: ["length", "d", "__proto__", "b", "toString", "e"], withMethods: ["a"])
const v10 = {get:isNaN};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
v4[-4294967297] = v4;
const v12 = Object.defineProperty(v7,"b",v10);
// v12 = .undefined
const v15 = [Infinity,Infinity,Infinity];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v17 = [4138308284];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v18 = v17;
v17[129] = "b";
const v22 = {length:"number"};
// v22 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v23 = {constructor:13.37,length:13.37,__proto__:v22,toString:Number,a:v15};
// v23 = .object(ofGroup: Object, withProperties: ["a", "length", "__proto__", "constructor"], withMethods: ["toString"])
const v24 = Boolean.apply(v23,v18);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
