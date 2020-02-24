function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v8 = [13.37,13.37,13.37];
// v8 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v9 = [];
// v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v10 = {__proto__:"eeeRbEqfAO",constructor:65537,length:v9};
// v10 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"])
const v11 = RegExp.apply(v8,v10);
// v11 = .unknown
let v17 = 0;
const v18 = v17 + 1;
// v18 = .primitive
v17 = v18;
const v19 = {constructor:13.37,length:13.37,__proto__:13.37,toString:Number,a:"constructor"};
// v19 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor", "a"], withMethods: ["toString"])
const v20 = 13.37 != v10;
// v20 = .boolean
}
%NeverOptimizeFunction(main);
main();
