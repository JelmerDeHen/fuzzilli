function main() {
let v5 = 165041.8007016254;
const v9 = String.fromCharCode(v5,255);
// v9 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
const v10 = Function(v9);
// v10 = .unknown
const v11 = RegExp(v10);
// v11 = .object()
}
%NeverOptimizeFunction(main);
main();
