function main() {
const v10 = {constructor:"symbol",length:9007199254740993};
// v10 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"])
const v32 = Reflect.getOwnPropertyDescriptor(v10,"symbol");
// v32 = .unknown
const v33 = ~1337;
// v33 = .boolean
let v51 = 0;
}
%NeverOptimizeFunction(main);
main();
