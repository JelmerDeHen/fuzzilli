function main() {
const v1 = [];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v3 = [13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = {c:v1};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v5 = v3[1024];
// v5 = .unknown
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
const v10 = {__proto__:3,constructor:v8,d:v4,valueOf:v5,length:13.37};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "valueOf", "length", "constructor"])
const v12 = {get:Array};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v14 = Object.defineProperty(v10,-3917315686,v12);
// v14 = .undefined
}
%NeverOptimizeFunction(main);
main();
