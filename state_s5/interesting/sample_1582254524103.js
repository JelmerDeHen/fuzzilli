function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [1337,v4,13.37,1024];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {length:"N0Xx92zvHQ"};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v9 = {constructor:13.37,length:13.37,__proto__:v8,toString:Number,a:"N0Xx92zvHQ"};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length", "a"], withMethods: ["toString"])
let v10 = v9;
v8[1337] = 1024;
v10 = v10;
const v13 = v6 == "N0Xx92zvHQ";
// v13 = .boolean
v10[1337] = v4;
let v16 = 0;
while (v16 < 0) {
    v16 = 0;
    const v17 = v16 + 1;
    // v17 = .primitive
    v16 = v17;
}
const v18 = "N0Xx92zvHQ".__proto__;
// v18 = .object()
let v19 = v18;
const v21 = {set:Number,get:Number};
// v21 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
const v23 = Object.defineProperty(v19,-3823858990,v21);
// v23 = .undefined
const v26 = Object.setPrototypeOf(v18,Number);
// v26 = .object()
v9.a = 0;
let v27 = 0;
const v28 = v27 + 1;
// v28 = .primitive
v27 = v28;
}
%NeverOptimizeFunction(main);
main();
