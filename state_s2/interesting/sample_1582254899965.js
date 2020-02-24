function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
"eeeRbEqfAO"[RegExp] = v4;
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {__proto__:"eeeRbEqfAO",constructor:65537,length:v7};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor"])
const v9 = {toString:"eeeRbEqfAO",d:13.37,length:v8,__proto__:RegExp,valueOf:65537};
// v9 = .object(ofGroup: Object, withProperties: ["toString", "d", "__proto__", "valueOf", "length"], withMethods: ["__proto__"])
let v10 = RegExp;
let v13 = 0;
const v14 = v13 + 1;
// v14 = .primitive
v13 = v14;
let v17 = 0;
const v18 = v17 + 1;
// v18 = .primitive
v17 = v18;
const v20 = [1337,1337,1337,1337];
// v20 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v21 = v20.toString();
// v21 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
const v23 = Symbol(v21);
// v23 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
for (const v24 in RegExp) {
    function v25(v26,v27) {
        const v28 = typeof v23;
        // v28 = .string
        const v30 = v28 === "object";
        // v30 = .boolean
        return v26;
    }
}
const v33 = new Uint8ClampedArray(38259);
// v33 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteLength", "__proto__", "byteOffset", "constructor", "length", "buffer"], withMethods: ["entries", "every", "lastIndexOf", "values", "reverse", "map", "copyWithin", "subarray", "reduce", "filter", "sort", "find", "keys", "reduceRight", "join", "forEach", "fill", "set", "indexOf", "some", "includes", "findIndex", "slice"])
const v34 = {setPrototypeOf:v10,apply:v10};
// v34 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["apply", "setPrototypeOf"])
const v36 = new Proxy(v6,v34);
// v36 = .unknown
RegExp.d = Proxy;
let v37 = v23;
const v38 = v10(v36);
// v38 = .object()
}
%NeverOptimizeFunction(main);
main();
