function main() {
const v6 = [13.37,Infinity];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = [v6,"0W4FS+D7+Z"];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {c:-256,valueOf:"0W4FS+D7+Z",a:v7,b:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["a", "c", "valueOf", "b", "__proto__"])
const v9 = -128 | "0W4FS+D7+Z";
// v9 = .integer
const v12 = [2,-765870.54945378,-765870.54945378,-765870.54945378];
// v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v15 = [v12,-536870912,13.37];
// v15 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v16 = ["0W4FS+D7+Z"];
// v16 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v19 = 0;
while (v19 < 3) {
    v16[v19] = -128;
    const v20 = v19 + 1;
    // v20 = .primitive
    v19 = v20;
}
const v21 = {length:1337,toString:v15,__proto__:v16};
// v21 = .object(ofGroup: Object, withProperties: ["length", "toString", "__proto__"])
const v22 = v16.unshift(1337,2,v9);
// v22 = .integer
let v24 = v9;
const v25 = v8[v24];
// v25 = .unknown
const v26 = new Float32Array(v21);
// v26 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "length", "constructor", "buffer", "__proto__"], withMethods: ["slice", "entries", "some", "set", "indexOf", "join", "includes", "map", "lastIndexOf", "keys", "forEach", "reduce", "fill", "findIndex", "reduceRight", "find", "subarray", "copyWithin", "reverse", "sort", "filter", "every", "values"])
const v27 = v26.sort(v25);
// v27 = .undefined
}
%NeverOptimizeFunction(main);
main();