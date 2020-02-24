function main() {
const v1 = ["jmW+cy8FD0"];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v2 = v1;
let v3 = v2;
const v6 = String(v3,Object);
// v6 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
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
