#include <iostream>     // std::cout
#include <functional>   // std::minus
#include <numeric>      // std::accumulate

int myfunction (int x, int y) {return x+y*5;}
struct myclass {
    bool operator()(int x) {return x>5;}//500
    int operator()(int x, int y) {return x+10*y;}//600
} myobject;

int main () {
    int init = 0;
    int numbers[] = {10,20,30,40};
    
    std::cout << "using default accumulate: ";
    std::cout << std::accumulate(numbers,numbers+3,init);
    std::cout << '\n';
    
    std::cout << "using functional's minus: ";
    std::cout << std::accumulate (numbers, numbers+3, init, std::minus<int>());
    std::cout << '\n';
    
    std::cout << "using custom function: ";
    std::cout << std::accumulate (numbers, numbers+3, init, myfunction);
    std::cout << '\n';
    
    std::cout << "using custom object: ";
    std::cout << std::max_element (numbers, numbers+3, myobject);
    std::cout << '\n';
    
    return 0;
}

