function main() {
const v1 = {constructor:"symbol",length:"symbol"};
// v1 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__"])
const v3 = Reflect.preventExtensions(v1);
// v3 = .boolean
}
%NeverOptimizeFunction(main);
main();
