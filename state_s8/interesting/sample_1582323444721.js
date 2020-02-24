function main() {
function v1(v2,v3,v4,v5,...v6) {
    const v8 = v1.toLocaleString();
    // v8 = .unknown
    const v9 = eval(v8);
    // v9 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
    let v12 = 0;
    const v13 = v12 + 1;
    // v13 = .primitive
    v12 = v13;
    let v16 = 0;
    const v17 = v16 + 1;
    // v17 = .primitive
    v16 = v17;
}
const v20 = v1(1337);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
