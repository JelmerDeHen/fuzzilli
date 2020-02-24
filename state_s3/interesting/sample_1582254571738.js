function main() {
Reflect.valueOf = Reflect;
Reflect.constructor = 9007199254740993;
}
%NeverOptimizeFunction(main);
main();
