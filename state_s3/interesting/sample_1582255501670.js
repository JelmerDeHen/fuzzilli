function main() {
const v3 = {constructor:"symbol",length:9007199254740993};
// v3 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__"])
const v4 = ~Reflect;
// v4 = .boolean
const v5 = {};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v6 = Reflect.getOwnPropertyDescriptor(v3,v5);
// v6 = .unknown
}
%NeverOptimizeFunction(main);
main();
