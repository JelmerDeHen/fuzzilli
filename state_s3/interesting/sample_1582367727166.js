function main() {
try {
    const v4 = String.fromCharCode(1000000000000.0,-3789366927);
    // v4 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
    const v6 = typeof "boolean";
    // v6 = .string
    const v8 = v6 === "boolean";
    // v8 = .boolean
    const v9 = eval(v4);
    // v9 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
} catch(v10) {
}
}
%NeverOptimizeFunction(main);
main();
