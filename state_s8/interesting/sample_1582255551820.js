function main() {
const v5 = [1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [13.37,13.37,-4294967297,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = {length:v6,constructor:Uint8Array};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor"])
const v8 = {toString:Uint8Array,e:"boolean",constructor:v5,valueOf:v7,b:v6};
// v8 = .object(ofGroup: Object, withProperties: ["b", "constructor", "__proto__", "toString", "valueOf", "e"])
const v10 = [1337];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v11 = v10;
let v13 = undefined;
let v20 = 0;
const v38 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v38 = .object(ofGroup: Object, withProperties: ["toString", "d", "b", "__proto__", "e"])
const v41 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v41 = .object(ofGroup: Object, withProperties: ["b", "e", "d", "__proto__", "toString"])
const v45 = 1337 == 13.37;
// v45 = .boolean
const v47 = Object();
// v47 = .object()
const v50 = "pvU0UUjoya"[127];
// v50 = .unknown
const v52 = Symbol.species;
// v52 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
v41[v52] = v8;
v38.valueOf = v50;
let v61 = 0;
const v62 = v61 + 1;
// v62 = .primitive
v61 = v62;
}
%NeverOptimizeFunction(main);
main();
