function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v10 = [13.37,13.37,13.37];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v12 = [3156875969,3156875969,1337,DataView];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v13 = {constructor:v12,c:v12,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "constructor", "d", "e", "c"])
const v14 = {e:DataView,constructor:1337,valueOf:1337,d:v12};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "e", "d", "constructor"])
v14.__proto__ = v13;
v4.__proto__ = v10;
for (let v27 = 0; v27 < 10; v27++) {
    const v28 = v27 + v13;
    // v28 = .primitive
}
let v37 = 0;
let v40 = 0;
const v43 = 0 + 1;
// v43 = .primitive
let v55 = 0;
const v56 = v55 + 1;
// v56 = .primitive
v55 = v56;
let v59 = 0;
const v63 = v40 + 1;
// v63 = .primitive
v40 = v63;
const v64 = v37 + 1;
// v64 = .primitive
v37 = v64;
}
%NeverOptimizeFunction(main);
main();
