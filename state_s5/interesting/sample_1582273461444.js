function main() {
const v2 = -653507721 % String;
// v2 = .number
try {
    const v4 = String.fromCodePoint(65535,v2);
    // v4 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
} catch(v5) {
}
}
%NeverOptimizeFunction(main);
main();
