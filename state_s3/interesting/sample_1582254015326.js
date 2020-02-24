function main() {
for (const v41 in Reflect) {
}
let v45 = 0;
const v46 = v45 + 1;
// v46 = .primitive
v45 = v46;
}
%NeverOptimizeFunction(main);
main();
