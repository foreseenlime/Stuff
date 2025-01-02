#include<stdio.h>
#include<math.h>
#include<string.h>

int main(){
	char name[10];
    int des;
    double num;
    double num2;
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
    else if (des == 2) {
        printf("\nAverage cost of items? ");
        scanf("%lf", &num);
        printf("Average daily number of customers / items brought? ");
        scanf("%lf", &num2);
        
        result = (num * num2) * 365;
        printf("\nAverage yearly moneys= $%0.1lf\n\n", result);
    }
    else if (des == 450) {
        printf("\nBody=1, social=2, general=3, future=4, coping=5");
        printf("\nWhat kind? ");
        scanf("%lf", &num);
        if (num == 1) {
            printf("\n\n---------------------\n\n");
            printf("Remember how feminine you look in the mirror, with your hair and everything done up. \nYou look more feminine than some cis women you have seen before.");
            printf("\nYou don't have to worry about your forehead, or jawline, or eyebrows. \nThose all just add you your immense beauty, Hazel.\n\n");
        }
        else if (num == 2) {
            printf("\n\n---------------------\n\n");
            printf("There are plenty of women who have guy friend groups.\n");
            printf("Also, it is completely understandable if you don't figure out how to socialise with women, \nas that would also be a common issue among socially anxious trans women, ");
            printf("\nlike you, Hazel.\n\n");
        }
        else if (num == 3) {
            printf("\n\n---------------------\n\n");
            printf("Remember that you are loved for who you are, not what you look like.\n");
            printf("If you really think about, nobody is going to notice the little pricks of hair coming out of your face or legs.\n");
            printf("There is nothing to worry about, Hazel.\n");
            printf("Take it off your mind with some music, or a walk in the park.\n\n");
        }
        else if (num == 4) {
            printf("\n\n---------------------\n\n");
            printf("Don't worry about the future. Your family loves you no matter what, \n");
            printf("there are people out there who can help you if you really need it \n");
            printf("You are strong enough, and you will be able to persevere through anything, Hazel.\n\n");
        }
        else if (num == 5) {
            printf("\n\n---------------------\n\n");
            printf("- Find a youtube video to watch, e.g. a coding tutorial, daily dose of internet\n");
            printf("- Play a video game, e.g. webfishing, minecraft, roblox\n");
            printf("- Read a book, e.g. the hobbit, dog man\n");
            printf("- Take a walk around the park with some music\n\n");
        } 
    }

	return 0;
}
