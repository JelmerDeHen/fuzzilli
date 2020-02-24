function main() {
const v3 = [13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = [1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = ["matchAll",v3];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = {e:v5,c:WeakSet,length:v3,toString:v6,__proto__:"matchAll",d:v6,a:v6};
// v7 = .object(ofGroup: Object, withProperties: ["a", "e", "c", "length", "__proto__", "d", "toString"])
const v8 = {e:v7,constructor:v5,c:13.37,valueOf:13.37,__proto__:v5,d:"matchAll",a:v7};
// v8 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "e", "valueOf", "d", "a", "constructor"])
const v11 = [1337];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v12 = v11;
let v14 = undefined;
let v21 = 0;
const v22 = v8.includes();
// v22 = .unknown
const v24 = v21 + 1;
// v24 = .primitive
v21 = v24;
let v31 = 0;
let v34 = 0;
const v40 = 1337 == 13.37;
// v40 = .boolean
const v42 = Object();
// v42 = .object()
}
%NeverOptimizeFunction(main);
main();
