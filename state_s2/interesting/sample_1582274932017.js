function main() {
let v2 = 13.37;
let v3 = v2;
const v5 = -Infinity;
// v5 = .float
const v6 = [v5];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {constructor:-4294967295,length:1337,__proto__:v6};
// v8 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length"])
const v10 = v6.includes(v8,1);
// v10 = .boolean
const v11 = v8.toLocaleString(v10,v3);
// v11 = .unknown
const v12 = parseInt(v11);
// v12 = .integer
}
%NeverOptimizeFunction(main);
main();
