function main() {
const v4 = {deleteProperty:Symbol,getPrototypeOf:parseFloat,defineProperty:gc};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["defineProperty", "deleteProperty", "getPrototypeOf"])
const v6 = new Proxy(arguments,v4);
// v6 = .unknown
delete v6[2725206212];
let v9 = 0;
}
%NeverOptimizeFunction(main);
main();
