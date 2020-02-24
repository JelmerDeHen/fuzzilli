function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = [2011007354,"__proto__"];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {__proto__:String,length:13.37,valueOf:String,toString:2011007354,a:v6,b:"__proto__"};
// v8 = .object(ofGroup: Object, withProperties: ["length", "a", "b", "toString", "__proto__"], withMethods: ["__proto__", "valueOf"])
const v9 = v6.__proto__;
// v9 = .object()
"__proto__".toString = 1337;
v4.toString = String;
const v10 = {};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v11 = String;
const v13 = {};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v14 = "string";
"string".__proto__ = v10;
let v16 = v11;
"string".length = 8;
const v18 = {b:8,d:String,a:v11,c:v11,constructor:v6,toString:2011007354};
// v18 = .object(ofGroup: Object, withProperties: ["constructor", "toString", "b", "__proto__"], withMethods: ["a", "c", "d"])
const v20 = String[v9];
// v20 = .unknown
let v21 = v4;
if (v20) {
    v21.__proto__ = String;
    v21 = v16;
} else {
    const v22 = new String(v21);
    // v22 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
    v21 = v4;
}
delete String.prototype;
for (let v26 = 0; v26 < 5; v26++) {
    Array[v26] = 2011007354;
}
const v27 = Array(2815038421);
// v27 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v31 = 1337;
const v35 = {toString:v14,e:0,a:v31,c:v13};
// v35 = .object(ofGroup: Object, withProperties: ["c", "e", "a", "toString", "__proto__"])
}
%NeverOptimizeFunction(main);
main();
