function main() {
let v2 = undefined;
const v4 = gc(...arguments);
// v4 = .undefined
}
%NeverOptimizeFunction(main);
main();
