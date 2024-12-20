#include<stdio.h>

int main(){ 

    
    //printf("\"I like celeste!\" - Herambh surely\n\n");
    //printf("\"I'm kinda bad...\" - hazel");

    int age = 21;
    float gpa = 2.05;
    char grade = 'C';
    char name[] = "hazel";

    printf("Name: %s \tAge: %d \tGpa: %f \tGrade: %c\n", name, age, gpa, grade);

    int gay;

    gay = scanf("");

    while (gay) {
        if (gay == 3) {
            printf("NAHHH");
        } else {
            printf("AAAA");
        };
    };
    
    return 0;
}