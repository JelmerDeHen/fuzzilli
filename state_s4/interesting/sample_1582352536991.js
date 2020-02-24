function main() {
const v3 = [1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = [-3583831853];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = {length:v4,e:DataView,valueOf:v3};
// v5 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "__proto__", "e"])
let v7 = undefined;
const v11 = new Float32Array(1337);
// v11 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "length", "constructor", "buffer", "__proto__"], withMethods: ["slice", "entries", "some", "set", "indexOf", "join", "includes", "map", "lastIndexOf", "keys", "forEach", "reduce", "fill", "findIndex", "reduceRight", "find", "subarray", "copyWithin", "reverse", "sort", "filter", "every", "values"])
v11.constructor = Uint8Array;
const v14 = v11.slice(-1024,234126503);
// v14 = .object(ofGroup: Float32Array, withProperties: ["length", "byteOffset", "constructor", "byteLength", "buffer", "__proto__"], withMethods: ["subarray", "slice", "findIndex", "reverse", "sort", "includes", "some", "values", "indexOf", "every", "fill", "map", "set", "copyWithin", "keys", "forEach", "reduce", "entries", "reduceRight", "lastIndexOf", "find", "join", "filter"])
}
%NeverOptimizeFunction(main);
main();
