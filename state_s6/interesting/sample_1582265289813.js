function main() {
function v1(v2,v3) {
    const v4 = v3 / v3;
    // v4 = .number
    const v7 = eval(1337);
    // v7 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
}
for (let v12 = 0; v12 < 100; v12++) {
    const v13 = v1("boolean",1337);
    // v13 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
