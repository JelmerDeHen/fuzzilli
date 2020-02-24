function main() {
const v1 = "iterator".__proto__;
// v1 = .object()
const v8 = [v1];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v9 = {b:v8,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v9 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "length", "e", "a", "__proto__"])
const v11 = [13.37,13.37,13.37,13.37,13.37];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v12 = {};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v15 = 0;
const v17 = v15 + 1;
// v17 = .primitive
v15 = v17;
const v18 = v12.__proto__;
// v18 = .object()
v18[2579677415] = v18;
const v20 = v11.push(13.37,v9,"iterator");
// v20 = .integer
let v27 = 0;
let v30 = 0;
let v43 = 0;
let v46 = 0;
}
%NeverOptimizeFunction(main);
main();
