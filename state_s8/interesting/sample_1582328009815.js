function main() {
function v0(v1,v2) {
    const v4 = v0.toLocaleString();
    // v4 = .unknown
    for (let v8 = 0; v8 < 100; v8++) {
        const v9 = eval(v4);
        // v9 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
    }
}
const v10 = v0();
// v10 = .unknown
}
%NeverOptimizeFunction(main);
main();
