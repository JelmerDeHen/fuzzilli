function main() {
const v1 = ["jmW+cy8FD0"];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v2 = v1;
let v3 = v2;
const v6 = String(v3,Object);
// v6 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
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
