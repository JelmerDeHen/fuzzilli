function main() {
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [13.37,"boolean","boolean",13.37];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = {e:2676202182,valueOf:v5,b:2676202182,a:Float32Array};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "e", "b", "valueOf"])
let v8 = v7;
const v11 = [1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
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
