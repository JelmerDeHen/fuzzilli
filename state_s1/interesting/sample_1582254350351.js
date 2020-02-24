function main() {
const v2 = "N0Xx92zvHQ".__proto__;
// v2 = .object()
let v3 = v2;
const v5 = {set:Number,get:Number};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
const v7 = Object.defineProperty(v3,-3823858990,v5);
// v7 = .undefined
let v10 = 0;
const v11 = v10 + 1;
// v11 = .primitive
v10 = v11;
}
%NeverOptimizeFunction(main);
main();
