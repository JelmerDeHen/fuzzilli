function main() {
const v2 = "MOjsAQs5Xr".constructor;
// v2 = .function()
const v5 = v2 || 10;
// v5 = .boolean
const v6 = new v2(v5,v5,v2,"MOjsAQs5Xr",4294967297);
// v6 = .object()
const v8 = {set:v2,get:v2};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
const v10 = Object.defineProperty(v6,4164228577,v8);
// v10 = .undefined
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
const v14 = gc();
// v14 = .undefined
v6[7] = v14;
}
%NeverOptimizeFunction(main);
main();
