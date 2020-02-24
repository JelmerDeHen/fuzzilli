function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [1337,RegExp];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = v6 >> 1337;
// v8 = .integer
const v9 = {toString:1337};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "toString"])
const v10 = !v6;
// v10 = .boolean
function v11(v12,v13) {
    v4.constructor = RegExp;
    return v13;
}
const v14 = v4 & v8;
// v14 = .integer
const v15 = {b:1337,constructor:"symbol",e:-1024,c:-1024,a:v4,valueOf:13.37};
// v15 = .object(ofGroup: Object, withProperties: ["constructor", "e", "c", "__proto__", "b", "valueOf", "a"])
let v16 = v6;
v16 = v9;
const v18 = typeof v16;
// v18 = .string
const v20 = v18 === "symbol";
// v20 = .boolean
const v21 = v6.includes();
// v21 = .boolean
const v22 = v15[-3031530343];
// v22 = .unknown
let v25 = 0;
do {
    const v26 = {};
    // v26 = .object(ofGroup: Object, withProperties: ["__proto__"])
    const v27 = v25 + 1;
    // v27 = .primitive
    v25 = v27;
} while (v25 < 3);
let v28 = v15;
if (v20) {
    RegExp.toString = RegExp;
    v28 = v7;
} else {
    const v29 = [1337,v15,13.37,v16];
    // v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    v28 = v15;
}
const v32 = {length:"N0Xx92zvHQ"};
// v32 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v33 = {constructor:13.37,length:13.37,__proto__:v32,toString:Number,a:"N0Xx92zvHQ"};
// v33 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__", "a"], withMethods: ["toString"])
let v34 = v33;
let v37 = v34;
const v38 = v37 + 1;
// v38 = .primitive
v37 = v38;
const v41 = [13.37,13.37];
// v41 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v42 = [13.37,v41];
// v42 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v45 = v7 & 13.37;
// v45 = .integer
const v46 = typeof 1024;
// v46 = .string
const v48 = [13.37];
// v48 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v51 = 0;
while (v51 < 3) {
    const v52 = v9.__proto__;
    // v52 = .object()
    const v53 = v51 + 1;
    // v53 = .primitive
    v51 = v53;
}
const v54 = v41.length;
// v54 = .integer
const v55 = !3;
// v55 = .boolean
const v57 = v46 === 13.37;
// v57 = .boolean
Number.valueOf = "symbol";
const v58 = v57 <= -1024;
// v58 = .boolean
const v59 = RegExp + 1;
// v59 = .primitive
let v60 = 0;
do {
    v42.length = 1024;
    const v61 = v60 + 1;
    // v61 = .primitive
    v60 = v61;
} while (v60 < 3);
}
%NeverOptimizeFunction(main);
main();
