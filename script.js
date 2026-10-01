// Base de datos detallada de la Carrera Atómica
const atomicEvents = [
  {
    id: 1,
    year: "1938",
    date: "Diciembre 1938",
    title: "Descubrimiento de la Fisión Nuclear",
    category: "otros",
    shortDesc: "Otto Hahn y Fritz Strassmann descubren la fisión del uranio en Berlín.",
    fullDesc: "Lise Meitner y Otto Frisch explicaron teóricamente que el núcleo de uranio podía dividirse liberando una cantidad masiva de energía. Este hallazgo científico sentó las bases para el desarrollo de armas nucleares.",
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
    figures: ["Harry S. Truman", "Paul Tibbets"]
  },
  {
    id: 6,
    year: "1949",
    date: "29 de Agosto de 1949",
    title: "Primera Prueba Soviética (RDS-1 / Joe-1)",
    category: "urss",
    shortDesc: "La URSS rompe el monopolio nuclear de Estados Unidos.",
    fullDesc: "La Unión Soviética detona su primera bomba atómica en Semipalátinsk (Kazajistán). Gracias a su red de espionaje en el Proyecto Manhattan, lograron acelerar su desarrollo años antes de lo previsto por la CIA.",
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
    figures: ["Edward Teller", "Stanislaw Ulam"]
  },
  {
    id: 8,
    year: "1953",
    date: "12 de Agosto de 1953",
    title: "Reserva Soviética RDS-6s (Joe-4)",
    category: "urss",
    shortDesc: "La URSS prueba su primer dispositivo termonuclear transportable.",
    fullDesc: "Aunque menos potente que Ivy Mike, el diseño soviético ideado por Andréi Sájarov era compacto y verdaderamente utilizable como bomba aérea desplegable en combate.",
    figures: ["Andréi Sájarov", "Igor Tamm"]
  },
  {
    id: 9,
    year: "1957",
    date: "4 de Octubre de 1957",
    title: "Lanzamiento del Sputnik 1 (ICBMs)",
    category: "urss",
    shortDesc: "El nacimiento de los Misiles Balísticos Intercontinentales.",
    fullDesc: "El cohete R-7 que puso en órbita al Sputnik 1 demostró que la URSS tenía la capacidad técnica de lanzar ojivas nucleares directamente al territorio continental de EE. UU. en minutos.",
    figures: ["Serguéi Koroliov", "Nikita Jrushchov"]
  },
  {
    id: 10,
    year: "1960",
    date: "13 de Febrero de 1960",
    title: "Gerboise Bleue (Francia)",
    category: "otros",
    shortDesc: "Francia se convierte en la cuarta potencia nuclear mundial.",
    fullDesc: "Francia detona su primera bomba atómica en el desierto del Sahara argelino, buscando independencia estratégica de la OTAN y de EE. UU.",
    figures: ["Charles de Gaulle"]
  },
  {
    id: 11,
    year: "1961",
    date: "30 de Octubre de 1961",
    title: "Detonación de la Bomba del Zar",
    category: "urss",
    shortDesc: "La bomba más potente probada en la historia (50 Megatones).",
    fullDesc: "Probada sobre la isla de Nueva Zembla, la onda expansiva dio tres vueltas al planeta Tierra y el hongo nuclear alcanzó los 64 km de altura.",
    figures: ["Nikita Jrushchov", "Andréi Sájarov"]
  },
  {
    id: 12,
    year: "1962",
    date: "16 - 28 de Octubre de 1962",
    title: "Crisis de los Misiles en Cuba",
    category: "urss",
    shortDesc: "El punto más cercano a una Tercera Guerra Mundial Nuclear.",
    fullDesc: "El descubrimiento de misiles nucleares soviéticos en Cuba llevó a EE. UU. a decretar un bloqueo naval. Tras 13 días de máxima tensión, se acordó la retirada de los misiles soviéticos a cambio del compromiso de EE. UU. de no invadir Cuba y retirar misiles de Turquía.",
    figures: ["John F. Kennedy", "Nikita Jrushchov", "Fidel Castro"]
  },
  {
    id: 13,
    year: "1963",
    date: "5 de Agosto de 1963",
    title: "Tratado de Prohibición Parcial de Ensayos (PTBT)",
    category: "tratados",
    shortDesc: "Prohibición de pruebas nucleares atmosféricas, espaciales y submarinas.",
    fullDesc: "Firmado por EE. UU., la URSS y el Reino Unido para reducir la radiación global y frenar la escalada armamentista indiscriminada, permitiendo solo ensayos subterráneos.",
    figures: ["John F. Kennedy", "Nikita Jrushchov"]
  },
  {
    id: 14,
    year: "1968",
    date: "1 de Julio de 1968",
    title: "Tratado de No Proliferación Nuclear (NPT)",
    category: "tratados",
    shortDesc: "Acuerdo para evitar la expansión global de las armas nucleares.",
    fullDesc: "Tratado internacional clave destinado a restringir la posesión de armas nucleares a los países que ya las poseían y promover el uso pacífico de la energía atómica.",
    figures: ["Naciones Unidas"]
  },
  {
    id: 15,
    year: "1972",
    date: "26 de Mayo de 1972",
    title: "Acuerdos SALT I",
    category: "tratados",
    shortDesc: "Primer límite real al número de misiles estratégicos intercontinentales.",
    fullDesc: "Richard Nixon y Leonid Brézhnev firmaron los tratados de Limitación de Armas Estratégicas (SALT I) y el Tratado sobre Misiles Antibalísticos (ABM).",
    figures: ["Richard Nixon", "Leonid Brézhnev"]
  },
  {
    id: 16,
    year: "1987",
    date: "8 de Diciembre de 1987",
    title: "Tratado INF",
    category: "tratados",
    shortDesc: "Eliminación de misiles nucleares de alcance corto y medio.",
    fullDesc: "Ronald Reagan y Mijaíl Gorbachov firmaron este acuerdo histórico en Washington D.C., eliminando por primera vez una categoría entera de misiles nucleares.",
    figures: ["Ronald Reagan", "Mijaíl Gorbachov"]
  },
  {
    id: 17,
    year: "1991",
    date: "31 de Julio de 1991",
    title: "Tratado START I y Fin de la Guerra Fría",
    category: "tratados",
    shortDesc: "Reducción masiva de arsenales nucleares y disolución de la URSS.",
    fullDesc: "Firmado meses antes del colapso de la URSS, obligó a reducir alrededor del 80% del arsenal nuclear estratégico acumulado durante décadas de rivalidad atómica.",
    figures: ["George H. W. Bush", "Mijaíl Gorbachov"]
  }
];

// Estado global de la aplicación
let currentFilter = 'all';
let searchQuery = '';

// Renderizar eventos
function renderEvents() {
  const container = document.getElementById('timelineContainer');
  container.innerHTML = '';

  const filtered = atomicEvents.filter(event => {
    const matchesFilter = currentFilter === 'all' || event.category === currentFilter;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.year.includes(searchQuery) ||
                          event.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.figures.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div class="no-results">No se encontraron eventos que coincidan con tu búsqueda.</div>`;
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

// Modal Interactivo
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
      <h4>Personajes clave / Entidades:</h4>
      <div class="tags-container">${figuresHTML}</div>
    </div>
  `;

  modal.style.display = 'block';
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  renderEvents();

  // Escuchar botones de filtro
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentFilter = e.target.getAttribute('data-filter');
      renderEvents();
    });
  });

  // Búsqueda en tiempo real
  document.getElementById('searchInput').addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderEvents();
  });

  // Cerrar Modal
  document.getElementById('closeModal').onclick = () => {
    document.getElementById('eventModal').style.display = 'none';
  };

  window.onclick = (e) => {
    const modal = document.getElementById('eventModal');
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  };
});