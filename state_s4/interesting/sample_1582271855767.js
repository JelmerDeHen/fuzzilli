function main() {
const v2 = Symbol.unscopables;
// v2 = .unknown
let v6 = undefined;
let v10 = 0;
try {
    let v13 = 0;
    const v14 = "hasInstance".charAt(v2);
    // v14 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
} catch(v15) {
}
const v16 = v10 + 1;
// v16 = .primitive
v10 = v16;
}
%NeverOptimizeFunction(main);
main();