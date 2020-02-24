function main() {
const v1 = {constructor:"symbol",length:"symbol"};
// v1 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__"])
const v3 = Reflect.preventExtensions(v1);
// v3 = .boolean
}
%NeverOptimizeFunction(main);
main();
