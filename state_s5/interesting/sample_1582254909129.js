function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
"eeeRbEqfAO"[RegExp] = v4;
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {__proto__:"eeeRbEqfAO",constructor:65537,length:v7};
// v8 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__"])
const v9 = {toString:"eeeRbEqfAO",d:13.37,length:v8,__proto__:RegExp,valueOf:65537};
// v9 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "toString", "length", "d"], withMethods: ["__proto__"])
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
// v20 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v21 = v20.toString();
// v21 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
const v23 = Symbol(v21);
// v23 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
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
// v33 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "length", "byteLength", "constructor", "__proto__", "byteOffset"], withMethods: ["join", "values", "reduceRight", "find", "reverse", "fill", "indexOf", "entries", "forEach", "subarray", "findIndex", "every", "set", "reduce", "slice", "filter", "copyWithin", "keys", "lastIndexOf", "sort", "map", "some", "includes"])
const v34 = {setPrototypeOf:v10,apply:v10};
// v34 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "apply"])
const v36 = new Proxy(v6,v34);
// v36 = .unknown
RegExp.d = Proxy;
let v37 = v23;
const v38 = v10(v36);
// v38 = .object()
}
%NeverOptimizeFunction(main);
main();
