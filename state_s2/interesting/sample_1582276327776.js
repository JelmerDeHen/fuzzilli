function main() {
const v3 = 4294967295 / 4294967295;
// v3 = .number
const v5 = [13.37];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = new Float32Array("object");
// v6 = .object(ofGroup: Float32Array, withProperties: ["byteLength", "length", "__proto__", "buffer", "constructor", "byteOffset"], withMethods: ["includes", "forEach", "findIndex", "lastIndexOf", "reduce", "filter", "some", "entries", "map", "slice", "every", "reverse", "keys", "reduceRight", "copyWithin", "set", "fill", "subarray", "join", "values", "sort", "indexOf", "find"])
const v8 = [1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v9 = v5;
if (4294967295) {
    let v10 = v3;
    v9 = v8;
} else {
    for (let v14 = 0; v14 < 100; v14++) {
        const v15 = v3(4294967295,13.37);
        // v15 = .unknown
    }
    v9 = v8;
}
const v16 = v9.__proto__;
// v16 = .object()
const v17 = v6.__proto__;
// v17 = .object()
const v18 = [v5,4294967295,13.37,v5];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v19 = {c:1337,constructor:v8,__proto__:v8,a:13.37};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "c", "constructor"])
const v20 = {};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v21 = 4294967295;
const v23 = [3536304147];
// v23 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v25 = {c:1337,d:v23};
// v25 = .object(ofGroup: Object, withProperties: ["c", "d", "__proto__"])
let v28 = 0;
const v32 = new Set("asyncIterator");
// v32 = .object(ofGroup: Set, withProperties: ["size", "__proto__"], withMethods: ["forEach", "delete", "clear", "entries", "values", "keys", "has", "add"])
let v33 = v25;
const v34 = ["symbol",v32,v33];
// v34 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
v28 = v34;
const v35 = JSON.stringify(v28);
// v35 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
const v37 = JSON.parse(v35,2435262485);
// v37 = .unknown
}
%NeverOptimizeFunction(main);
main();
