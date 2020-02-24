function main() {
const v2 = [Infinity,Infinity,Infinity];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = [4138308284];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v6 = v5;
v5[129] = 129;
const v10 = {length:"number"};
// v10 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v11 = {constructor:13.37,length:13.37,__proto__:v10,toString:Number,a:v2};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "constructor", "length"], withMethods: ["toString"])
const v12 = RegExp.apply(v11,v6);
// v12 = .unknown
}
%NeverOptimizeFunction(main);
main();
