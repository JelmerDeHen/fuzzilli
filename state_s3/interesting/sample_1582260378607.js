function main() {
const v3 = [13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = [1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [v3,v5];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = {constructor:"OQrlgqwgVv",b:1337,valueOf:1337,a:v5,e:9007199254740992};
// v7 = .object(ofGroup: Object, withProperties: ["e", "b", "__proto__", "a", "valueOf", "constructor"])
const v8 = {e:13.37,__proto__:v6,d:v6};
// v8 = .object(ofGroup: Object, withProperties: ["d", "e", "__proto__"])
let v9 = "OQrlgqwgVv";
const v12 = new Float32Array(20368);
// v12 = .object(ofGroup: Float32Array, withProperties: ["length", "constructor", "buffer", "__proto__", "byteLength", "byteOffset"], withMethods: ["slice", "some", "findIndex", "reduce", "copyWithin", "reverse", "find", "sort", "indexOf", "filter", "keys", "map", "every", "reduceRight", "lastIndexOf", "fill", "set", "forEach", "subarray", "entries", "values", "includes", "join"])
let v15 = 0;
for (const v16 in v12) {
}
const v17 = v15 + 1;
// v17 = .primitive
v15 = v17;
const v18 = {b:20368,...v9};
// v18 = .object(ofGroup: Object, withProperties: ["b", "constructor", "__proto__", "length"], withMethods: ["charAt", "split", "startsWith", "lastIndexOf", "padEnd", "endsWith", "replace", "concat", "includes", "substring", "padStart", "charCodeAt", "codePointAt", "repeat", "trim", "slice", "indexOf"])
const v19 = v8[536870912];
// v19 = .unknown
const v21 = 20368 <= v18;
// v21 = .boolean
v3[1274331000] = v21;
}
%NeverOptimizeFunction(main);
main();
