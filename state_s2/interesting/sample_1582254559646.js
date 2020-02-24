function main() {
const v1 = {constructor:"symbol",length:"symbol"};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"])
const v3 = Reflect.preventExtensions(v1);
// v3 = .boolean
}
%NeverOptimizeFunction(main);
main();
