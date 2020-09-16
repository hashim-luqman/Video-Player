const videoPlayer=document.getElementById('video_player')
const url= document.getElementById('url')
const submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click', ()=>{
  let urlPlaying = url.value + "&output=embed"
    console.log(urlPlaying)

    videoPlayer.innerHTML=`
    <iframe width="80%" height="680px" src="${urlPlaying}" frameborder="0" allowfullscreen></iframe>
      </iframe>
    `
    
})

/* 
function urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url) {
      return '<a href="' + url + '">' + url + '</a>';
    })
    // or alternatively
    // return text.replace(urlRegex, '<a href="$1">$1</a>')
  }
  
  var text = '';
  var html = urlify(text);
  
  console.log(html)
 */