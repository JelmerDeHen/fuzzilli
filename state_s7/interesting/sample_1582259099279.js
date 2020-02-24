function main() {
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [13.37,"boolean","boolean",13.37];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = {e:2676202182,valueOf:v5,b:2676202182,a:Float32Array};
// v7 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "b", "e", "valueOf"])
let v8 = v7;
const v11 = [1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
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
