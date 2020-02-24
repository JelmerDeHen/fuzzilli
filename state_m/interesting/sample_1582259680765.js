function main() {
let v1 = 13.37;
let v2 = v1;
const v5 = [13.37];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = {constructor:-4294967295,length:1337,__proto__:v5};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"])
const v9 = v5.includes(v7,1);
// v9 = .boolean
const v10 = v7.toLocaleString(v9,v2);
// v10 = .unknown
}
%NeverOptimizeFunction(main);
main();
