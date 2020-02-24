function main() {
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = [13.37,"boolean","boolean",13.37];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = {e:2676202182,valueOf:v5,b:2676202182,a:Float32Array};
// v7 = .object(ofGroup: Object, withProperties: ["a", "valueOf", "b", "e", "__proto__"])
let v8 = v7;
const v11 = [1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v12 = {};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v14 = new Proxy(v11,v12);
// v14 = .unknown
const v16 = Number(13.37);
// v16 = .number
let v19 = 0;
const v20 = v14.indexOf(v6,v8,v7,v16,v19);
// v20 = .unknown
const v21 = v19 + 1;
// v21 = .primitive
v19 = v21;
}
%NeverOptimizeFunction(main);
main();
