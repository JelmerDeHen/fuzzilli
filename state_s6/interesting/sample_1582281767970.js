function main() {
const v2 = [1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v3 = {valueOf:4294967295,a:v2,b:v2,toString:1337};
// v3 = .object(ofGroup: Object, withProperties: ["toString", "b", "a", "__proto__", "valueOf"])
const v8 = [13.37,13.37,13.37,13.37];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v10 = [v8,471091797,DataView];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v13 = new Float32Array(61010);
// v13 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "length", "constructor", "__proto__", "buffer", "byteLength"], withMethods: ["some", "find", "join", "keys", "forEach", "every", "reduceRight", "filter", "values", "entries", "sort", "copyWithin", "map", "subarray", "reverse", "fill", "reduce", "slice", "includes", "indexOf", "set", "findIndex", "lastIndexOf"])
const v14 = {a:1337,e:1337,d:1337,valueOf:v10,...v13,...471091797,...1337};
// v14 = .object(ofGroup: Object, withProperties: ["byteOffset", "a", "length", "e", "constructor", "valueOf", "buffer", "__proto__", "byteLength", "d"], withMethods: ["reverse", "map", "lastIndexOf", "join", "every", "set", "filter", "keys", "sort", "entries", "indexOf", "forEach", "some", "reduce", "values", "subarray", "reduceRight", "copyWithin", "fill", "slice", "includes", "findIndex", "find"])
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
