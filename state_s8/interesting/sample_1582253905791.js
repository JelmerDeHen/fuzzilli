function main() {
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [3156875969,3156875969,1337,DataView];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = {constructor:v6,c:v6,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
// v7 = .object(ofGroup: Object, withProperties: ["e", "c", "a", "__proto__", "constructor", "d"])
let v8 = v5;
const v10 = Object();
// v10 = .object()
const v11 = new Object(13.37,3156875969);
// v11 = .object()
v10[65535] = v7;
const v12 = v8[v7];
// v12 = .unknown
const v13 = 3156875969 == v12;
// v13 = .boolean
}
%NeverOptimizeFunction(main);
main();
