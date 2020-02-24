function main() {
(128).__proto__ = 128;
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
}
%NeverOptimizeFunction(main);
main();
