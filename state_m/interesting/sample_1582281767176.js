function main() {
const v2 = [1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v3 = {valueOf:4294967295,a:v2,b:v2,toString:1337};
// v3 = .object(ofGroup: Object, withProperties: ["valueOf", "toString", "__proto__", "a", "b"])
const v8 = [13.37,13.37,13.37,13.37];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v10 = [v8,471091797,DataView];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v13 = new Float32Array(61010);
// v13 = .object(ofGroup: Float32Array, withProperties: ["constructor", "length", "byteLength", "buffer", "byteOffset", "__proto__"], withMethods: ["values", "copyWithin", "find", "some", "subarray", "findIndex", "reduce", "indexOf", "includes", "forEach", "every", "join", "sort", "reverse", "keys", "entries", "slice", "fill", "map", "lastIndexOf", "filter", "set", "reduceRight"])
const v14 = {a:1337,e:1337,d:1337,valueOf:v10,...v13,...471091797,...1337};
// v14 = .object(ofGroup: Object, withProperties: ["byteOffset", "byteLength", "d", "buffer", "a", "__proto__", "valueOf", "constructor", "e", "length"], withMethods: ["sort", "filter", "subarray", "find", "forEach", "reduce", "every", "lastIndexOf", "reverse", "fill", "values", "findIndex", "reduceRight", "copyWithin", "indexOf", "some", "keys", "join", "slice", "includes", "map", "set", "entries"])
v14[471091797] = v3;
let v23 = 0;
delete "undefined".constructor;
const v24 = v23 + 1;
// v24 = .primitive
v23 = v24;
const v29 = gc();
// v29 = .undefined
}
%NeverOptimizeFunction(main);
main();
