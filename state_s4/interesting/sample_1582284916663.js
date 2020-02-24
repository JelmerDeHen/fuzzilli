function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = [-65536];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = v4.__proto__;
// v6 = .object()
const v7 = v6.push(isNaN,v4,"DN3Tir8e6Y",v5);
// v7 = .unknown
let v10 = 13.37;
let v11 = v10;
const v13 = -Infinity;
// v13 = .float
const v14 = [v13];
// v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v16 = {constructor:-4294967295,length:1337,__proto__:v14};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor"])
const v18 = v14.includes(v16,1);
// v18 = .boolean
const v19 = v16.toLocaleString(v18,v11);
// v19 = .unknown
let v21 = 1;
let v22 = v21;
const v23 = v19.indexOf(-65536,v16,v22,1);
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
