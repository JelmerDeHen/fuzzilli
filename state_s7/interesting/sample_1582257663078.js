function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [v6,v6,v6];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {d:"undefined",e:v4,__proto__:v6,c:v6,toString:v7};
// v8 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "toString", "e", "c"])
const v9 = {b:13.37,d:1607264097,e:1607264097,constructor:v6,valueOf:WeakSet};
// v9 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "b", "d", "__proto__", "constructor"])
let v10 = v8;
const v12 = [13.37,13.37,13.37];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
v12.__proto__ = v10;
let v21 = 0;
const v22 = v21 + 1;
// v22 = .primitive
v21 = v22;
const v25 = {length:"N0Xx92zvHQ"};
// v25 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v32 = (13.37)[v25];
// v32 = .unknown
let v38 = 0;
const v39 = v38 + 1;
// v39 = .primitive
v38 = v39;
let v43 = 0;
const v44 = v43 + 1;
// v44 = .primitive
v43 = v44;
let v47 = 0;
const v48 = v47 + 1;
// v48 = .primitive
v47 = v48;
let v51 = 0;
const v52 = v51 + 1;
// v52 = .primitive
v51 = v52;
v12[127] = 13.37;
}
%NeverOptimizeFunction(main);
main();
