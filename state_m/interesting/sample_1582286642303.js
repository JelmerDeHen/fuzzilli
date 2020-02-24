function main() {
let v3 = 0;
let v6 = 0;
const v9 = Symbol.e;
// v9 = .unknown
const v10 = Symbol[v9];
// v10 = .unknown
const v11 = {getPrototypeOf:v10,get:v10};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "get", "getPrototypeOf"])
const v13 = new Proxy(Reflect,v11);
// v13 = .unknown
for (const v15 in "boolean") {
    Object[8] = Reflect;
    for (let v20 = 0; v20 < 100; v20++) {
    }
    Object.__proto__ = v13;
}
}
%NeverOptimizeFunction(main);
main();
