function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v2 = v1;
let v4 = undefined;
let v8 = 0;
for (const v9 in "boolean") {
    let v12 = 0;
    do {
        const v16 = [1337,1337];
        // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v17 = [v16];
        // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v18 = {call:1337,preventExtensions:4294967295,getPrototypeOf:"caller",defineProperty:v16,get:v16};
        // v18 = .object(ofGroup: Object, withProperties: ["call", "getPrototypeOf", "__proto__", "get", "preventExtensions", "defineProperty"])
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
