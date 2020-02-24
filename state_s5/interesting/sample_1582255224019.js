function main() {
const v2 = 1337 == 13.37;
// v2 = .boolean
let v5 = 0;
const v13 = [1337];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v14 = {b:v13,e:Uint16Array,a:13.37,length:"iterator",valueOf:-2};
// v14 = .object(ofGroup: Object, withProperties: ["a", "e", "__proto__", "b", "length", "valueOf"])
const v15 = v13.concat(v14,"iterator",Uint16Array,-2);
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v16 = -2 in v15;
// v16 = .boolean
let v22 = 0;
const v23 = v22 + 1;
// v23 = .primitive
v22 = v23;
}
%NeverOptimizeFunction(main);
main();
