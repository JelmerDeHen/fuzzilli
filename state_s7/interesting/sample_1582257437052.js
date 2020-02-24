function main() {
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
delete this.a;
}
%NeverOptimizeFunction(main);
main();
