function main() {
const v1 = [Infinity,Infinity,Infinity];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v6 = v5;
v5[129] = 129;
const v10 = {length:"number"};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v11 = {constructor:13.37,length:13.37,__proto__:v10,toString:Number,a:v1};
// v11 = .object(ofGroup: Object, withProperties: ["a", "constructor", "length", "__proto__"], withMethods: ["toString"])
const v12 = RegExp.apply(v11,v6);
// v12 = .unknown
}
%NeverOptimizeFunction(main);
main();
