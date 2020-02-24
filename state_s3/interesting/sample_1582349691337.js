function main() {
let v2 = -377090.66331994825;
const v6 = String.fromCharCode(v2,255);
// v6 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
const v7 = Function(v6);
// v7 = .unknown
let v10 = 0;
String.length = 1;
const v12 = v10 + 1;
// v12 = .primitive
v10 = v12;
const v13 = RegExp(v7);
// v13 = .object()
}
%NeverOptimizeFunction(main);
main();
