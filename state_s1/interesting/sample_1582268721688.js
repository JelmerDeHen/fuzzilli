function main() {
const v5 = {constructor:"symbol",length:9007199254740993};
// v5 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__"])
const v6 = Reflect.getOwnPropertyDescriptor(v5,-4294967296);
// v6 = .unknown
let v11 = 0;
let v16 = 0;
}
%NeverOptimizeFunction(main);
main();
