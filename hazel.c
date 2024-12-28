#include<stdio.h>
#include<math.h>
#include<string.h>

int main(){
	char name[10];
    int des;
    double num;
    double result;

    printf("What would you like to do? ");
    scanf("%d", &des);

    if (des == 35) {
        printf("\nName? ");
        scanf("%s", name);
        printf("\nWelcome %s!\n\n", name);
    }
    else if (des == 1) {
        printf("\nNumber: ");
        scanf("%lf", &num);
        result = sqrt(num);
        printf("The square root of %0.2lf is %0.2lf.\n\n", num, result);
    }

	return 0;
}

//anwdiuoawnduioawduiawdi
