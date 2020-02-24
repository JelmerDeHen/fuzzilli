function main() {
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = {b:v4,e:v4,a:13.37,length:"iterator",valueOf:4294967297};
// v5 = .object(ofGroup: Object, withProperties: ["b", "a", "valueOf", "__proto__", "length", "e"])
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
delete Uint16Array.length;
}
%NeverOptimizeFunction(main);
main();
