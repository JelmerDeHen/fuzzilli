function main() {
const v1 = {};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v2 = v1.__proto__;
// v2 = .object()
const v4 = typeof 3488870410;
// v4 = .string
const v6 = v4 === "string";
// v6 = .boolean
v2.length = -2477193724;
}
%NeverOptimizeFunction(main);
main();
