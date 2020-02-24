function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = [13.37,-828296917];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = v7 * v6;
// v8 = .number
const v9 = new Boolean(13.37);
// v9 = .boolean
const v10 = v7 >> 13.37;
// v10 = .integer
const v11 = v6[v8];
// v11 = .unknown
const v12 = {toString:"species",valueOf:v4,__proto__:"species"};
// v12 = .object(ofGroup: Object, withProperties: ["valueOf", "toString", "__proto__"])
const v13 = {toString:v6,e:-828296917,valueOf:1337,constructor:Boolean,length:13.37,c:v6};
// v13 = .object(ofGroup: Object, withProperties: ["c", "toString", "__proto__", "valueOf", "length", "e"], withMethods: ["constructor"])
let v14 = v12;
const v16 = [13.37,13.37];
// v16 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v17 = v16[1024];
// v17 = .unknown
let v20 = 0;
const v21 = v20 + 1;
// v21 = .primitive
v20 = v21;
const v23 = Symbol(v17);
// v23 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
}
%NeverOptimizeFunction(main);
main();
