function main() {
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = {a:4294967295,c:v4,__proto__:13.37,e:4294967295,constructor:Set,toString:Set};
// v5 = .object(ofGroup: Object, withProperties: ["toString", "e", "constructor", "a", "c", "__proto__"])
const v7 = [1337];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v8 = v7;
let v10 = undefined;
const v12 = Object.preventExtensions(v5);
// v12 = .object()
v5.e = v10;
let v15 = 0;
const v16 = v15 + 1;
// v16 = .primitive
v15 = v16;
}
%NeverOptimizeFunction(main);
main();
