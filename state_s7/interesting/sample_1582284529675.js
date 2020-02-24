function main() {
let v1 = "7R3nKGaB0M";
const v2 = v1.__proto__;
// v2 = .object()
const v5 = {valueOf:JSON,length:1};
// v5 = .object(ofGroup: Object, withProperties: ["valueOf", "length", "__proto__"])
JSON[v5] = v2;
const v8 = JSON.stringify(JSON,JSON,1337);
// v8 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
}
%NeverOptimizeFunction(main);
main();
