function main() {
const v2 = {c:JSON,b:JSON,toString:"function",constructor:"function",d:JSON};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "toString", "d", "constructor", "c"])
JSON.e = v2;
const v4 = {__proto__:536870912};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v6 = 0;
const v10 = [13.37];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v12 = undefined;
try {
    const v14 = {};
    // v14 = .object(ofGroup: Object, withProperties: ["__proto__"])
    const v19 = [2153514987,13.37,13.37,13.37,v10];
    // v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v21 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v19,__proto__:v10};
    // v21 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "b", "length"])
    const v22 = {a:1337,toString:v14,constructor:"NEGATIVE_INFINITY",valueOf:v21,b:13.37,c:JSON,e:JSON};
    // v22 = .object(ofGroup: Object, withProperties: ["e", "valueOf", "c", "a", "b", "constructor", "toString", "__proto__"])
    const v24 = JSON.stringify(v22,Reflect,"STSVGVc.SZ");
    // v24 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
} catch(v25) {
}
}
%NeverOptimizeFunction(main);
main();
