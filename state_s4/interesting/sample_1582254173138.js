function main() {
let v4 = 0;
const v5 = v4 + 1;
// v5 = .primitive
v4 = v5;
delete Array.prototype;
}
%NeverOptimizeFunction(main);
main();
