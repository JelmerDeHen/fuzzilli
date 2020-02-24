function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
const v7 = JSON.stringify(JSON,JSON,2153514987);
// v7 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
const v9 = [1337,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
for (const v11 in "boolean") {
    const v12 = v7.__proto__;
    // v12 = .object()
    v12[v11] = v9;
    let v16 = 0;
    const v17 = v16 + 1;
    // v17 = .primitive
    v16 = v17;
    const v18 = "undefined".__proto__;
    // v18 = .object()
    v18[8] = 2;
    v18[3133106106] = v18;
    const v22 = [13.37,13.37,13.37,13.37];
    // v22 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v24 = [v22,471091797,DataView];
    // v24 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v25 = {c:1337};
    // v25 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
    const v26 = {constructor:v22,toString:v25,__proto__:471091797,length:v24};
    // v26 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__", "toString"])
    const v28 = typeof v26;
    // v28 = .string
    const v30 = v28 === "object";
    // v30 = .boolean
    for (const v32 in "object") {
    }
}
}
%NeverOptimizeFunction(main);
main();
