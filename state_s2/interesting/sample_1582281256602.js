function main() {
const v1 = {};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v3 = new Proxy(Function,v1);
// v3 = .unknown
const v4 = new v3();
// v4 = .object()
}
%NeverOptimizeFunction(main);
main();
