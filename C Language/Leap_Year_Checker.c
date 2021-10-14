// Leap Year Checker using C
# include<stdio.h>

int main()
{
    int year;
    printf("Enter any year of your choice : ");
    scanf("%d",&year);
    if (( year%400 == 0) || (( year%4 == 0 ) && ( year%100 != 0)))
    printf("Hurray !! This is a Leap year");
    else
    printf("No !! This is Not a Leap Year");
    return 0;
}
