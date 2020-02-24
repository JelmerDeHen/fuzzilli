function main() {
const v4 = [..."boolean",2676202182,53015];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = [1337,1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v9 = [13.37,"boolean","boolean",13.37];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v10 = {e:2676202182,valueOf:v9,b:2676202182,a:Float32Array};
// v10 = .object(ofGroup: Object, withProperties: ["e", "b", "__proto__", "a", "valueOf"])
let v11 = v10;
const v12 = new Float32Array("boolean");
// v12 = .object(ofGroup: Float32Array, withProperties: ["length", "__proto__", "byteOffset", "constructor", "buffer", "byteLength"], withMethods: ["subarray", "values", "reverse", "fill", "keys", "reduceRight", "join", "find", "every", "forEach", "sort", "includes", "set", "slice", "filter", "entries", "copyWithin", "lastIndexOf", "map", "findIndex", "some", "indexOf", "reduce"])
for (const v13 in v8) {
    const v14 = {b:v13,e:Float32Array,length:v4,...v13,...v11,...v12,...v13,...1337};
    // v14 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "length", "byteLength", "buffer", "e", "b", "a", "constructor", "byteOffset"], withMethods: ["every", "map", "includes", "reverse", "entries", "indexOf", "slice", "forEach", "set", "values", "subarray", "some", "sort", "findIndex", "join", "reduce", "lastIndexOf", "find", "filter", "copyWithin", "keys", "reduceRight", "fill"])
}
}
%NeverOptimizeFunction(main);
main();
