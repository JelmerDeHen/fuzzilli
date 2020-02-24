function main() {
let v2 = -1073741824;
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = [1337];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v8 = v7;
v4[v2] = 1337;
let v11 = 0;
let v14 = 0;
const v15 = v14 + 1;
// v15 = .primitive
v14 = v15;
const v16 = v11 + 1;
// v16 = .primitive
v11 = v16;
const v18 = v7[-2];
// v18 = .unknown
let v21 = 0;
const v22 = v21 + 1;
// v22 = .primitive
v21 = v22;
for (const v23 in v4) {
    try {
        const v24 = typeof -2191158840;
        // v24 = .string
        const v25 = v24 === Uint8Array;
        // v25 = .boolean
        const v26 = v8.toLocaleString(v23,v25,1337);
        // v26 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
    } catch(v27) {
    }
}
}
%NeverOptimizeFunction(main);
main();
