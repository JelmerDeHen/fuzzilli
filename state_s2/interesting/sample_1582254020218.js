function main() {
let v4 = 0;
const v5 = v4 + 1;
// v5 = .primitive
v4 = v5;
const v6 = (13.37)[1];
// v6 = .unknown
}
%NeverOptimizeFunction(main);
main();
