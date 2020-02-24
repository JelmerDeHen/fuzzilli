function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = ["matchAll",v4];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {e:v6,c:WeakSet,length:v4,toString:v7,__proto__:"matchAll",d:v7,a:v7};
// v8 = .object(ofGroup: Object, withProperties: ["d", "e", "c", "toString", "__proto__", "a", "length"])
const v9 = {e:v8,constructor:v6,c:13.37,valueOf:13.37,__proto__:v6,d:"matchAll",a:v8};
// v9 = .object(ofGroup: Object, withProperties: ["a", "constructor", "__proto__", "d", "c", "e", "valueOf"])
let v10 = v8;
const v15 = [13.37];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v19 = 0;
let v22 = v4;
const v23 = v22 + 1;
// v23 = .primitive
v22 = v23;
const v24 = [1337,1337,1337];
// v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v25 = {a:1337,toString:13.37,c:v15,__proto__:v24,valueOf:0,constructor:v15};
// v25 = .object(ofGroup: Object, withProperties: ["constructor", "valueOf", "a", "toString", "__proto__", "c"])
const v26 = {toString:v15,valueOf:1337,d:1337,constructor:-9007199254740992};
// v26 = .object(ofGroup: Object, withProperties: ["d", "valueOf", "toString", "__proto__", "constructor"])
const v27 = RegExp.apply(v26,RegExp);
// v27 = .unknown
let v30 = 0;
}
%NeverOptimizeFunction(main);
main();
