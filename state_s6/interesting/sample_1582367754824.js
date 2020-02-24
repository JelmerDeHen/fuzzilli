function main() {
try {
    const v4 = String.fromCharCode(1000000000000.0,-3789366927);
    // v4 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
    const v6 = typeof "boolean";
    // v6 = .string
    const v8 = v6 === "boolean";
    // v8 = .boolean
    const v9 = eval(v4);
    // v9 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
} catch(v10) {
}
}
%NeverOptimizeFunction(main);
main();
