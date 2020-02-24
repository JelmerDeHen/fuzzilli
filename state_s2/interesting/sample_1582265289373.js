function main() {
function v1(v2,v3) {
    const v4 = v3 / v3;
    // v4 = .number
    const v7 = eval(1337);
    // v7 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
}
for (let v12 = 0; v12 < 100; v12++) {
    const v13 = v1("boolean",1337);
    // v13 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
