function main() {
let v2 = 13.37;
let v3 = v2;
const v5 = -Infinity;
// v5 = .float
const v6 = [v5];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {constructor:-4294967295,length:1337,__proto__:v6};
// v8 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"])
const v10 = v6.includes(v8,1);
// v10 = .boolean
const v11 = v8.toLocaleString(v10,v3);
// v11 = .unknown
let v14 = 0;
let v15 = v14;
const v16 = v11.indexOf(-2708642645,v8,v15,1);
// v16 = .unknown
}
%NeverOptimizeFunction(main);
main();
