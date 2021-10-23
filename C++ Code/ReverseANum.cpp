#include <iostream>
using namespace std;

int main() {
    int n, reversedNumber = 0, remainder;

    // Input a number
    cout << "Enter an integer: ";
    cin >> n;

    // The while loop is iterated until n != 0 is false.
    // the remainder when the value of n is divided by 10 is calculated
    // reversedNumber is computed and the value of n is decreased 10 fold
    while(n != 0) {
        remainder = n%10;
        reversedNumber = reversedNumber*10 + remainder;
        n /= 10;
    }

    // Output Displayed
    cout << "Reversed Number = " << reversedNumber;

    return 0;
}
