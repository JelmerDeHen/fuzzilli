function main() {
const v8 = [13.37,13.37,13.37];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v10 = [1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v11 = [v10,v10,v10];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v12 = {d:"undefined",e:v8,__proto__:v10,c:v10,toString:v11};
// v12 = .object(ofGroup: Object, withProperties: ["toString", "d", "__proto__", "e", "c"])
const v13 = {b:13.37,d:1607264097,e:1607264097,constructor:v10,valueOf:WeakSet};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "valueOf", "e", "constructor", "d"])
const v15 = [1337];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v19 = [13.37,13.37];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v23 = {length:"N0Xx92zvHQ"};
// v23 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v24 = {constructor:13.37,length:13.37,__proto__:v23,toString:Number,a:"N0Xx92zvHQ"};
// v24 = .object(ofGroup: Object, withProperties: ["length", "a", "__proto__", "constructor"], withMethods: ["toString"])
let v25 = v24;
let v28 = 1337;
let v31 = 0;
const v32 = v31 + 1;
// v32 = .primitive
v31 = v32;
const v34 = [1337,"N0Xx92zvHQ"];
// v34 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v36 = 1337;
let v39 = 0;
const v40 = v39 + 1;
// v40 = .primitive
v39 = v40;
const v42 = Symbol.isConcatSpreadable;
// v42 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
v25[v42] = v34;
const v43 = v19[1024];
// v43 = .unknown
let v46 = 0;
const v47 = v46 + 1;
// v47 = .primitive
v46 = v47;
}
%NeverOptimizeFunction(main);
main();
