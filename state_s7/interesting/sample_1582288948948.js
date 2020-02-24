function main() {
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [v6,"toStringTag"];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {c:RegExp,valueOf:1337,constructor:v6,__proto__:13.37,b:4294967296};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "constructor", "valueOf"], withMethods: ["c"])
const v9 = {c:v8,valueOf:"toStringTag",a:v7,b:1337};
// v9 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "valueOf", "a", "c"])
const v10 = 4294967296 | "toStringTag";
// v10 = .integer
let v14 = 0;
const v15 = [];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v18 = new Int16Array(6992);
// v18 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
const v19 = v15.__proto__;
// v19 = .object()
v19.__proto__ = v18;
const v20 = v14 + 1;
// v20 = .primitive
v14 = v20;
const v23 = [13.37,13.37,13.37,"boolean"];
// v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v26 = [v23,13.37,13.37];
// v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v27 = [814977.5313978586];
// v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v28 = {length:1337,toString:v26,__proto__:v27};
// v28 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "length"])
const v30 = v27.unshift(100,v9,v10);
// v30 = .integer
let v32 = "qHZ9xy0D+R";
const v33 = v9[v32];
// v33 = .unknown
const v34 = new Float32Array(v28);
// v34 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "constructor", "buffer", "length", "__proto__"], withMethods: ["filter", "every", "fill", "copyWithin", "slice", "includes", "entries", "reduceRight", "indexOf", "sort", "map", "lastIndexOf", "find", "values", "reverse", "reduce", "findIndex", "join", "keys", "some", "set", "subarray", "forEach"])
const v35 = v34.sort(v33);
// v35 = .undefined
}
%NeverOptimizeFunction(main);
main();
