function main() {
try {
    const v3 = eval(1337);
    // v3 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
    const v4 = RegExp.apply(v3,1337);
    // v4 = .unknown
} catch(v5) {
}
}
%NeverOptimizeFunction(main);
main();
