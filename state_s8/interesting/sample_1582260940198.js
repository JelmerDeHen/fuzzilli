function main() {
let v5 = undefined;
const v7 = {length:"N0Xx92zvHQ"};
// v7 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v8 = v7.__proto__;
// v8 = .object()
const v15 = {constructor:"symbol",length:9007199254740993};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"])
let v18 = 0;
v8[4294967296] = 13.37;
const v22 = v18 + 1;
// v22 = .primitive
v18 = v22;
}
%NeverOptimizeFunction(main);
main();
