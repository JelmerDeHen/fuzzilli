function main() {
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = {b:v5,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v6 = .object(ofGroup: Object, withProperties: ["e", "a", "b", "__proto__", "length", "valueOf"])
const v22 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v22 = .object(ofGroup: Object, withProperties: ["b", "e", "__proto__", "toString", "d"])
let v68 = 0;
const v69 = v68 + 1;
// v69 = .primitive
v68 = v69;
let v72 = 0;
const v73 = v72 + 1;
// v73 = .primitive
v72 = v73;
let v81 = 0;
const v82 = v81 + 1;
// v82 = .primitive
v81 = v82;
let v98 = 0;
v22.__proto__ = Object;
delete (4294967297)[v6];
}
%NeverOptimizeFunction(main);
main();
