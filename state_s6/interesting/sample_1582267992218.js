function main() {
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
const v11 = [13.37,13.37];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v13 = [1337];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v14 = {constructor:v11,toString:isNaN,length:1337,__proto__:13.37,valueOf:-2900725722};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length", "valueOf"], withMethods: ["toString"])
let v15 = v13;
let v17 = undefined;
const v23 = [1337,1337,isNaN];
// v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v24 = {b:arguments,toString:v23,constructor:"l40B1zD/8d",d:13.37,e:"l40B1zD/8d"};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "d", "b", "e", "toString"])
arguments[661079439] = v14;
const v25 = {valueOf:-2662161544,toString:v24,e:v24,length:-2662161544,c:"l40B1zD/8d",__proto__:v24};
// v25 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "c", "toString", "length", "valueOf"])
const v27 = [13.37,13.37,13.37,13.37];
// v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v31 = [Int8Array];
// v31 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v33 = [1337,1337,v25];
// v33 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v34 = {toString:v31,b:1337,valueOf:v33};
// v34 = .object(ofGroup: Object, withProperties: ["toString", "valueOf", "__proto__", "b"])
const v35 = [v34,13.37,13.37,13.37];
// v35 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v36 = {length:v27,c:"boolean",constructor:"boolean",d:v35};
// v36 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "c", "constructor", "d"])
let v38 = v36;
let v40 = undefined;
v25[JSON] = 100;
const v44 = JSON.stringify(v38,v40);
// v44 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
}
%NeverOptimizeFunction(main);
main();
