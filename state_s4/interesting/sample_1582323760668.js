function main() {
const v2 = String.fromCharCode(13.37,13.37);
// v2 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
try {
    const v4 = JSON.parse(v2);
    // v4 = .unknown
} catch(v5) {
}
}
%NeverOptimizeFunction(main);
main();
