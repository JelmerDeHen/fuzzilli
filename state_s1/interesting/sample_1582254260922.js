function main() {
const v14 = {c:13.37};
// v14 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
v14.valueOf = arguments;
}
%NeverOptimizeFunction(main);
main();
