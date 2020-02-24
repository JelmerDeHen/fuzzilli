function main() {
const v1 = {constructor:"symbol",length:"symbol"};
// v1 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"])
const v3 = Reflect.preventExtensions(v1);
// v3 = .boolean
}
%NeverOptimizeFunction(main);
main();
