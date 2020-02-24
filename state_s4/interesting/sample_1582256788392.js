function main() {
const v1 = {c:-256};
// v1 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
let v4 = 0;
v1[0] = 9;
const v5 = v4 + 1;
// v5 = .primitive
v4 = v5;
v1[2078863873] = v4;
}
%NeverOptimizeFunction(main);
main();
