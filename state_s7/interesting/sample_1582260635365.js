function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = [1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = {toString:v3,b:"PI",valueOf:v5};
// v6 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "b", "toString"])
const v7 = {b:v6};
// v7 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
const v8 = v7.__proto__;
// v8 = .object()
let v9 = v6;
v8[984635998] = v9;
let v13 = 0;
let v16 = 0;
let v19 = 0;
const v24 = [1337];
// v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v25 = v24;
let v27 = undefined;
const v33 = ["iterator"];
// v33 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v34 = {b:v33,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v34 = .object(ofGroup: Object, withProperties: ["valueOf", "b", "a", "__proto__", "length", "e"])
const v36 = [13.37,13.37,13.37,13.37,13.37];
// v36 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v45 = 0;
const v46 = v45 + 1;
// v46 = .primitive
v45 = v46;
const v50 = 1337 == 13.37;
// v50 = .boolean
let v54 = 0;
const v55 = v54 + 1;
// v55 = .primitive
v54 = v55;
let v58 = 0;
const v59 = v58 + 1;
// v59 = .primitive
v58 = v59;
const v60 = v36.push(13.37,v34,"iterator");
// v60 = .integer
}
%NeverOptimizeFunction(main);
main();
