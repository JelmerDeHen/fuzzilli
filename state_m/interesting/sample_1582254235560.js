function main() {
const v3 = {constructor:"symbol",length:9007199254740993};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"])
const v5 = Reflect.getOwnPropertyDescriptor(v3,9007199254740993);
// v5 = .unknown
let v15 = 0;
let v21 = 0;
const v22 = v21 + 1;
// v22 = .primitive
v21 = v22;
let v25 = 0;
const v26 = v25 + 1;
// v26 = .primitive
v25 = v26;
}
%NeverOptimizeFunction(main);
main();
