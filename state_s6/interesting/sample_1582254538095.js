function main() {
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v8 = .object(ofGroup: Object, withProperties: ["e", "b", "d", "__proto__", "toString"])
let v12 = 0;
const v13 = v12 + 1;
// v13 = .primitive
v12 = v13;
const v17 = [13.37,13.37,13.37,13.37,13.37];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v19 = [1337];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v20 = {b:v19,e:Uint16Array,a:13.37,length:"iterator",valueOf:2838380608};
// v20 = .object(ofGroup: Object, withProperties: ["b", "length", "e", "a", "__proto__", "valueOf"])
let v21 = v17;
v20[-65537] = v21;
const v22 = {b:v5,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v22 = .object(ofGroup: Object, withProperties: ["a", "length", "__proto__", "e", "valueOf", "b"])
v22.__proto__ = v8;
}
%NeverOptimizeFunction(main);
main();
