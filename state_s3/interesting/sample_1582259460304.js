function main() {
const v5 = [1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [13.37,13.37,-4294967297,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = {length:v6,constructor:Int8Array};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor"])
const v8 = {toString:Int8Array,e:"boolean",constructor:v5,valueOf:v7,b:v6};
// v8 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "constructor", "toString", "__proto__", "b"])
const v14 = [3156875969,3156875969,1337,DataView];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v15 = {constructor:v14,c:v14,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
// v15 = .object(ofGroup: Object, withProperties: ["c", "e", "a", "constructor", "__proto__", "d"])
const v16 = v15.__proto__;
// v16 = .object()
let v19 = 0;
try {
    v16.__proto__ = v8;
} catch(v20) {
}
const v21 = v19 + 1;
// v21 = .primitive
v19 = v21;
let v28 = 0;
let v31 = 0;
let v34 = 0;
const v35 = v34 + 1;
// v35 = .primitive
v34 = v35;
let v41 = 0;
let v48 = 0;
let v51 = 0;
const v52 = v31 + 1;
// v52 = .primitive
v31 = v52;
const v53 = v28 + 1;
// v53 = .primitive
v28 = v53;
let v57 = 0;
const v58 = v57 + 1;
// v58 = .primitive
v57 = v58;
}
%NeverOptimizeFunction(main);
main();