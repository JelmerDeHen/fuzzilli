function main() {
const v2 = [1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v3 = {b:1337,e:1337,toString:parseFloat,d:parseFloat};
// v3 = .object(ofGroup: Object, withProperties: ["e", "b", "__proto__"], withMethods: ["toString", "d"])
let v4 = v3;
v4.__proto__ = v2;
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
v7 = v8;
const v11 = [13.37,13.37,13.37,13.37,13.37];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v13 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v13 = .object(ofGroup: Object, withProperties: ["d", "e", "b", "__proto__", "toString"])
let v14 = v11;
v13[v14] = 13.37;
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v22 = {b:v21,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v22 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "b", "a", "__proto__", "length"])
}
%NeverOptimizeFunction(main);
main();
