function main() {
const v4 = [..."boolean",2676202182,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = [1337,1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v9 = [13.37,"boolean","boolean",13.37];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v10 = {e:2676202182,valueOf:v9,b:2676202182,a:Uint32Array};
// v10 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "a", "b", "valueOf"])
let v11 = v10;
const v12 = new Uint32Array("boolean");
// v12 = .object(ofGroup: Uint32Array, withProperties: ["length", "buffer", "byteOffset", "byteLength", "__proto__", "constructor"], withMethods: ["findIndex", "keys", "join", "sort", "slice", "indexOf", "reverse", "fill", "forEach", "map", "every", "includes", "lastIndexOf", "copyWithin", "entries", "some", "reduce", "values", "set", "find", "subarray", "filter", "reduceRight"])
for (const v13 in v8) {
    const v14 = {b:v13,e:Uint32Array,length:v4,...v13,...v11,...v12,...v13,...1337};
    // v14 = .object(ofGroup: Object, withProperties: ["byteLength", "constructor", "__proto__", "buffer", "valueOf", "byteOffset", "b", "e", "length", "a"], withMethods: ["copyWithin", "slice", "reverse", "every", "join", "findIndex", "entries", "includes", "subarray", "indexOf", "map", "filter", "some", "keys", "sort", "fill", "reduceRight", "forEach", "find", "reduce", "set", "values", "lastIndexOf"])
}
}
%NeverOptimizeFunction(main);
main();
