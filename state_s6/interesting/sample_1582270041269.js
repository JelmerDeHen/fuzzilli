function main() {
const v4 = {constructor:"symbol",length:9007199254740993};
// v4 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length"])
const v5 = Reflect.getOwnPropertyDescriptor(v4,-4294967295);
// v5 = .unknown
}
%NeverOptimizeFunction(main);
main();
