function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v2 = v1;
let v4 = undefined;
let v8 = 0;
for (const v9 in "boolean") {
    let v12 = 0;
    do {
        const v16 = [1337,1337];
        // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        const v17 = [v16];
        // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        const v18 = {call:1337,preventExtensions:4294967295,getPrototypeOf:"caller",defineProperty:v16,get:v16};
        // v18 = .object(ofGroup: Object, withProperties: ["getPrototypeOf", "preventExtensions", "defineProperty", "call", "__proto__", "get"])
        const v20 = new Proxy(v17,v18);
        // v20 = .unknown
        try {
            const v21 = v20.__proto__;
            // v21 = .unknown
        } catch(v22) {
        }
        const v23 = v12 + 1;
        // v23 = .primitive
        v12 = v23;
    } while (v12 < 8);
}
const v24 = v8 + 1;
// v24 = .primitive
v8 = v24;
}
%NeverOptimizeFunction(main);
main();
