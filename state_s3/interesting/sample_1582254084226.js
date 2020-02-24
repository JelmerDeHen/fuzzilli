function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
let v14 = 0;
const v18 = {__proto__:13.37};
// v18 = .object(ofGroup: Object, withProperties: ["__proto__"])
delete v18.__proto__;
}
%NeverOptimizeFunction(main);
main();
