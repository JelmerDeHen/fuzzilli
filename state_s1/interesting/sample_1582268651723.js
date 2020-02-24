function main() {
const v4 = [..."boolean",2676202182,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = [1337,1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v9 = [13.37,"boolean","boolean",13.37];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v10 = {e:2676202182,valueOf:v9,b:2676202182,a:Uint32Array};
// v10 = .object(ofGroup: Object, withProperties: ["valueOf", "a", "e", "__proto__", "b"])
let v11 = v10;
const v12 = new Uint32Array("boolean");
// v12 = .object(ofGroup: Uint32Array, withProperties: ["byteLength", "length", "__proto__", "constructor", "buffer", "byteOffset"], withMethods: ["fill", "sort", "entries", "some", "map", "findIndex", "subarray", "values", "forEach", "filter", "indexOf", "find", "reduce", "keys", "reduceRight", "includes", "copyWithin", "set", "lastIndexOf", "slice", "every", "join", "reverse"])
for (const v13 in v8) {
    const v14 = {b:v13,e:Uint32Array,length:v4,...v13,...v11,...v12,...v13,...1337};
    // v14 = .object(ofGroup: Object, withProperties: ["byteOffset", "__proto__", "length", "e", "constructor", "valueOf", "a", "buffer", "byteLength", "b"], withMethods: ["sort", "set", "keys", "lastIndexOf", "every", "indexOf", "find", "entries", "values", "some", "fill", "reduceRight", "findIndex", "subarray", "filter", "includes", "slice", "reduce", "map", "forEach", "join", "reverse", "copyWithin"])
}
}
%NeverOptimizeFunction(main);
main();
