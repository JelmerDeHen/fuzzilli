function main() {
const v9 = [1337];
// v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v10 = {b:v9,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "e", "valueOf", "b", "a"])
const v16 = 1337 == 13.37;
// v16 = .boolean
let v19 = 0;
const v23 = [1337];
// v23 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v24 = {b:v23,e:Uint16Array,a:13.37,length:"iterator",valueOf:"iterator"};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "valueOf", "a", "length", "e"])
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
// v38 = .object(ofGroup: Object, withProperties: ["a", "valueOf", "e", "b", "__proto__", "length"])
}
%NeverOptimizeFunction(main);
main();
