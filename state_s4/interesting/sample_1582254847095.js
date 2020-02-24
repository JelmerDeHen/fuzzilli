function main() {
const v4 = {constructor:"symbol",length:9007199254740993};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"])
const v8 = Reflect.getOwnPropertyDescriptor(v4,7);
// v8 = .unknown
let v15 = 0;
}
%NeverOptimizeFunction(main);
main();
