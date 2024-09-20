// Basic Input/Output in C++

// C++ comes with libraries which helps us in performing input/output. In C++
// sequence of bytes corresponding to input and output are commonly known as STREMS.

// INPUT STREAMS :
// Direction of flow of bytes takes place  from input device(for ex keyboard) to the main memory.

// OUTPUT STREAMS :
// Direction of flow of bytes takes place form main memory to the ouput device(for ex Display)

#include <iostream>
using namespace  std;

int main()
{
    int num1,num2;
    cout << "Enter the value of num1:\n";
// '<<' this is called insertion operator.
    cin >> num1;
// '>>' this is called extraction operator.
    cout << "Enter the value of num2:\n";
    cin >> num2;

    cout << "The sum is : "<< num1+num2 <<"\n";
    return 0;
}
