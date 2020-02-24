function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = [v4,v6,Uint16Array];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {b:v6,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v8 = .object(ofGroup: Object, withProperties: ["a", "valueOf", "length", "e", "__proto__", "b"])
const v9 = 13.37 - 1;
// v9 = .primitive
const v10 = v7.__proto__;
// v10 = .object()
const v11 = v9 - 1;
// v11 = .primitive
let v13 = 0;
do {
    v7[v9] = v10;
    const v14 = v13 + 1;
    // v14 = .primitive
    v13 = v14;
} while (v13 < v6);
const v15 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v15 = .object(ofGroup: Object, withProperties: ["d", "e", "__proto__", "toString", "b"])
let v16 = v4;
const v70 = v10 + 1;
// v70 = .primitive
const v71 = 13.37 < Uint16Array;
// v71 = .boolean
const v72 = Uint16Array - 1;
// v72 = .primitive
let v116 = 0;
const v117 = v116 + 1;
// v117 = .primitive
v116 = v117;
}
%NeverOptimizeFunction(main);
main();
