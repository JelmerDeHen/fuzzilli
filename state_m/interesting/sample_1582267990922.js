function main() {
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
const v11 = [13.37,13.37];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v13 = [1337];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v14 = {constructor:v11,toString:isNaN,length:1337,__proto__:13.37,valueOf:-2900725722};
// v14 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "length", "constructor"], withMethods: ["toString"])
let v15 = v13;
let v17 = undefined;
const v23 = [1337,1337,isNaN];
// v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v24 = {b:arguments,toString:v23,constructor:"l40B1zD/8d",d:13.37,e:"l40B1zD/8d"};
// v24 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "d", "toString", "constructor", "e"])
arguments[661079439] = v14;
const v25 = {valueOf:-2662161544,toString:v24,e:v24,length:-2662161544,c:"l40B1zD/8d",__proto__:v24};
// v25 = .object(ofGroup: Object, withProperties: ["toString", "length", "c", "__proto__", "e", "valueOf"])
const v27 = [13.37,13.37,13.37,13.37];
// v27 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v31 = [Int8Array];
// v31 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v33 = [1337,1337,v25];
// v33 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v34 = {toString:v31,b:1337,valueOf:v33};
// v34 = .object(ofGroup: Object, withProperties: ["toString", "valueOf", "b", "__proto__"])
const v35 = [v34,13.37,13.37,13.37];
// v35 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v36 = {length:v27,c:"boolean",constructor:"boolean",d:v35};
// v36 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "c", "length", "constructor"])
let v38 = v36;
let v40 = undefined;
v25[JSON] = 100;
const v44 = JSON.stringify(v38,v40);
// v44 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
