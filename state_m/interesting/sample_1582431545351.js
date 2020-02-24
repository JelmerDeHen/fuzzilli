function main() {
const v1 = {};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v4 = 0;
const v5 = !v4;
// v5 = .boolean
const v6 = v1.__proto__;
// v6 = .object()
const v8 = {get:gc,set:gc};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
const v10 = Object.defineProperty(v6,"d",v8);
// v10 = .undefined
let v13 = 0;
const v14 = v13 + 1;
// v14 = .primitive
v13 = v14;
"MIN_SAFE_INTEGER".d = v5;
}
%NeverOptimizeFunction(main);
main();
