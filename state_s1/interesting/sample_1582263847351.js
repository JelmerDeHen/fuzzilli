function main() {
let v3 = "symbol";
const v4 = {isExtensible:Array,ownKeys:v3};
// v4 = .object(ofGroup: Object, withProperties: ["ownKeys", "__proto__"], withMethods: ["isExtensible"])
const v6 = new Proxy(gc,v4);
// v6 = .unknown
const v9 = Symbol.replace;
// v9 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
delete v6[v9];
let v12 = 0;
const v13 = v12 + 1;
// v13 = .primitive
v12 = v13;
let v17 = 0;
let v20 = 0;
}
%NeverOptimizeFunction(main);
main();
