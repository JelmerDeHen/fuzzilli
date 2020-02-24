function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = [v4,"J8xZoDcM3e",1337,65536];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v9 = {__proto__:"J8xZoDcM3e",d:13.37,toString:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "d"])
let v10 = 65536;
const v13 = {e:Uint16Array,toString:65536,__proto__:v10,...13.37,...13.37,...RegExp,...v10};
// v13 = .object(ofGroup: Object, withProperties: ["caller", "prototype", "toString", "__proto__", "e", "length", "arguments", "name", "constructor"], withMethods: ["bind", "call", "apply"])
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
const v18 = [13.37,13.37,13.37];
// v18 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v19 = v18.toString();
// v19 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
const v22 = [13.37,13.37];
// v22 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v24 = [1337];
// v24 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v25 = [13.37];
// v25 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v26 = {b:v22,c:13.37,valueOf:-9007199254740993,d:v19,constructor:1337,__proto__:v24};
// v26 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "constructor", "valueOf", "c", "d"])
let v27 = v26;
const v29 = [1337];
// v29 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v30 = v29;
let v34 = 0;
for (let v38 = 0; v38 < 100; v38++) {
    const v39 = RegExp(v19);
    // v39 = .object()
}
const v40 = RegExp("J8xZoDcM3e");
// v40 = .object()
const v41 = v34 + 1;
// v41 = .primitive
v34 = v41;
function v42(v43,v44) {
    const v46 = {deleteProperty:Object,apply:Object,getPrototypeOf:RegExp,defineProperty:v44,set:RegExp,construct:v42,setPrototypeOf:v44,has:v42};
    // v46 = .object(ofGroup: Object, withProperties: ["defineProperty", "setPrototypeOf", "__proto__"], withMethods: ["apply", "set", "deleteProperty", "has", "getPrototypeOf", "construct"])
    const v48 = new Proxy(v27,v46);
    // v48 = .unknown
    const v49 = Object.freeze(v48);
    // v49 = .undefined
    return 9;
}
let v50 = v30;
const v51 = v42(v50);
// v51 = .unknown
}
%NeverOptimizeFunction(main);
main();
