function main() {
const v3 = Reflect.construct(WeakSet,gc,gc);
// v3 = .unknown
}
%NeverOptimizeFunction(main);
main();
