function main() {
const v2 = -653507721 % String;
// v2 = .number
let v3 = String;
const v4 = String.fromCharCode(v3,v2);
// v4 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
for (const v11 of v4) {
    try {
        const v12 = String.fromCodePoint(v11,v2);
        // v12 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
    } catch(v13) {
    }
}
}
%NeverOptimizeFunction(main);
main();
