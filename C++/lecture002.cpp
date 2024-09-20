// C++ was created in 1979 by Bjarne Straustrope
// It was a extension of C 

// Advantages : 
// Fast Programming
// More Control over system resources
// Memory Management
// High performance

// Major Updates :
// 2011 --> C++11
// 2014 --> C++14
// 2017 --> C++17

//BASIC STRUCTURE OF A C++ PROGRAM

#include<iostream>
//It indicates that a header file named iostream exists and suggests that the compiler should use the required functionality in the program
//io --> uses basic input output functions
int main()
//this is the function that serves as a entry point to the program
//the execution of the program begins at main
//the return type of this particular main function is int.It can be void too.
//the () show that this is a function
{
    std::cout << "Hello World\n";
//using namespace tells the compiler that from which library we are using the function
//:: this is the scope resolution operator
    return 0;
//return 0 denotes the successful termination of the program
//we are sending this 0 to the operating system
}
//the curly braces show the starting and ending point of a function