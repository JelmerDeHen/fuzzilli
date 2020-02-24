function main() {
let v5 = 0;
const v6 = 0 + 1;
// v6 = .primitive
v5 = v6;
const v11 = {b:1337,e:Uint16Array,a:4.0,length:"iterator",valueOf:4294967297};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "length", "a", "b", "e"])
let v12 = 4294967297;
v11[-65537] = v12;
const v16 = [13.37,13.37,13.37,13.37,13.37];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v18 = [1337];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v19 = [1337,v18,Uint16Array];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v20 = {b:v18,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "a", "b", "valueOf", "length"])
const v21 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v21 = .object(ofGroup: Object, withProperties: ["toString", "b", "d", "__proto__", "e"])
let v22 = v16;
const v24 = [13.37,13.37,13.37,13.37,13.37];
// v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v27 = 0;
const v28 = v24[2399114723];
// v28 = .unknown
const v29 = v27 + 1;
// v29 = .primitive
}
%NeverOptimizeFunction(main);
main();
