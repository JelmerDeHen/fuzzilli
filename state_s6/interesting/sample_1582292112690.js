function main() {
const v2 = Symbol.e;
// v2 = .unknown
const v3 = Symbol[v2];
// v3 = .unknown
const v4 = {getPrototypeOf:v3,get:v3};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "getPrototypeOf", "get"])
const v6 = new Proxy(Reflect,v4);
// v6 = .unknown
Object.__proto__ = v6;
let v13 = Promise;
let v14 = v13;
const v17 = new Proxy(v14,Object);
// v17 = .unknown
const v18 = Object.freeze(v17);
// v18 = .undefined
}
%NeverOptimizeFunction(main);
main();
