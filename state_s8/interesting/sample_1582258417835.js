function main() {
const v4 = [..."boolean",2676202182,53015];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = [1337,1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v9 = [13.37,"boolean","boolean",13.37];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v10 = {e:2676202182,valueOf:v9,b:2676202182,a:Float32Array};
// v10 = .object(ofGroup: Object, withProperties: ["a", "e", "__proto__", "b", "valueOf"])
let v11 = v10;
const v12 = new Float32Array("boolean");
// v12 = .object(ofGroup: Float32Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteLength", "byteOffset"], withMethods: ["sort", "some", "indexOf", "find", "subarray", "set", "reverse", "reduce", "join", "values", "keys", "entries", "map", "copyWithin", "includes", "findIndex", "slice", "reduceRight", "lastIndexOf", "filter", "every", "fill", "forEach"])
for (const v13 in v8) {
    const v14 = {b:v13,e:Float32Array,length:v4,...v13,...v11,...v12,...v13,...1337};
    // v14 = .object(ofGroup: Object, withProperties: ["byteOffset", "constructor", "a", "buffer", "b", "length", "valueOf", "byteLength", "e", "__proto__"], withMethods: ["join", "reduceRight", "sort", "map", "forEach", "keys", "fill", "some", "reduce", "copyWithin", "filter", "values", "find", "subarray", "includes", "indexOf", "reverse", "lastIndexOf", "every", "findIndex", "entries", "slice", "set"])
}
}
%NeverOptimizeFunction(main);
main();
