function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
const v11 = [];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v12 = {valueOf:v11,length:13.37,d:127,e:127};
// v12 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "valueOf", "length", "d"])
const v13 = {c:v11,valueOf:v12,d:Array,a:1337};
// v13 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "valueOf", "a"], withMethods: ["d"])
const v15 = v1 != v13;
// v15 = .boolean
let v18 = 0;
const v19 = v18 + 1;
// v19 = .primitive
v18 = v19;
const v20 = {has:Array};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has"])
const v22 = new Proxy(v13,v20);
// v22 = .unknown
let v28 = 0;
const v29 = v28 + 1;
// v29 = .primitive
v28 = v29;
let v33 = 0;
let v36 = 0;
const v37 = v36 + 1;
// v37 = .primitive
v36 = v37;
const v38 = v22 instanceof Object;
// v38 = .boolean
}
%NeverOptimizeFunction(main);
main();
