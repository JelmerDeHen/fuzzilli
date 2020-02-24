function main() {
const v2 = {c:JSON,b:JSON,toString:"function",constructor:"function",d:JSON};
// v2 = .object(ofGroup: Object, withProperties: ["c", "toString", "d", "__proto__", "b", "constructor"])
JSON.e = v2;
const v4 = {__proto__:536870912};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v6 = 0;
const v10 = [13.37];
// v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v12 = undefined;
try {
    const v14 = {};
    // v14 = .object(ofGroup: Object, withProperties: ["__proto__"])
    const v19 = [2153514987,13.37,13.37,13.37,v10];
    // v19 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v21 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v19,__proto__:v10};
    // v21 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "length", "__proto__"])
    const v22 = {a:1337,toString:v14,constructor:"NEGATIVE_INFINITY",valueOf:v21,b:13.37,c:JSON,e:JSON};
    // v22 = .object(ofGroup: Object, withProperties: ["e", "toString", "__proto__", "b", "c", "a", "constructor", "valueOf"])
    const v24 = JSON.stringify(v22,Reflect,"STSVGVc.SZ");
    // v24 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
} catch(v25) {
}
}
%NeverOptimizeFunction(main);
main();
