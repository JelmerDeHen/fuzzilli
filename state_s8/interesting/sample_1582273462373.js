function main() {
const v2 = -653507721 % String;
// v2 = .number
try {
    const v4 = String.fromCodePoint(65535,v2);
    // v4 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
} catch(v5) {
}
}
%NeverOptimizeFunction(main);
main();