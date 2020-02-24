function main() {
const v2 = -653507721 % String;
// v2 = .number
let v3 = String;
const v4 = String.fromCharCode(v3,v2);
// v4 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
for (const v11 of v4) {
    try {
        const v12 = String.fromCodePoint(v11,v2);
        // v12 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
    } catch(v13) {
    }
}
}
%NeverOptimizeFunction(main);
main();
