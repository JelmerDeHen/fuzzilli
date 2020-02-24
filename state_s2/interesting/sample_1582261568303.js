function main() {
const v2 = -653507721 % String;
// v2 = .number
let v3 = String;
const v4 = String.fromCharCode(v3,v2);
// v4 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
for (const v11 of v4) {
    try {
        const v12 = String.fromCodePoint(v11,v2);
        // v12 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
    } catch(v13) {
    }
}
}
%NeverOptimizeFunction(main);
main();
