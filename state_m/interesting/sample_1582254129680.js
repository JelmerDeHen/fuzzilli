function main() {
const v1 = "object".constructor;
// v1 = .function()
const v4 = Reflect.__proto__;
// v4 = .unknown
const v7 = {set:v1,get:v1};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
const v9 = Object.defineProperty(v4,-65536,v7);
// v9 = .undefined
"symbol".length = 7;
}
%NeverOptimizeFunction(main);
main();
