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
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v21 = [1337,1337];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v22 = [v21,v21,v21];
// v22 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v23 = {d:"undefined",e:v19,__proto__:v21,c:v21,toString:v22};
// v23 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "e", "c", "toString"])
const v27 = [3156875969,3156875969,1337,DataView];
// v27 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
