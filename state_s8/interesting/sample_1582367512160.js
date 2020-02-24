function main() {
try {
    const v4 = String.fromCharCode(1000000000000.0,-3789366927);
    // v4 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
    const v6 = typeof "boolean";
    // v6 = .string
    const v8 = v6 === "boolean";
    // v8 = .boolean
    const v9 = eval(v4);
    // v9 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
} catch(v10) {
}
}
%NeverOptimizeFunction(main);
main();
