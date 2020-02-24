function main() {
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = {valueOf:"e",length:1337,a:v3,b:v3,e:1337};
// v4 = .object(ofGroup: Object, withProperties: ["length", "b", "valueOf", "e", "a", "__proto__"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v7 = v6;
let v9 = undefined;
const v14 = [3156875969,3156875969,1337,DataView];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v15 = {constructor:v14,c:v14,e:13.37,d:1337,a:3156875969,__proto__:v7};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "a", "d", "constructor", "c"])
let v24 = 0;
for (const v25 in v15) {
}
const v26 = v24 + 1;
// v26 = .primitive
v24 = v26;
let v27 = 0;
let v30 = 0;
let v33 = 0;
const v34 = v33 + 1;
// v34 = .primitive
v33 = v34;
const v45 = v30 + 1;
// v45 = .primitive
v30 = v45;
v27 = v4;
}
%NeverOptimizeFunction(main);
main();
