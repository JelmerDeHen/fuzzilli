function main() {
function v5(v6,v7) {
    const v8 = Number.isSafeInteger(0);
    // v8 = .boolean
    let v11 = 0;
    const v15 = v11 + 1;
    // v15 = .primitive
    v11 = v15;
    const v18 = eval(1337);
    // v18 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
}
for (let v23 = 0; v23 < 100; v23++) {
    const v24 = v5("boolean",1337);
    // v24 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
