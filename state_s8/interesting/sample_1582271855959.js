function main() {
const v2 = Symbol.unscopables;
// v2 = .unknown
let v6 = undefined;
let v10 = 0;
try {
    let v13 = 0;
    const v14 = "hasInstance".charAt(v2);
    // v14 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
} catch(v15) {
}
const v16 = v10 + 1;
// v16 = .primitive
v10 = v16;
}
%NeverOptimizeFunction(main);
main();
