function main() {
const v2 = {};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v5 = 2147483649;
const v9 = Reflect.preventExtensions(v2);
// v9 = .boolean
let v12 = 0;
const v16 = v12 + 1;
// v16 = .primitive
v12 = v16;
}
%NeverOptimizeFunction(main);
main();
