function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v3 = 13.37;
let v4 = v3;
const v6 = -Infinity;
// v6 = .float
const v7 = [v6];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v9 = {constructor:-4294967295,b:1337,__proto__:v7};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "b"])
const v11 = v7.includes(v9,1);
// v11 = .boolean
const v12 = v9.toLocaleString(v11,v4);
// v12 = .unknown
let v14 = v7;
const v15 = v1.indexOf(v12,v9,v14,1);
// v15 = .integer
}
%NeverOptimizeFunction(main);
main();
