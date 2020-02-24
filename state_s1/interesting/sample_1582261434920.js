function main() {
const v2 = RegExp.bind(RegExp);
// v2 = .unknown
const v3 = v2();
// v3 = .unknown
const v4 = v3.__proto__;
// v4 = .unknown
let v7 = 0;
let v10 = 0;
let v13 = 0;
let v16 = 0;
const v19 = [13.37,13.37,13.37];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v21 = [1337,1337];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v22 = [v21,v21,v21];
// v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v23 = {d:"undefined",e:v19,__proto__:v21,c:v21,toString:v22};
// v23 = .object(ofGroup: Object, withProperties: ["toString", "c", "__proto__", "e", "d"])
const v27 = [3156875969,3156875969,1337,DataView];
// v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v33 = 0;
const v37 = v27[3];
// v37 = .unknown
let v43 = 0;
let v46 = 0;
let v50 = 0;
let v51 = v23;
const v61 = parseInt(v4);
// v61 = .integer
}
%NeverOptimizeFunction(main);
main();
