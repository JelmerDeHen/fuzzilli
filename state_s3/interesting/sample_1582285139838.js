function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [1337,13.37,1337,Uint8Array];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {toString:1337,b:Uint8Array};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "toString"])
const v9 = {constructor:v7,length:v4,__proto__:v8,d:13.37,b:v6,e:v8};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "e", "length", "d", "b"])
let v10 = v7;
const v13 = [v7];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v14 = v13;
let v16 = undefined;
const v21 = ~v7;
// v21 = .boolean
let v23 = 0;
const v32 = [13.37,13.37,13.37,13.37];
// v32 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v33 = {toString:v32,valueOf:2147483648,constructor:"NEGATIVE_INFINITY",length:RegExp,__proto__:RegExp,b:v23,d:13.37,a:2147483648,c:13.37};
// v33 = .object(ofGroup: Object, withProperties: ["toString", "valueOf", "c", "constructor", "__proto__", "a", "d", "b"], withMethods: ["length", "__proto__"])
const v37 = RegExp(Int8Array);
// v37 = .object()
const v38 = Function(v37);
// v38 = .unknown
let v40 = 0;
let v42 = -1155643050;
const v43 = v42 % -1155643050;
// v43 = .number
const v44 = v43 + 1;
// v44 = .primitive
v10 = v44;
const v45 = v40 + 1;
// v45 = .primitive
const v46 = v38(Int8Array);
// v46 = .unknown
}
%NeverOptimizeFunction(main);
main();
