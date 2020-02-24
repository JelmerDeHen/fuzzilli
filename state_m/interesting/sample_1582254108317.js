function main() {
const v7 = {constructor:"symbol",length:9007199254740993};
// v7 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__"])
const v12 = {constructor:"symbol",length:Reflect};
// v12 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__"])
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
Reflect.toString = gc;
const v18 = v7[Reflect];
// v18 = .unknown
let v21 = 0;
const v22 = v21 + 1;
// v22 = .primitive
v21 = v22;
}
%NeverOptimizeFunction(main);
main();
