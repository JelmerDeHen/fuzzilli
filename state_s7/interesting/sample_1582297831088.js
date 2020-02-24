function main() {
const v1 = [Infinity,Infinity,Infinity];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = [RegExp];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v5 = v4;
v4[129] = 129;
const v9 = {length:"number"};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v10 = {constructor:13.37,length:13.37,__proto__:v9,toString:Number,a:v1};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor", "a"], withMethods: ["toString"])
const v11 = RegExp.apply(v10,v5);
// v11 = .unknown
}
%NeverOptimizeFunction(main);
main();
