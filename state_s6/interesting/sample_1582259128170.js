function main() {
gc.prototype = gc;
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
}
%NeverOptimizeFunction(main);
main();
