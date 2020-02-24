function main() {
let v8 = undefined;
for (let v10 = undefined; v10 != undefined; v10++) {
}
let v54 = 129;
const v55 = v54 + 1;
// v55 = .primitive
v54 = v55;
}
%NeverOptimizeFunction(main);
main();
