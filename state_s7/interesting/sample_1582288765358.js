function main() {
const v2 = {c:JSON,b:JSON,toString:"function",constructor:"function",d:JSON};
// v2 = .object(ofGroup: Object, withProperties: ["d", "toString", "b", "c", "__proto__", "constructor"])
JSON.e = v2;
const v4 = {__proto__:536870912};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v6 = 0;
const v10 = [13.37];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v12 = undefined;
try {
    const v14 = {};
    // v14 = .object(ofGroup: Object, withProperties: ["__proto__"])
    const v19 = [2153514987,13.37,13.37,13.37,v10];
    // v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v21 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v19,__proto__:v10};
    // v21 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "b", "__proto__"])
    const v22 = {a:1337,toString:v14,constructor:"NEGATIVE_INFINITY",valueOf:v21,b:13.37,c:JSON,e:JSON};
    // v22 = .object(ofGroup: Object, withProperties: ["b", "c", "a", "__proto__", "toString", "constructor", "e", "valueOf"])
    const v24 = JSON.stringify(v22,Reflect,"STSVGVc.SZ");
    // v24 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
} catch(v25) {
}
}
%NeverOptimizeFunction(main);
main();
