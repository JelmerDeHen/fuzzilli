function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
const v7 = [-1000000000.0,-1000000000.0,-1000000000.0,-1000000000.0,-1000000000.0];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = [v7,v7,v7];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v9 = {length:-1000000000.0,b:"symbol",valueOf:v7,__proto__:v8};
// v9 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "b", "__proto__"])
const v11 = v9.concat(2785741221);
// v11 = .unknown
let v14 = 0;
const v15 = v14 + 1;
// v15 = .primitive
v14 = v15;
for (const v16 in v11) {
}
}
%NeverOptimizeFunction(main);
main();
