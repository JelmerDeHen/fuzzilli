function main() {
const v2 = {valueOf:127};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
const v9 = Object();
// v9 = .object()
const v11 = v9.__proto__;
// v11 = .unknown
const v12 = Reflect.setPrototypeOf(v11,v2);
// v12 = .boolean
}
%NeverOptimizeFunction(main);
main();
