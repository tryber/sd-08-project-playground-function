
function catAndMouse(mouse, cat1, cat2) {
    let distanciaGato1 = Math.abs(cat1 - mouse);
    let distanciaGato2 = Math.abs(cat2 - mouse);
    let catCloser = '';

    if (distanciaGato1 < distanciaGato2) {
        catCloser = 'cat1';
    } else if (distanciaGato1 > distanciaGato2) {
        catCloser = 'cat2';
    } else {
        catCloser = 'Os gatos trombam e o rato foge';
    }
    return catCloser
}




function catAndMouse(mouse, cat1, cat2) {
    let catCloser = '';
    let distanciaGato1 = cat1 - mouse;
    let distanciaGato2 = cat2 - mouse;

    if (distanciaGato1 < 0) {
        distanciaGato1 = distanciaGato1 * (-1)
    }
    if (distanciaGato2 < 0) {
        distanciaGato2 = distanciaGato2 * (-1)
    }

    if (distanciaGato1 < distanciaGato2) {
        catCloser = 'cat1';
    } else if (distanciaGato1 > distanciaGato2) {
        catCloser = 'cat2';
    } else {
        catCloser = 'Os gatos trombam e o rato foge';
    }
    return catCloser
}


