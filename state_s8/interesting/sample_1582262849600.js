function main() {
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = {d:"Al+zf6nXWs",c:65536,length:1337,e:v5};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "d", "length", "c"])
const v10 = v5.__proto__;
// v10 = .object()
let v12 = undefined;
const v15 = [13.37,13.37,13.37,13.37];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v16 = {__proto__:"hasInstance",d:v15};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v18 = {call:v16};
// v18 = .object(ofGroup: Object, withProperties: ["call", "__proto__"])
const v20 = new Proxy(Array,v18);
// v20 = .unknown
let v21 = v10;
if (v12) {
    v21 = 1337;
    v21 = v21;
} else {
}
}
%NeverOptimizeFunction(main);
main();
