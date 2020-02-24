function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [257,13.37,v4];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {length:v7,b:Set,c:257,e:1337,valueOf:13.37,d:v4};
// v8 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "b", "valueOf", "c", "d", "length"])
const v9 = {b:Set,c:Set,valueOf:1337,toString:"LjCa1EMVOs"};
// v9 = .object(ofGroup: Object, withProperties: ["toString", "b", "__proto__", "c", "valueOf"])
let v10 = 1337;
let v12 = -128;
const v13 = v12 + 1;
// v13 = .primitive
const v18 = new Uint16Array(198766827);
// v18 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["every", "findIndex", "reduceRight", "some", "values", "find", "fill", "forEach", "map", "filter", "reduce", "join", "subarray", "includes", "lastIndexOf", "indexOf", "keys", "copyWithin", "sort", "set", "entries", "reverse", "slice"])
v18.constructor = Uint8ClampedArray;
const v20 = v18.slice(13.37,1337);
// v20 = .object(ofGroup: Uint16Array, withProperties: ["buffer", "length", "constructor", "byteOffset", "__proto__", "byteLength"], withMethods: ["subarray", "indexOf", "join", "slice", "lastIndexOf", "find", "forEach", "sort", "values", "fill", "set", "reverse", "keys", "reduce", "reduceRight", "findIndex", "copyWithin", "map", "some", "filter", "includes", "entries", "every"])
}
%NeverOptimizeFunction(main);
main();
