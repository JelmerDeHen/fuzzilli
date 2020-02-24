function main() {
let v11 = 0;
do {
    let v41 = 0;
    const v42 = v41 + 1;
    // v42 = .primitive
    v41 = v42;
    const v53 = eval();
    // v53 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
    const v56 = v11 + 1;
    // v56 = .primitive
    v11 = v56;
} while (v11 < 6);
}
%NeverOptimizeFunction(main);
main();
