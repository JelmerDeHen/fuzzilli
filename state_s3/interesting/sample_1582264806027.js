function main() {
const v3 = [1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = {length:v3,d:13.37,b:13.37,c:13.37,constructor:"uchqlZ8s2I",__proto__:13.37};
// v4 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "constructor", "d", "c", "length"])
const v7 = [v4];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v8 = v7;
v7[7] = 0;
const v10 = v8.indexOf(-9007199254740991,-9007199254740991);
// v10 = .integer
}
%NeverOptimizeFunction(main);
main();
