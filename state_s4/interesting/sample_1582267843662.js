function main() {
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v8 = 0;
let v11 = 0;
const v12 = v8 + 1;
// v12 = .primitive
v8 = v12;
const v13 = {toString:13.37,c:1337,e:4294967297,valueOf:13.37,__proto__:Function,a:v5};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "a", "c", "toString", "valueOf"])
const v14 = Function("__proto__");
// v14 = .unknown
let v17 = 0;
const v18 = v14.name;
// v18 = .unknown
const v19 = v17 + 1;
// v19 = .primitive
v17 = v19;
}
%NeverOptimizeFunction(main);
main();
