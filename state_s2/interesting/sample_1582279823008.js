function main() {
const v4 = {constructor:"symbol",length:9007199254740993};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor"])
const v5 = Reflect.getOwnPropertyDescriptor(v4,9007199254740992);
// v5 = .unknown
}
%NeverOptimizeFunction(main);
main();
