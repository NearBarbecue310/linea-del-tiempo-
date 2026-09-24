// Base de datos de la Carrera Atómica
const atomicEvents = [
  {
    id: 1,
    year: "1938",
    date: "Diciembre 1938",
    title: "Descubrimiento de la Fisión Nuclear",
    category: "otros",
    shortDesc: "Otto Hahn y Fritz Strassmann descubren la fisión del uranio en Berlín.",
    fullDesc: "Lise Meitner y Otto Frisch explicaron teóricamente que el núcleo de uranio podía dividirse liberando una cantidad masiva de energía. Este hallazgo científico sentó las bases para el desarrollo de armas nucleares.",
    image: "img/fision-nuclear.jpg",
    figures: ["Otto Hahn", "Lise Meitner", "Fritz Strassmann"]
  },
  {
    id: 2,
    year: "1939",
    date: "2 de Agosto de 1939",
    title: "Carta Einstein-Szilárd",
    category: "usa",
    shortDesc: "Advertencia formal a EE. UU. sobre el peligro del programa nuclear nazi.",
    fullDesc: "Leó Szilárd escribió una carta firmada por Albert Einstein dirigida al presidente Franklin D. Roosevelt, advirtiéndole que la Alemania nazi podría desarrollar bombas atómicas de gran potencia, instando a EE. UU. a iniciar su propia investigación.",
    image: "img/einstain.jpg",
    figures: ["Albert Einstein", "Leó Szilárd", "Franklin D. Roosevelt"]
  },
  {
    id: 3,
    year: "1942",
    date: "13 de Agosto de 1942",
    title: "Creación del Proyecto Manhattan",
    category: "usa",
    shortDesc: "Inicio formal del programa secreto estadounidense para fabricar la bomba.",
    fullDesc: "Bajo la dirección del general Leslie Groves y la dirección científica de J. Robert Oppenheimer, miles de científicos se reunieron en Los Álamos, Nuevo México, para diseñar las primeras armas de fisión nuclear.",
    image: "img/op.jpg",
    figures: ["J. Robert Oppenheimer", "Leslie Groves", "Enrico Fermi"]
  },
  {
    id: 4,
    year: "1945",
    date: "16 de Julio de 1945",
    title: "Prueba Trinity",
    category: "usa",
    shortDesc: "La primera detonación nuclear en la historia de la humanidad.",
    fullDesc: "Detonada en el desierto de Alamogordo (Nuevo México), la bomba de plutonio 'Gadget' demostró la viabilidad de las armas atómicas con una potencia equivalente a 20 kilotones de TNT.",
    image: "img/trinitty.jpg",
    figures: ["J. Robert Oppenheimer", "Kenneth Bainbridge"]
  },
  {
    id: 5,
    year: "1945",
    date: "6 y 9 de Agosto de 1945",
    title: "Bombardeos de Hiroshima y Nagasaki",
    category: "usa",
    shortDesc: "Uso operativo de 'Little Boy' y 'Fat Man' sobre Japón.",
    fullDesc: "EE. UU. lanzó la primera bomba atómica sobre Hiroshima y tres días después sobre Nagasaki. Causaron la muerte de más de 200,000 personas y provocaron la rendición incondicional de Japón en la Segunda Guerra Mundial.",
    image: "img/hiroshima.jpg",
    figures: ["Harry S. Truman", "Paul Tibbets"]
  },
  {
    id: 6,
    year: "1949",
    date: "29 de Agosto de 1949",
    title: "Primera Prueba Soviética (RDS-1)",
    category: "urss",
    shortDesc: "La URSS rompe el monopolio nuclear de Estados Unidos.",
    image: "img/bomba-dc1.jpg",
    fullDesc: "La Unión Soviética detona su primera bomba atómica en Semipalátinsk (Kazajistán). Gracias a su red de espionaje en el Proyecto Manhattan, lograron acelerar su desarrollo años antes de lo previsto.",
    figures: ["Igor Kurchátov", "Lavrenti Beria", "Klaus Fuchs"]
  },
  {
    id: 7,
    year: "1952",
    date: "1 de Noviembre de 1952",
    title: "Prueba Ivy Mike (Bomba de Hidrógeno)",
    category: "usa",
    shortDesc: "EE. UU. detona la primera arma termonuclear de la historia.",
    fullDesc: "Detonada en el atolón de Enewetak, la bomba H logró una potencia de 10.4 megatones (más de 500 veces superior a la bomba de Hiroshima), inaugurando la era de las súper-armas.",
    image: "img/bomba-hidrogeno.jpg",
    figures: ["Edward Teller", "Stanislaw Ulam"]
  },
  {
    id: 8,
    year: "1961",
    date: "30 de Octubre de 1961",
    title: "Detonación de la Bomba del Zar",
    category: "urss",
    shortDesc: "La bomba más potente probada en la historia (50 Megatones).",
    fullDesc: "Probada sobre la isla de Nueva Zembla, la onda expansiva dio tres vueltas al planeta Tierra y el hongo nuclear alcanzó los 64 km de altura.",
    image: "img/zar.jpg",
    figures: ["Nikita Jrushchov", "Andréi Sájarov"]
  },
  {
    id: 9,
    year: "1962",
    date: "16 - 28 de Octubre de 1962",
    title: "Crisis de los Misiles en Cuba",
    category: "urss",
    shortDesc: "El punto más cercano a una Tercera Guerra Mundial Nuclear.",
    fullDesc: "El descubrimiento de misiles nucleares soviéticos en Cuba llevó a EE. UU. a decretar un bloqueo naval. Tras 13 días de máxima tensión, se acordó la retirada de los misiles.",
    figures: ["John F. Kennedy", "Nikita Jrushchov", "Fidel Castro"]
  },
  {
    id: 10,
    year: "1968",
    date: "1 de Julio de 1968",
    title: "Tratado de No Proliferación Nuclear (NPT)",
    category: "tratados",
    shortDesc: "Acuerdo para evitar la expansión global de las armas nucleares.",
    fullDesc: "Tratado internacional clave destinado a restringir la posesión de armas nucleares a los países que ya las poseían y promover el uso pacífico de la energía atómica.",
    figures: ["Naciones Unidas"]
  }
];

let currentFilter = 'all';
let searchQuery = '';

function renderEvents() {
  const container = document.getElementById('timelineContainer');
  if (!container) return;
  
  container.innerHTML = '';

  const filtered = atomicEvents.filter(event => {
    const matchesFilter = currentFilter === 'all' || event.category === currentFilter;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.year.includes(searchQuery) ||
                          event.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div class="no-results">No se encontraron eventos.</div>`;
    return;
  }

  filtered.forEach(event => {
    const card = document.createElement('article');
    card.className = `timeline-card ${event.category}`;
    card.onclick = () => openModal(event);

    const badgeLabels = {
      usa: '🇺🇸 EE. UU.',
      urss: '🛠️ URSS',
      otros: '🌍 Otros',
      tratados: '📜 Tratado'
    };

    card.innerHTML = `
      <div class="card-header">
    <span class="year-badge">${event.year}</span>
    <span class="cat-badge ${event.category}">${badgeLabels[event.category]}</span>
   </div>
   <img src="${event.image}" alt="${event.title}" class="card-img" onerror="this.style.display='none'">
   <h3>${event.title}</h3>
   <p class="exact-date">📅 ${event.date}</p>
   <p class="short-desc">${event.shortDesc}</p>
   <div class="card-footer">
    <span>Haz clic para ver más detalles ➔</span>
   </div>
    `;

    container.appendChild(card);
  });
}

function openModal(event) {
  const modal = document.getElementById('eventModal');
  const modalBody = document.getElementById('modalBody');

  const figuresHTML = event.figures.map(f => `<span class="tag">${f}</span>`).join(' ');

  modalBody.innerHTML = `
    <span class="year-badge large">${event.year}</span>
    <h2>${event.title}</h2>
    <p class="modal-date"><strong>Fecha exacta:</strong> ${event.date}</p>
    <hr>
    <p class="modal-desc">${event.fullDesc}</p>
    <div class="figures-section">
      <h4>Personajes clave:</h4>
      <div class="tags-container">${figuresHTML}</div>
    </div>
  `;

  modal.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
  renderEvents();
  // Control de música de fondo
  const musicBtn = document.getElementById('musicBtn');
  const bgMusic = document.getElementById('bgMusic');

  if (musicBtn && bgMusic) {
    musicBtn.addEventListener('click', () => {
      if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.innerHTML = '⏸️ Pausar música';
        musicBtn.classList.add('active');
      } else {
        bgMusic.pause();
        musicBtn.innerHTML = '🎵 Reproducir música ambiental';
        musicBtn.classList.remove('active');
      }
    });
  }

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentFilter = e.target.getAttribute('data-filter');
      renderEvents();
    });
  });

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderEvents();
    });
  }

  const closeModal = document.getElementById('closeModal');
  if (closeModal) {
    closeModal.onclick = () => {
      document.getElementById('eventModal').style.display = 'none';
    };
  }

  window.onclick = (e) => {
    const modal = document.getElementById('eventModal');
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  };
});
