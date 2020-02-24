function main() {
let v2 = 165041.8007016254;
const v6 = String.fromCharCode(v2,255);
// v6 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
const v7 = Function(v6);
// v7 = .unknown
delete "matchAll"[v7];
}
%NeverOptimizeFunction(main);
main();
