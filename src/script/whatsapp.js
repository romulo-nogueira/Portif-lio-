export default function initWhatsapp(){
    const numero = "5598982759806";
    const url = `https://wa.me/${numero}`;
    window.open(url,"_blank" )

  
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("botao-zap");
  if (btn) {
    btn.addEventListener("click", initWhatsapp);
  } else {
    console.error("Botão do WhatsApp não encontrado!");
  }
});
