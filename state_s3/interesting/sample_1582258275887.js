function main() {
const v2 = [1337,Float64Array];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v3 = v2;
const v6 = [13.37];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = [1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v9 = {a:1337,toString:13.37,c:v6,__proto__:v8,valueOf:"a",constructor:v6};
// v9 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "toString", "a", "constructor", "c"])
let v10 = 1337;
let v18 = 0;
const v19 = Array(v10,13.37,-242242798,...v3,v9);
// v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v20 = v18 + 1;
// v20 = .primitive
v18 = v20;
let v23 = 0;
let v26 = 0;
const v27 = v26 + 1;
// v27 = .primitive
let v31 = 0;
let v34 = 0;
let v37 = 0;
v26 = v27;
let v41 = 0;
const v42 = v41 + 1;
// v42 = .primitive
v41 = v42;
}
%NeverOptimizeFunction(main);
main();
