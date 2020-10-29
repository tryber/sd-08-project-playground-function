let mouse = 5, cat1 = 2, cat2 = 3, dist1 = 0, dist2 = 0;

dist1=mouse-cat1;
dist2=mouse-cat2;

if (dist1<dist2){
    console.log("cat1");
} else if (dist2<dist1){
    console.log("cat2");
} else {
    console.log("os gatos trombam e o rato foge")
}
