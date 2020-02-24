function main() {
const v2 = -653507721 % String;
// v2 = .number
let v3 = String;
const v4 = String.fromCharCode(v3,v2);
// v4 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
for (const v11 of v4) {
    try {
        const v12 = String.fromCodePoint(v11,v2);
        // v12 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
    } catch(v13) {
    }
}
}
%NeverOptimizeFunction(main);
main();
