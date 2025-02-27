#include <stdio.h>
#include <string.h>
#include <stdlib.h>
int Occurence(char charactere, char* string ){
    char* p = string;
    int compteur=0;
    while (*p != '\0')
    {
        if (charactere==*p)
        {
            compteur+=1;    
        }
        p++;
    }
    return compteur;
}

int main(){
    char string[100];
    char charactere;
    int nbroccurence;

    printf("entrer une chaine de character :\n");
    gets(string);

    printf("entrer un character pour compter :\n");
    scanf("%c", &charactere);

    nbroccurence = Occurence(charactere,string);

    printf("le nombre de character %c dnas cette chaine est %d", charactere, nbroccurence);

    return 0 ;

}