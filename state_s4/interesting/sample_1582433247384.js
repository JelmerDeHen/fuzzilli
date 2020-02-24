function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v3 = 0;
const v4 = !v3;
// v4 = .boolean
const v5 = v0.__proto__;
// v5 = .object()
const v7 = {get:gc,set:gc};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
const v9 = Object.defineProperty(v5,"d",v7);
// v9 = .undefined
let v11 = 0;
v11.d = v4;
}
%NeverOptimizeFunction(main);
main();
