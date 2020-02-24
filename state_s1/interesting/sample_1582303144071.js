function main() {
const v3 = String.fromCharCode(13.37,-3789366927);
// v3 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
try {
    const v5 = JSON.parse(v3);
    // v5 = .unknown
} catch(v6) {
}
let v9 = 0;
let v12 = 0;
const v13 = v12 + 1;
// v13 = .primitive
v12 = v13;
const v14 = v9 + 1;
// v14 = .primitive
v9 = v14;
}
%NeverOptimizeFunction(main);
main();
