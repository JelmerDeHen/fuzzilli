function main() {
let v2 = this;
const v4 = -Infinity;
// v4 = .float
const v5 = [v4];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = {constructor:-4294967295,length:1337,__proto__:v5};
// v7 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__"])
const v9 = v5.includes(v7,1);
// v9 = .boolean
const v10 = v7.toLocaleString(v9,v2);
// v10 = .unknown
}
%NeverOptimizeFunction(main);
main();
