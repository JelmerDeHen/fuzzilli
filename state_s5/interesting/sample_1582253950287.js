function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
delete "object".constructor;
}
%NeverOptimizeFunction(main);
main();
