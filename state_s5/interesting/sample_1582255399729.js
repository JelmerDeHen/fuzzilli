function main() {
const v3 = [13.37,13.37,-4294967297,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = {length:v3,constructor:Uint8Array};
// v4 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length"])
const v8 = [3156875969,3156875969,1337,DataView];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v12 = {e:DataView,constructor:1337,valueOf:1337,d:v8};
// v12 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "d", "e", "valueOf"])
let v22 = 0;
let v25 = 0;
const v37 = {length:"symbol",length:9007199254740993};
// v37 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
delete v37.length;
}
%NeverOptimizeFunction(main);
main();
