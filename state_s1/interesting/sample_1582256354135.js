function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v10 = {length:"N0Xx92zvHQ"};
// v10 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v11 = {constructor:13.37,length:13.37,__proto__:v10,toString:Number,a:"N0Xx92zvHQ"};
// v11 = .object(ofGroup: Object, withProperties: ["a", "constructor", "__proto__", "length"], withMethods: ["toString"])
let v17 = 0;
const v18 = v11.__proto__;
// v18 = .object()
const v19 = v18 + 1;
// v19 = .primitive
v17 = v19;
const v20 = {length:"N0Xx92zvHQ"};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v21 = {constructor:13.37,length:13.37,__proto__:v20,toString:Number,a:"N0Xx92zvHQ"};
// v21 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__", "a"], withMethods: ["toString"])
for (const v23 in "object") {
}
const v26 = [1337,1337,1337,1337];
// v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
for (const v27 in "symbol") {
}
const v28 = v26.__proto__;
// v28 = .object()
v28[128] = v21;
for (const v30 of "pvU0UUjoya") {
}
for (const v32 in "object") {
}
const v34 = Object();
// v34 = .object()
for (const v36 of "pvU0UUjoya") {
}
const v38 = [v34,13.37];
// v38 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v39 = v38[1024];
// v39 = .unknown
}
%NeverOptimizeFunction(main);
main();
