  // Define a data do evento
  const eventDate = new Date("May 28, 2025 00:00:00").getTime();
  
  const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;
  
    if (distance <= 0) {
      clearInterval(countdownFunction);
      document.getElementById("countdown").innerHTML = "<h3 class='text-success'>O evento começou!</h3>";
      return;
    }
  
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
  }, 1000); 
  // Fim da contagem regressiva
  
      
// Funçao para  Mostrar ou esconder o botão ao rolar a página
  const btnTopo = document.getElementById("btnTopo"); 
  
  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btnTopo.classList.remove("d-none");
    } else {
      btnTopo.classList.add("d-none");
    }
  };

  // Ir suavemente para o topo
  function irParaTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } 
//Funçao para  Mostrar ou esconder o botão ao rolar a página
  
 
// Função para alternar entre texto resumido e completo
function alternarTexto(idResumo, idCompleto, el) {
  const resumo = document.getElementById(idResumo);
  const completo = document.getElementById(idCompleto);

  if (resumo.style.display !== "none") {
    resumo.style.display = "none";
    completo.style.display = "block";
    el.innerText = "[-]";
  } else {
    resumo.style.display = "block";
    completo.style.display = "none";
    el.innerText = "[+]";
  }
}