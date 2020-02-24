function main() {
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = {b:v5,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v6 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "length", "b", "valueOf", "a"])
const v8 = [1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v11 = {get:Object};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v13 = Object.defineProperty(v8,6,v11);
// v13 = .undefined
const v15 = v8.indexOf(v6,7);
// v15 = .integer
let v18 = 0;
const v19 = v18 + 1;
// v19 = .primitive
v18 = v19;
}
%NeverOptimizeFunction(main);
main();
