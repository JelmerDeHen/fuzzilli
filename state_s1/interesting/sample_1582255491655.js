function main() {
const v3 = RegExp.bind("eeeRbEqfAO",65537,"eeeRbEqfAO",RegExp);
// v3 = .unknown
v3.__proto__ = RegExp;
}
%NeverOptimizeFunction(main);
main();
