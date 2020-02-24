function main() {
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = {b:v5,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v6 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "__proto__", "b", "e", "a"])
const v7 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v7 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "toString", "b", "d"])
const v8 = typeof v6;
// v8 = .string
const v10 = v8 === "number";
// v10 = .boolean
const v11 = {preventExtensions:"iterator"};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "preventExtensions"])
const v13 = new Proxy(v7,v11);
// v13 = .unknown
v13.__proto__ = v5;
}
%NeverOptimizeFunction(main);
main();
