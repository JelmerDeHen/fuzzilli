function main() {
const v4 = [13.37,13.37,1024,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [1337,v4,13.37,1024];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {length:"N0Xx92zvHQ"};
// v8 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
let v11 = 0;
while (v11 < 10) {
    const v12 = v11 + 1;
    // v12 = .primitive
    v11 = v12;
}
const v13 = v7[0];
// v13 = .unknown
v13[2424241100] = 1337;
const v14 = Number.EPSILON;
// v14 = .number
let v15 = 1024;
try {
    const v16 = ~v11;
    // v16 = .boolean
    v15 = 1337;
} catch(v17) {
    const v18 = v17(v17);
    // v18 = .unknown
    v15 = 1337;
}
const v19 = {constructor:13.37,length:13.37,__proto__:v8,toString:Number,a:"N0Xx92zvHQ"};
// v19 = .object(ofGroup: Object, withProperties: ["length", "a", "__proto__", "constructor"], withMethods: ["toString"])
let v20 = v19;
let v24 = v8;
const v25 = Object.entries(Object);
// v25 = .object()
const v26 = Object.__proto__;
// v26 = .unknown
v24.length = 0;
}
%NeverOptimizeFunction(main);
main();
