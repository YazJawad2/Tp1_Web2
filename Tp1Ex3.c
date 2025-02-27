#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char nom[50];
    int numero;
    int stock;
    float prix;
}Arcticle;

void SaisieArticle(Arcticle* a){

    printf("\nsaisie le nom de l'article :");
    scanf("%s",&a->nom);

    printf("saisie le numero de l'article :");
    scanf("%d",&a->numero);

    printf("saisie le stock de l'article :");
    scanf("%d",&a->stock);

    printf("saisie le prix de l'article :");
    scanf("%.2f",&a->prix);

}

void AfficheArticle(Arcticle* a){
    printf("Nom : %s\n",a->nom);
    printf("Numero : %d\n",a->numero);
    printf("Stock : %d\n",a->stock);
    printf("Prix : %.2f dh\n",a->prix);
}

void SaisieTabArticle(Arcticle* tab, int n){
    for(int i=0; i<n; i++){
        printf("saisie l'article numero %d :\n", i+1);
        SaisieArticle(&tab[i]);
    }
}

void AfficheTabStock(Arcticle* tab, int q, int n){
    printf("la listes des articles a un stock superieur a %d :\n", q);
    for(int i = 0; i<n ; i++){
        if (tab[i].stock >= q)
        {
            AfficheArticle(&tab[i]);
        }
        printf("\n");
    }
}
int main(){
    Arcticle a;
    int n;
    int q;
    printf("Entrer le nombre d'articles a saisir : \n");
    scanf("%d",&n);

    Arcticle tab[n];
    SaisieTabArticle(tab, n);

    printf("entre la valeur q de stock pour chercher les articles superieur a cette derniere :\n");
    scanf("%d",&q);
    AfficheTabStock(tab, q, n);
    return 0;
}