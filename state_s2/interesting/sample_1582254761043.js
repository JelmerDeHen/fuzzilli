function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,v4,13.37,1024];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = {length:"N0Xx92zvHQ"};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v8 = {constructor:13.37,length:13.37,__proto__:v7,toString:Number,a:"N0Xx92zvHQ"};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "length", "constructor"], withMethods: ["toString"])
const v11 = [13.37,13.37,13.37,13.37,13.37];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v12 = v11;
let v15 = 0;
const v16 = v15 + 1;
// v16 = .primitive
v15 = v16;
for (const v20 of v12) {
    const v24 = {length:"N0Xx92zvHQ"};
    // v24 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
    const v25 = {constructor:13.37,length:13.37,__proto__:v24,toString:Number,a:"N0Xx92zvHQ"};
    // v25 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length", "a"], withMethods: ["toString"])
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
