function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = [1337,v4,13.37,1024];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = {length:"N0Xx92zvHQ"};
// v7 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v8 = {constructor:13.37,length:13.37,__proto__:v7,toString:Number,a:"N0Xx92zvHQ"};
// v8 = .object(ofGroup: Object, withProperties: ["a", "constructor", "__proto__", "length"], withMethods: ["toString"])
const v11 = [13.37,13.37,13.37,13.37,13.37];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v12 = v11;
let v15 = 0;
const v16 = v15 + 1;
// v16 = .primitive
v15 = v16;
for (const v20 of v12) {
    const v24 = {length:"N0Xx92zvHQ"};
    // v24 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
    const v25 = {constructor:13.37,length:13.37,__proto__:v24,toString:Number,a:"N0Xx92zvHQ"};
    // v25 = .object(ofGroup: Object, withProperties: ["constructor", "length", "a", "__proto__"], withMethods: ["toString"])
    for (const v27 in "object") {
        const v28 = v24.__proto__;
        // v28 = .object()
        for (const v30 in "replace") {
        }
    }
}
}
%NeverOptimizeFunction(main);
main();
