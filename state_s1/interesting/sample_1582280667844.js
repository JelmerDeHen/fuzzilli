function main() {
const v4 = {call:Object};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call"])
const v6 = new Proxy(Array,v4);
// v6 = .unknown
let v7 = v6;
const v8 = new v7(0);
// v8 = .object()
let v14 = 0;
}
%NeverOptimizeFunction(main);
main();
