function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
v0.__proto__ = Object;
const v2 = v0.freeze();
// v2 = .unknown
}
%NeverOptimizeFunction(main);
main();
