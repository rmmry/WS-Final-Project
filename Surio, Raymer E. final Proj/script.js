const bar=document.getElementByID("bar");
const nav=document.getElementByID("navbar")
if (bar){
    bar.addEventListener("click",() =>{
        nav.ClassList.add('active');
    })
}