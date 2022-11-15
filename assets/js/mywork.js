// document.querySelector("#block1work").addEventListener("mouseenter",block1Fun);
block1Fun();

function block1Fun(){
    let container=document.querySelector("#kickStarterBlock");
    container.innerHTML=`<p> Crowdfunding platfrom focused on creativity and bringing them to life.</p> <h5>Tech Stack: <span class="smallSize">HTML | CSS | JS | JSON</span></h5>`;
}

// document.querySelector("#block1work").addEventListener("mouseleave",block1Fun2);

// function block1Fun2(event){
//     event.preventDefault();
//     let container=document.querySelector("#kickStarterBlock");
//     container.innerHTML=null;
    
// }

// document.querySelector("#block2work").addEventListener("mouseenter",block2Fun);
block2Fun();

function block2Fun(){
    let container=document.querySelector("#asosBlock");
    container.style.backgroundColor="white";
    container.innerHTML=`<p> ASOS is a unique online fashion shopping experience.</p> <h5>Tech Stack: <span class="smallSize">HTML | CSS | JS </span></h5>`;
}

// document.querySelector("#block2work").addEventListener("mouseleave",block2Fun2);

// function block2Fun2(event){
//     event.preventDefault();
//     let container=document.querySelector("#asosBlock");
//     container.innerHTML=null;
    
// }
// document.querySelector("#block3work").addEventListener("mouseenter",block3Fun);
block3Fun();

function block3Fun(){
    let container=document.querySelector("#sudokuBlock");
    container.innerHTML=`<p> A small yet expandable project, focused on data storage and optimization of stored data</p> <h5>Tech Stack: <span class="smallSize">HTML | CSS | JS | JAVA</span></h5>`;
}

// document.querySelector("#block3work").addEventListener("mouseleave",block3Fun2);

// function block3Fun2(event){
//     event.preventDefault();
//     let container=document.querySelector("#sudokuBlock");
//     container.innerHTML=null;
    
// }


document.querySelector("#download_resume1").addEventListener("click",function(){
    downloadFile('/assets/portfolio/Hemachandran_J_Resume_16-09-2022-16-59-57.pdf', 'Hemachandran_J_Resume')

});
document.querySelector("#download_resume2").addEventListener("click",function(){
    downloadFile('/assets/portfolio/Hemachandran_J_Resume_16-09-2022-16-59-57.pdf', 'Hemachandran_J_Resume')

});

function downloadFile(url, fileName) {
    fetch(url, { method: 'get', mode: 'no-cors', referrerPolicy: 'no-referrer' })
      .then(res => res.blob())
      .then(res => {
        const aElement = document.createElement('a');
        aElement.setAttribute('download', fileName);
        const href = URL.createObjectURL(res);
        aElement.href = href;
        aElement.setAttribute('target', '_blank');
        aElement.click();
        URL.revokeObjectURL(href);
      });
  };
