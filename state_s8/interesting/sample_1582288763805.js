function main() {
const v2 = {c:JSON,b:JSON,toString:"function",constructor:"function",d:JSON};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "b", "constructor", "d", "c"])
JSON.e = v2;
const v4 = {__proto__:536870912};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v6 = 0;
const v10 = [13.37];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v12 = undefined;
try {
    const v14 = {};
    // v14 = .object(ofGroup: Object, withProperties: ["__proto__"])
    const v19 = [2153514987,13.37,13.37,13.37,v10];
    // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v21 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v19,__proto__:v10};
    // v21 = .object(ofGroup: Object, withProperties: ["length", "b", "__proto__", "valueOf"])
    const v22 = {a:1337,toString:v14,constructor:"NEGATIVE_INFINITY",valueOf:v21,b:13.37,c:JSON,e:JSON};
    // v22 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "valueOf", "c", "a", "toString", "constructor", "b"])
    const v24 = JSON.stringify(v22,Reflect,"STSVGVc.SZ");
    // v24 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
} catch(v25) {
}
}
%NeverOptimizeFunction(main);
main();
