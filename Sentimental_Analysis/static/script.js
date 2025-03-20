// Initialize particles.js
document.addEventListener("DOMContentLoaded", function () {
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
        },
        opacity: {
          value: 0.3,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("reviewForm");
  const textarea = document.getElementById("reviewText");
  const resultContainer = document.getElementById("resultContainer");
  const placeholderReview = document.getElementById("placeholderReview");
  const loadingSpinner = document.getElementById("loadingSpinner");

  // Efecto de enfoque
  textarea.addEventListener("focus", function () {
    this.style.boxShadow = "0 0 0 3px rgba(255, 153, 0, 0.25)";
    this.style.borderColor = "var(--amazon-orange)";
  });

  textarea.addEventListener("blur", function () {
    this.style.boxShadow = "";
    this.style.borderColor = "";
  });

  // Auto-expansión del área de texto
  function autoResize() {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  }

  textarea.addEventListener("input", autoResize);

  // Añadir efecto al botón
  const button = document.querySelector(".btn-amazon");
  button.addEventListener("mouseenter", function () {
    button.style.transform = "translateY(-3px)";
  });

  button.addEventListener("mouseleave", function () {
    button.style.transform = "";
  });

  // Manejar la presentación del formulario con AJAX
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevenir la recarga de la página

    // Mostrar spinner de carga y ocultar placeholder
    loadingSpinner.style.display = "block";
    placeholderReview.style.display = "none";
    resultContainer.innerHTML = "";

    // Obtener el texto de la revisión
    const reviewText = textarea.value.trim();

    if (!reviewText) {
      // Si no hay texto, mostrar un mensaje de error
      loadingSpinner.style.display = "none";
      placeholderReview.style.display = "block";
      return;
    }

    // Hacer la solicitud a la API
    fetch("/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: reviewText }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Procesar y mostrar los resultados
        displayResults(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        resultContainer.innerHTML = `
          <div class="alert alert-danger">
            An error occurred while analyzing the review. Please try again.
          </div>
        `;
      })
      .finally(() => {
        loadingSpinner.style.display = "none";
      });
  });

  // Función para mostrar los resultados
  function displayResults(data) {
    const isPositive = data.sentiment === "Positive";

    // Crear el HTML para los resultados
    const resultHTML = `
        <div class="result-card ${isPositive ? "positive" : "negative"}">
          <div class="emoji text-center">
            ${
              isPositive
                ? '<i class="far fa-smile-beam"></i>'
                : '<i class="far fa-frown"></i>'
            }
          </div>
  
          <h4 class="text-center">
            This review appears to be <strong>${data.sentiment}</strong>
          </h4>
  
          <div class="star-rating text-center">
            ${
              isPositive
                ? '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>'
                : '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>'
            }
          </div>
  
          <p class="mb-2 text-center">Confidence: ${(
            data.confidence * 100
          ).toFixed(1)}%</p>
          <div class="confidence-meter">
            <div class="confidence-level ${
              isPositive ? "bg-success" : "bg-danger"
            }" style="width: ${data.confidence * 100}%"></div>
          </div>
  
          <div class="mt-4">
            <p class="mb-0">
              ${
                isPositive
                  ? "This review reflects a positive customer experience. The customer appears satisfied with the product."
                  : "This review reflects a negative customer experience. The customer may have concerns about the product."
              }
            </p>
          </div>
        </div>
      `;

    // Insertar el HTML en el contenedor
    resultContainer.innerHTML = resultHTML;
  }
});
