function main() {
const v10 = {constructor:"symbol",length:9007199254740993};
// v10 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"])
const v22 = {constructor:"symbol",length:Reflect};
// v22 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__"])
const v46 = 0 * 13.37;
// v46 = .number
v10[1337] = "object";
}
%NeverOptimizeFunction(main);
main();
