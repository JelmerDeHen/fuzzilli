function main() {
const v7 = {};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v8 = v7 & 0.0;
// v8 = .integer
let v16 = 0;
const v19 = v16 + 1;
// v19 = .primitive
v16 = v19;
}
%NeverOptimizeFunction(main);
main();
