function main() {
try {
    const v4 = String.fromCharCode(1000000000000.0,-3789366927);
    // v4 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
    const v6 = typeof "boolean";
    // v6 = .string
    const v8 = v6 === "boolean";
    // v8 = .boolean
    const v9 = eval(v4);
    // v9 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
} catch(v10) {
}
}
%NeverOptimizeFunction(main);
main();
