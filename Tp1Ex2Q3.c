#include <stdio.h>
#include <stdlib.h>

typedef struct {
    float x;
    float y;
} Point;

void Barycentre(Point* dots, int n) {

    Point B = {0, 0};

    for (int i = 0; i < n; i++) {
        B.x += dots[i].x;
        B.y += dots[i].y;
    }

    B.x /= n;
    B.y /= n;

    printf("Le barycentre des points est (%.2f, %.2f)\n", B.x, B.y);
}

int main() {
    int n;

    printf("Entrez le nombre de points pour calculer le barycentre : ");
    scanf("%d", &n);

    Point dots[n];

    for (int i = 0; i < n; i++) {
        printf("Entrez les coordonnées du point %d (x y) : \n", i + 1);
        scanf("%f %f", &dots[i].x, &dots[i].y);
    }

    Barycentre(dots, n);

    return 0;
}
