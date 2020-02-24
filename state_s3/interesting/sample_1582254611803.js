function main() {
Reflect.d = 1337;
Reflect[2147483648] = "symbol";
}
%NeverOptimizeFunction(main);
main();
