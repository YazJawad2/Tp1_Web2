#include <stdio.h>

int rev(char *table, int size){

char *debut = table;
char *fin = table + size-1;

while (debut < fin)
{
    char tmp = *debut;
    *debut = *fin;
    *fin = tmp;
    debut++;
    fin--;
}

}

int main() {
    int size;

    printf("Entrer la taille de la chaîne : ");
    scanf("%d", &size);
    
    getchar(); 

    char table[100]; 

    printf("Entrer une chaîne de caractères : ");
    fgets(table, size + 1, stdin);

    printf("Tableau avant inversion : %s\n", table);
    
    rev(table, size);
    
    printf("Tableau après inversion : %s\n", table);

    return 0;
}
