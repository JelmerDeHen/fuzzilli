function main() {
const v2 = [Infinity,Infinity,Infinity];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = ["uscIQZBuMC"];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v6 = v5;
v5[129] = 129;
const v10 = {length:"number"};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v11 = {constructor:13.37,length:13.37,__proto__:v10,toString:Number,a:v2};
// v11 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor", "a"], withMethods: ["toString"])
const v12 = RegExp.apply(v11,v6);
// v12 = .unknown
}
%NeverOptimizeFunction(main);
main();
