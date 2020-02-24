function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "b", "d", "e"])
let v5 = v2;
let v12 = 0;
v5.__proto__ = v4;
}
%NeverOptimizeFunction(main);
main();
