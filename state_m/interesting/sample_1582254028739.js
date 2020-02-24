function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = [1337,v2,13.37,1024];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v9 = {};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"])
with (v9) {
    constructor = Reflect;
}
let v13 = 0;
const v14 = v13 + 1;
// v14 = .primitive
v13 = v14;
const v16 = Object();
// v16 = .object()
const v17 = Object.seal(v16);
// v17 = .object()
let v20 = 0;
let v23 = 0;
const v24 = v23 + 1;
// v24 = .primitive
v23 = v24;
let v25 = 0;
const v26 = v25 + 1;
// v26 = .primitive
v25 = v26;
const v30 = {length:"N0Xx92zvHQ"};
// v30 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v31 = {constructor:13.37,length:13.37,__proto__:v30,toString:Number,a:"N0Xx92zvHQ"};
// v31 = .object(ofGroup: Object, withProperties: ["a", "length", "constructor", "__proto__"], withMethods: ["toString"])
let v32 = v31;
const v33 = v32 != v4;
// v33 = .boolean
let v36 = 0;
const v37 = 0 instanceof parseFloat;
// v37 = .boolean
}
%NeverOptimizeFunction(main);
main();
