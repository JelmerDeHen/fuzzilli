function main() {
const v10 = {constructor:"symbol",length:9007199254740993};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor"])
const v22 = new Object();
// v22 = .object()
delete v10[9007199254740993];
}
%NeverOptimizeFunction(main);
main();
