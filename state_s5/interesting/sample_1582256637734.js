function main() {
const v2 = {constructor:"symbol",length:9007199254740993};
// v2 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"])
const v8 = Reflect.preventExtensions(v2);
// v8 = .boolean
v2[1337] = "object";
}
%NeverOptimizeFunction(main);
main();
