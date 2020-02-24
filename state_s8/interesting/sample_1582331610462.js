function main() {
const v1 = ["jmW+cy8FD0"];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v2 = v1;
let v3 = v2;
const v6 = String(v3,Object);
// v6 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
for (const v7 in v6) {
    const v9 = (1337).__proto__;
    // v9 = .unknown
    let v11 = this;
    let v12 = v11;
    const v15 = new Proxy(v12,Object);
    // v15 = .unknown
    v9.__proto__ = v15;
}
}
%NeverOptimizeFunction(main);
main();
