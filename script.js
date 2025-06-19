document.addEventListener("DOMContentLoaded", function () {
  // --- LÓGICA PARA EL MENÚ MÓVIL (HAMBURGUESA) ---
  const menuButton = document.querySelector(".menuButton");
  const navigationMenu = document.querySelector(".navigationMenu");
  const menuItems = document.querySelectorAll(".navigationMenu a");

  menuButton.addEventListener("click", () => {
    const isActive = navigationMenu.classList.toggle("active");
    const bars = menuButton.querySelectorAll("span");

    bars.forEach((bar, index) => {
      // Siempre resetear estilos antes de aplicar nuevos
      bar.style.transform = "";
      bar.style.opacity = "1";
      bar.style.backgroundColor = 'white';

      if (isActive) {
        // Estilos para la 'X'
        if (index === 0) {
          bar.style.transform = "rotate(45deg) translate(5px, 5px)";
        }
        if (index === 1) {
          bar.style.opacity = "0";
        }
        if (index === 2) {
          bar.style.transform = "rotate(-45deg) translate(7px, -6px)";
        }
      }
    });
  });

  // Cierra el menú al hacer clic en un enlace
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (navigationMenu.classList.contains("active")) {
        navigationMenu.classList.remove("active");
        const bars = menuButton.querySelectorAll("span");
        bars.forEach((bar) => {
          bar.style.transform = "none";
          bar.style.opacity = "1";
        });
      }
    });
  });

  // --- LÓGICA PARA CAMBIO DE IDIOMA ---
  const languageSwitcher = document.getElementById("languageSwitcher");
  const translatableElements = document.querySelectorAll("[data-es]");

  const switchLanguage = (lang) => {
    if (!['es', 'en'].includes(lang)) return; // Seguridad

    translatableElements.forEach((el) => {
        if (el.dataset[lang]) {
            el.innerText = el.dataset[lang];
        }
    });
    // Actualizar el atributo lang del HTML para accesibilidad
    document.documentElement.lang = lang; 
    // Guardar la preferencia en localStorage
    localStorage.setItem('preferredLanguage', lang);
  };

  // Evento para el botón de cambio de idioma
  languageSwitcher.addEventListener("click", (event) => {
    event.preventDefault();
    let currentLang = document.documentElement.lang;
    let newLang = currentLang === "es" ? "en" : "es";
    switchLanguage(newLang);
  });
  
  // Al cargar la página, verificar si hay un idioma guardado
  const savedLang = localStorage.getItem('preferredLanguage');
  if (savedLang) {
    switchLanguage(savedLang);
  } else {
    // Si no hay nada guardado, se queda en el idioma por defecto (español)
    switchLanguage('es');
  }

});
