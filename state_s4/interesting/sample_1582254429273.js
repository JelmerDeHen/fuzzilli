function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
for (const v1 in v0) {
}
let v4 = 0;
const v5 = v4 + 1;
// v5 = .primitive
v4 = v5;
}
%NeverOptimizeFunction(main);
main();
