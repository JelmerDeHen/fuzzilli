function main() {
const v2 = [13.37,RegExp];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v3 = {apply:RegExp};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["apply"])
const v5 = new Proxy(v2,v3);
// v5 = .unknown
const v10 = [1337];
// v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v11 = {length:v10,d:13.37,b:13.37,c:13.37,constructor:"uchqlZ8s2I",__proto__:13.37};
// v11 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "c", "constructor", "d", "length"])
const v13 = [v11];
// v13 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v14 = v13;
v13[7] = 0;
let v19 = 0;
const v20 = v19 <= 13.37;
// v20 = .boolean
const v22 = [1337];
// v22 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v23 = v22;
for (const v24 of v23) {
}
const v25 = v14.includes(1337,1337);
// v25 = .boolean
}
%NeverOptimizeFunction(main);
main();
