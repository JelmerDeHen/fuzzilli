function main() {
function v0(v1,v2) {
    const v4 = v0.toLocaleString();
    // v4 = .unknown
    for (let v8 = 0; v8 < 100; v8++) {
        const v9 = eval(v4);
        // v9 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
    }
}
const v10 = v0();
// v10 = .unknown
}
%NeverOptimizeFunction(main);
main();
