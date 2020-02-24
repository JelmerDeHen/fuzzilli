function main() {
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v5 = v4;
let v7 = undefined;
let v11 = 0;
let v14 = 0;
const v15 = v14 + 1;
// v15 = .primitive
v14 = v15;
const v16 = v11 + 1;
// v16 = .primitive
v11 = v16;
const v19 = [13.37,13.37,13.37,13.37];
// v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v21 = [1337,1337];
// v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v22 = [v21];
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v23 = {valueOf:Int32Array,c:v21,__proto__:v22,b:v19};
// v23 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "b", "valueOf"])
const v25 = new Map(v23);
// v25 = .object(ofGroup: Map, withProperties: ["__proto__", "size"], withMethods: ["set", "get", "keys", "entries", "forEach", "clear", "values", "delete", "has"])
let v36 = 0;
const v40 = gc();
// v40 = .undefined
const v41 = gc();
// v41 = .undefined
const v42 = v25.clear();
// v42 = .undefined
}
%NeverOptimizeFunction(main);
main();
