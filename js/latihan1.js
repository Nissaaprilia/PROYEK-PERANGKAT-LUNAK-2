function ftampil(){
	/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
	var dropdown = document.getElementsByClassName("dropdown-btn");
	var i;

	for (i = 0; i < dropdown.length; i++) {
		console.log(dropdown.length);
  		dropdown[i].addEventListener("click", function() {
  			this.classList.toggle("active");
  			var dropdownContent = this.nextElementSibling;
  			if (dropdownContent.style.display === "block") {
  				dropdownContent.style.display = "none";
  			} else {
  				dropdownContent.style.display = "block";
  			}
  		});
	}
}
function dafis(){
  let dafis = document.getElementById("dafis");
  let main = document.getElementById("main");

  if (dafis.className.indexOf("dafis-hilang") == -1){
    dafis.className += "dafis-hilang";
    main.className = main.className.replace("main","main-penuh");
  } else{
    dafis.className = dafis.className.replace("dafis-hilang","");
    main.className = main.className.replace("main-penuh","main");
  }
}

//top button
// When the user scrolls down 20px from the top of the document,we will show the button
window.onscroll = function(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    document.getElementById("js-top").style.display = "block";
  } else{
    document.getElementById("js-top").style.display = "none";
  }
};

function scrollToTop() {
    var position =
        document.body.scrollTop || document.documentElement.scrollTop;
    if (position) {
        window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
        scrollAnimation = setTimeout("scrollToTop()", 30);
    } else clearTimeout(scrollAnimation);
}


function tujuan(tujuan) {
    var x = document.getElementById(tujuan);
  
    if (x.className.indexOf("hilang") == -1) {
      x.className += " hilang";
    } else {
      x.className = x.className.replace("hilang", "");
    }
  }
  
  function apersepsi(apersepsi) {
    var x = document.getElementById(apersepsi);
  
    if (x.className.indexOf("lost") == -1) {
      x.className += " lost";
    } else {
      x.className = x.className.replace("lost", "");
    }
  }
  
  function chlorella(chlorella) {
    var x = document.getElementById(chlorella);
  
    if (x.className.indexOf("lost") == -1) {
      x.className += " lost";
    } else {
      x.className = x.className.replace("lost", "");
    }
  }
  
  function chlamydomonas(chlamydomonas) {
    var x = document.getElementById(chlamydomonas);
  
    if (x.className.indexOf("lost") == -1) {
      x.className += " lost";
    } else {
      x.className = x.className.replace("lost", "");
    }
  }

  function hydrodictyon(hydrodictyon) {
    var x = document.getElementById(hydrodictyon);
  
    if (x.className.indexOf("lost") == -1) {
      x.className += " lost";
    } else {
      x.className = x.className.replace("lost", "");
    }
  }

  function volvox(volvox) {
    var x = document.getElementById(volvox);
  
    if (x.className.indexOf("lost") == -1) {
      x.className += " lost";
    } else {
      x.className = x.className.replace("lost", "");
    }
  }

  function spirogyra(spirogyra) {
    var x = document.getElementById(spirogyra);
  
    if (x.className.indexOf("lost") == -1) {
      x.className += " lost";
    } else {
      x.className = x.className.replace("lost", "");
    }
  }

  function chlorococcum(chlorococcum) {
    var x = document.getElementById(chlorococcum);
  
    if (x.className.indexOf("lost") == -1) {
      x.className += " lost";
    } else {
      x.className = x.className.replace("lost", "");
    }
  }

  function ulva(ulva) {
    var x = document.getElementById(ulva);
  
    if (x.className.indexOf("lost") == -1) {
      x.className += " lost";
    } else {
      x.className = x.className.replace("lost", "");
    }
  }

  function chara(chara) {
    var x = document.getElementById(chara);
  
    if (x.className.indexOf("lost") == -1) {
      x.className += " lost";
    } else {
      x.className = x.className.replace("lost", "");
    }
  }

  
	
	//cek jawaban isian
	function cekJawaban(){
    let isi1 = document.getElementById("isian1").value.toLowerCase();
    let jawaban1 = new RegExp('aksial');
    let result1 = jawaban1.test(isi1);

    if(result1 == true){
        
        document.getElementById("cekIsian1").style.color = "green";
        document.getElementById("isian1").style.border = "2px solid green"
    } else{
        
        document.getElementById("cekIsian1").style.color = "red";
        document.getElementById("isian1").style.border = "2px solid red";
    }

    let isi2 = document.getElementById("isian2").value.toLowerCase();
    let jawaban2 = new RegExp('apendikular');
    let result2 = jawaban2.test(isi2);

    if(result2 == true){
        
        document.getElementById("cekIsian2").style.color = "green";
        document.getElementById("isian2").style.border = "2px solid green"
    } else{
        
        document.getElementById("cekIsian2").style.color = "red";
        document.getElementById("isian2").style.border = "2px solid red";
    }

    let isi3 = document.getElementById("isian3").value.toLowerCase();
    let jawaban3 = new RegExp('aktif');
    let result3 = jawaban3.test(isi3);

    if(result3 == true){
        
        document.getElementById("cekIsian3").style.color = "green";
        document.getElementById("isian3").style.border = "2px solid green"
    } else{
        
        document.getElementById("cekIsian3").style.color = "red";
        document.getElementById("isian3").style.border = "2px solid red";
    }

    let isi4 = document.getElementById("isian4").value.toLowerCase();
    let jawaban4 = new RegExp('gelang panggul');
    let result4 = jawaban4.test(isi4);

    if(result4 == true){
        
        document.getElementById("cekIsian4").style.color = "green";
        document.getElementById("isian4").style.border = "2px solid green"
    } else{
        
        document.getElementById("cekIsian4").style.color = "red";
        document.getElementById("isian4").style.border = "2px solid red";
    }

    let isi5 = document.getElementById("isian5").value.toLowerCase();
    let jawaban5 = new RegExp('tubuh');
    let result5 = jawaban5.test(isi5);

    if(result5 == true){
        
        document.getElementById("cekIsian5").style.color = "green";
        document.getElementById("isian5").style.border = "2px solid green"
    } else{
        
        document.getElementById("cekIsian5").style.color = "red";
        document.getElementById("isian5").style.border = "2px solid red";
    }
  }
  function reset(){
    // document.getElementsByClassName('ini')[0].value = "";
    document.getElementById("isian1").value = "";
    document.getElementById("isian2").value = "";
    document.getElementById("isian3").value = "";
    document.getElementById("isian4").value = "";
    document.getElementById("isian5").value = "";
    document.getElementById("isian1").style="border: 0,5 solid";
    document.getElementById("isian2").style="border: 0,5 solid";
    document.getElementById("isian3").style="border: 0,5 solid";
    document.getElementById("isian4").style="border: 0,5 solid";
    document.getElementById("isian5").style="border: 0,5 solid";
  }