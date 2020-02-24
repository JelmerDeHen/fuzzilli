function main() {
const v2 = {b:1337,constructor:RegExp,valueOf:1337,__proto__:1337,length:RegExp,d:RegExp};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "b"], withMethods: ["constructor", "d", "length"])
const v5 = new Int16Array(19873);
// v5 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
const v8 = Object.defineProperty(v5,7,v2);
// v8 = .undefined
}
%NeverOptimizeFunction(main);
main();
