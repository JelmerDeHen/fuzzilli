function main() {
const v2 = Number.__proto__;
// v2 = .unknown
const v4 = {get:parseFloat};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v6 = Object.defineProperty(v2,"b",v4);
// v6 = .undefined
}
%NeverOptimizeFunction(main);
main();
