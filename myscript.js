function openTab(evt, tabName) {
    var i, fau, mbutton;
    fau = document.getElementsByClassName("fau");
    for (i = 0; i < fau.length; i++)
    {
        fau[i].style.display="none";

    }
    mbutton=document.getElementsByClassName("mbutton");
    for (i = 0; i < mbutton.length; i++) {
        mbutton[i].className = mbutton[i].className.replace(" active", "");
      }
      document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}




