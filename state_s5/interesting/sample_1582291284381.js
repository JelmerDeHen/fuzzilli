function main() {
let v1 = 13.37;
let v2 = v1;
const v4 = -Infinity;
// v4 = .float
const v5 = [v4];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = {constructor:-4294967295,b:1337,__proto__:v5};
// v7 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "b"])
const v9 = v5.includes(v7,1);
// v9 = .boolean
const v10 = v7.toLocaleString(v9,v2);
// v10 = .unknown
let v12 = 13.37;
const v13 = v10.indexOf(v10,v7,v12,1);
// v13 = .unknown
}
%NeverOptimizeFunction(main);
main();
