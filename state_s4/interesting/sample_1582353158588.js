function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = [1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [v5,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = {e:1337,valueOf:v5,toString:"function",__proto__:v6,length:v3};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "valueOf", "e", "length"])
const v8 = {b:v7,e:v5,a:Set,constructor:1337};
// v8 = .object(ofGroup: Object, withProperties: ["e", "constructor", "a", "__proto__", "b"])
const v11 = new Uint32Array(v3);
// v11 = .object(ofGroup: Uint32Array, withProperties: ["byteOffset", "byteLength", "buffer", "constructor", "__proto__", "length"], withMethods: ["lastIndexOf", "slice", "keys", "map", "sort", "indexOf", "set", "join", "forEach", "reverse", "filter", "fill", "reduce", "every", "values", "copyWithin", "entries", "some", "subarray", "find", "findIndex", "includes", "reduceRight"])
v11.constructor = Uint8Array;
const v13 = v11.slice(v8,1337);
// v13 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "byteLength", "__proto__", "byteOffset", "length", "constructor"], withMethods: ["indexOf", "entries", "some", "fill", "filter", "reduceRight", "forEach", "keys", "copyWithin", "map", "every", "subarray", "reduce", "join", "values", "lastIndexOf", "sort", "set", "slice", "find", "findIndex", "reverse", "includes"])
}
%NeverOptimizeFunction(main);
main();
