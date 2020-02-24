function main() {
const v2 = Symbol.e;
// v2 = .unknown
const v3 = Symbol[v2];
// v3 = .unknown
const v4 = {getPrototypeOf:v3,get:v3};
// v4 = .object(ofGroup: Object, withProperties: ["getPrototypeOf", "__proto__", "get"])
const v6 = new Proxy(Reflect,v4);
// v6 = .unknown
Object.__proto__ = v6;
let v9 = Promise;
let v10 = v9;
const v13 = new Proxy(v10,Object);
// v13 = .unknown
const v14 = Object.freeze(v13);
// v14 = .undefined
let v18 = undefined;
const v19 = 0 in v14;
// v19 = .boolean
}
%NeverOptimizeFunction(main);
main();
