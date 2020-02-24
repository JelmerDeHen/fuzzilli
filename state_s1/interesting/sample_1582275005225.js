function main() {
const v2 = Symbol.toStringTag;
// v2 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v3 = Symbol[v2];
// v3 = .unknown
const v4 = {getPrototypeOf:v3,get:v3};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "get", "getPrototypeOf"])
const v6 = new Proxy(eval,v4);
// v6 = .unknown
for (const v8 in "boolean") {
    for (let v13 = 0; v13 < 100; v13++) {
    }
    this.__proto__ = v6;
}
}
%NeverOptimizeFunction(main);
main();
