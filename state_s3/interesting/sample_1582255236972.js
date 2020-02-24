function main() {
let v2 = 0;
const v6 = v2 + 1;
// v6 = .primitive
v2 = v6;
const v9 = {length:"symbol",length:9007199254740993};
// v9 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
delete v9.length;
}
%NeverOptimizeFunction(main);
main();
