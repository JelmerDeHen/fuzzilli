function main() {
function v2(v3,v4) {
    const v6 = {__proto__:536870912};
    // v6 = .object(ofGroup: Object, withProperties: ["__proto__"])
    with (v6) {
        __proto__[0] = v2;
    }
}
const v9 = v2(1024,4.0);
// v9 = .unknown
const v15 = [1.7976931348623157e+308];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v17 = [255,255,255];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v18 = {a:255,toString:isFinite,c:v15,__proto__:v17,valueOf:"object",constructor:"gM8oAednYn"};
// v18 = .object(ofGroup: Object, withProperties: ["constructor", "valueOf", "c", "__proto__", "a"], withMethods: ["toString"])
let v26 = 0;
let v28 = RegExp;
let v29 = v28;
const v32 = new Proxy(v29,Object);
// v32 = .unknown
const v33 = Object.freeze(v32);
// v33 = .undefined
let v45 = 0;
const v46 = v45 + 1;
// v46 = .primitive
v45 = v46;
const v47 = {toString:v15,valueOf:v18,d:255,constructor:536870912};
// v47 = .object(ofGroup: Object, withProperties: ["valueOf", "constructor", "__proto__", "toString", "d"])
const v48 = RegExp.apply(v47,RegExp);
// v48 = .unknown
const v49 = "2IdSaX90v.".replace(v48,"1t/yEFbOw4");
// v49 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
