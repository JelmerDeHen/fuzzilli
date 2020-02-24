function main() {
const v4 = [..."boolean",2676202182,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = [1337,1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v9 = [13.37,"boolean","boolean",13.37];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v10 = {e:2676202182,valueOf:v9,b:2676202182,a:Uint32Array};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "e", "a", "valueOf"])
let v11 = v10;
const v12 = new Uint32Array("boolean");
// v12 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "length", "byteLength", "constructor", "byteOffset", "__proto__"], withMethods: ["some", "copyWithin", "reduce", "lastIndexOf", "forEach", "indexOf", "findIndex", "fill", "slice", "every", "set", "join", "values", "filter", "reverse", "subarray", "sort", "reduceRight", "includes", "keys", "map", "find", "entries"])
for (const v13 in v8) {
    const v14 = {b:v13,e:Uint32Array,length:v4,...v13,...v11,...v12,...v13,...1337};
    // v14 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "buffer", "valueOf", "e", "byteOffset", "b", "byteLength", "length", "constructor"], withMethods: ["includes", "lastIndexOf", "sort", "entries", "map", "findIndex", "copyWithin", "forEach", "every", "reduceRight", "some", "values", "keys", "reduce", "slice", "indexOf", "join", "reverse", "find", "set", "subarray", "fill", "filter"])
}
}
%NeverOptimizeFunction(main);
main();
