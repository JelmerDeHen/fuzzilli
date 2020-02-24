function main() {
const v2 = {setPrototypeOf:parseInt,set:parseInt,deleteProperty:parseInt,getOwnPropertyDescriptor:parseInt};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "setPrototypeOf", "set", "getOwnPropertyDescriptor"])
const v4 = new Proxy(parseInt,v2);
// v4 = .unknown
v4.__proto__ = "replace";
}
%NeverOptimizeFunction(main);
main();
