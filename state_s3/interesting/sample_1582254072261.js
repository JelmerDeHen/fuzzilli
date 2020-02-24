function main() {
const v29 = (13.37).constructor;
// v29 = .unknown
let v45 = 0;
const v46 = v45 + 1;
// v46 = .primitive
v45 = v46;
}
%NeverOptimizeFunction(main);
main();
