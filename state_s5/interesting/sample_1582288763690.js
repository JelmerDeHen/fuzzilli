function main() {
const v2 = {c:JSON,b:JSON,toString:"function",constructor:"function",d:JSON};
// v2 = .object(ofGroup: Object, withProperties: ["c", "constructor", "b", "toString", "d", "__proto__"])
JSON.e = v2;
const v4 = {__proto__:536870912};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v6 = 0;
const v10 = [13.37];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v12 = undefined;
try {
    const v14 = {};
    // v14 = .object(ofGroup: Object, withProperties: ["__proto__"])
    const v19 = [2153514987,13.37,13.37,13.37,v10];
    // v19 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v21 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v19,__proto__:v10};
    // v21 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "length", "valueOf"])
    const v22 = {a:1337,toString:v14,constructor:"NEGATIVE_INFINITY",valueOf:v21,b:13.37,c:JSON,e:JSON};
    // v22 = .object(ofGroup: Object, withProperties: ["c", "valueOf", "a", "__proto__", "e", "constructor", "b", "toString"])
    const v24 = JSON.stringify(v22,Reflect,"STSVGVc.SZ");
    // v24 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
} catch(v25) {
}
}
%NeverOptimizeFunction(main);
main();
