function upDate(previewPic){
    document.getElementById('image').innerHTML=previewPic.alt; 
      document.querySelector('#image').style.backgroundImage = "url('" + previewPic.src +"')"; 
      }
  function unDo(){
       document.querySelector('#image').style.backgroundImage = "url('')"; 
          document.querySelector('#image').innerHTML="I love you 3000, and hope you can react it high score.";
      }
