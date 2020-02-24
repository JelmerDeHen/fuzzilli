function main() {
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = {__proto__:RegExp,length:v4,b:"Lg4kb1eIOi",c:1337,valueOf:2552665081};
// v5 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "valueOf", "length", "b"], withMethods: ["__proto__"])
const v8 = [1337];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v9 = v8;
let v11 = undefined;
let v16 = 0;
v5.__proto__ = undefined;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
const v19 = Object();
// v19 = .object()
let v21 = 0;
const v22 = v21 + 1;
// v22 = .primitive
v21 = v22;
let v25 = 0;
const v26 = v25 + 1;
// v26 = .primitive
v25 = v26;
let v27 = RegExp;
let v28 = v27;
const v31 = new Proxy(v28,Object);
// v31 = .unknown
const v32 = Object.freeze(v31);
// v32 = .undefined
}
%NeverOptimizeFunction(main);
main();
