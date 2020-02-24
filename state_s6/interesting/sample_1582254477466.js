function main() {
const v73 = 1337 >= -0.0;
// v73 = .boolean
const v76 = ~1337;
// v76 = .boolean
let v89 = 0;
const v90 = v89 + 1;
// v90 = .primitive
v89 = v90;
let v98 = 0;
const v100 = v98 + 1;
// v100 = .primitive
v98 = v100;
}
%NeverOptimizeFunction(main);
main();
