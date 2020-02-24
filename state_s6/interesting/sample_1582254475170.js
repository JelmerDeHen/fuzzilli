function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = {b:v6,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v7 = .object(ofGroup: Object, withProperties: ["length", "a", "e", "__proto__", "b", "valueOf"])
const v8 = typeof v7;
// v8 = .string
const v10 = v8 === "undefined";
// v10 = .boolean
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
const v21 = 1337 >= -0.0;
// v21 = .boolean
let v24 = 0;
const v25 = v24 + 1;
// v25 = .primitive
v24 = v25;
let v28 = 0;
do {
    const v29 = v28 + 1;
    // v29 = .primitive
    const v31 = Symbol.match;
    // v31 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    v4[v31] = v29;
    v28 = v29;
} while (v28 < 7);
}
%NeverOptimizeFunction(main);
main();
