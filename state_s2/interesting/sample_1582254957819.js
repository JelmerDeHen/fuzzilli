function main() {
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
const v38 = [];
// v38 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v39 = {valueOf:v38,length:13.37,d:127,e:127};
// v39 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "d", "e", "__proto__"])
const v40 = {c:v38,valueOf:v39,d:this,a:1337};
// v40 = .object(ofGroup: Object, withProperties: ["a", "d", "c", "valueOf", "__proto__"])
}
%NeverOptimizeFunction(main);
main();
