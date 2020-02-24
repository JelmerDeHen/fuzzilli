function main() {
const v5 = 0 + 1;
// v5 = .primitive
const v12 = [3156875969,3156875969,1337,3156875969];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v13 = {constructor:v12,c:v12,e:4.0,d:1337,a:3156875969,__proto__:"boolean"};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "constructor", "a", "e", "d"])
v13.d = v5;
const v25 = v13[0];
// v25 = .unknown
v13.a = 1;
}
%NeverOptimizeFunction(main);
main();
