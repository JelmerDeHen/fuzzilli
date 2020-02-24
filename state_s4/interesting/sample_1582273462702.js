function main() {
const v2 = -653507721 % String;
// v2 = .number
try {
    const v4 = String.fromCodePoint(65535,v2);
    // v4 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
} catch(v5) {
}
}
%NeverOptimizeFunction(main);
main();
