#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>

typedef struct{
    float x;
    float y;

}Point;

void distance_point(Point *p1, Point *p2){
    float distance;
    distance = sqrt(pow(p2->x-p1->x, 2) + pow(p2->y-p1->y, 2));
    printf("la distance entre ces pointes est %.2f", distance);
    

}
void afficher_Point(Point *p1 ){
    printf("les coordonnes de ce pointe p1 est %.2f, %.2f", p1->x, p1->y);

}
int main (){
    Point p1, p2;
    
    printf("entre les valeur de p1\n");
    scanf("%f %f", &p1.x, &p1.y);
    
    printf("entre les valeur de p2\n");
    scanf("%f %f", &p2.x, &p2.y);

    afficher_Point(&p1);

    printf("\n");

    distance_point(&p1, &p2);

    printf("\n");

    return 0 ;
}