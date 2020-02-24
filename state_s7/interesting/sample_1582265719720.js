function main() {
const v9 = [1337];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v10 = {b:v9,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v10 = .object(ofGroup: Object, withProperties: ["length", "e", "b", "valueOf", "__proto__", "a"])
const v16 = 1337 == 13.37;
// v16 = .boolean
let v19 = 0;
const v23 = [1337];
// v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v24 = {b:v23,e:Uint16Array,a:13.37,length:"iterator",valueOf:"iterator"};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "b", "valueOf", "e", "a"])
let v27 = 0;
const v28 = v27 + 1;
// v28 = .primitive
v27 = v28;
let v32 = 0;
const v33 = v32 + 1;
// v33 = .primitive
v32 = v33;
let v36 = 0;
const v37 = v36 + 1;
// v37 = .primitive
v36 = v37;
const v38 = {...v10,...0,...v36};
// v38 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "a", "e", "length", "b"])
}
%NeverOptimizeFunction(main);
main();
