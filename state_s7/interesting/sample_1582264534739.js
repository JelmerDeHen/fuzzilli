function main() {
const v1 = "wJ1*MiGeyU".constructor;
// v1 = .function()
const v2 = {construct:v1,defineProperty:v1,get:v1,apply:v1,set:v1,deleteProperty:v1,getOwnPropertyDescriptor:v1};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "apply", "construct", "defineProperty", "get", "deleteProperty", "getOwnPropertyDescriptor"])
const v4 = new Proxy(v1,v2);
// v4 = .unknown
const v6 = {get:v1};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v8 = Object.defineProperty(v4,"length",v6);
// v8 = .undefined
}
%NeverOptimizeFunction(main);
main();
