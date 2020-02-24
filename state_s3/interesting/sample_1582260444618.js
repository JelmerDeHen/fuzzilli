function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
v7 = v8;
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
const v13 = [v3,471091797,DataView];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v14 = {c:1337};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v15 = {constructor:v3,toString:v14,__proto__:471091797,length:v13};
// v15 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor", "toString"])
let v18 = 0;
const v19 = v18 + 1;
// v19 = .primitive
v18 = v19;
const v20 = v15.__proto__;
// v20 = .object()
v20[8] = 2;
const v22 = [1337];
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v23 = v22;
let v25 = undefined;
let v29 = 0;
const v32 = [13.37,13.37,13.37,13.37];
// v32 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v33 = {__proto__:"hasInstance",d:v32};
// v33 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v35 = {call:v33};
// v35 = .object(ofGroup: Object, withProperties: ["__proto__", "call"])
const v37 = new Proxy(Array,v35);
// v37 = .unknown
for (const v38 in v37) {
}
const v39 = v29 + 1;
// v39 = .primitive
v29 = v39;
}
%NeverOptimizeFunction(main);
main();
