function catAndMouse(mouse, cat1, cat2) {
  let cat1Xmouse = Math.abs(cat1 - mouse)
  let cat2Xmouse = Math.abs(cat1 - mouse)

  if (cat1Xmouse < cat2Xmouse) {
    return "cat1"
    console.log("cat1")
  }else if (cat2Xmouse < cat1Xmouse) {
    return "cat2"
    console.log("cat2")
  } else {
    return "os gatos trombam e o rato foge"
    console.log("os gatos trombam e o rato foge")
  }
  

} catAndMouse(5,3,8)