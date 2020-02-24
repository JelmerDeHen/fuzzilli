function main() {
const v3 = {length:"N0Xx92zvHQ"};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v4 = {constructor:13.37,length:13.37,__proto__:v3,toString:Number,a:"N0Xx92zvHQ"};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor", "a"], withMethods: ["toString"])
let v5 = v4;
let v8 = v5;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
const v12 = [13.37,13.37];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v13 = [13.37,v12];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v16 = 0;
do {
    v13.length = 1024;
    const v17 = v16 + 1;
    // v17 = .primitive
    v16 = v17;
} while (v16 < 3);
}
%NeverOptimizeFunction(main);
main();
