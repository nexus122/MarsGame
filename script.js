// Card data based on CSV
const cardData = {
    "A": {
        "♥️": {
            trigger: "Alguien dice \"me gusta X\"",
            effect: "Tu dices \"Es respetable, aunque estes equivocad@\""
        },
        "♠️": {
            trigger: "Silencio incomodo",
            effect: "Decir \"Se esta quedando buena la tarde\""
        },
        "♦️": {
            trigger: "Alguien se sienta",
            effect: "Hacer Croack como una rana"
        },
        "♣️": {
            trigger: "Si alguien habla del tiempo",
            effect: "Tu dices \"El oraculo ha hablado\""
        }
    },
    "2": {
        "♥️": {
            trigger: "Alguien se queja",
            effect: "Decir \"interesante, lo anoto\" y fingir que anotas algo"
        },
        "♠️": {
            trigger: "Si escuchas aplausos",
            effect: "Decir: \"gracias, no se merecen\""
        },
        "♦️": {
            trigger: "Te pasan comida",
            effect: "Tu dices \"Ofrenda Aceptada\""
        },
        "♣️": {
            trigger: "Alguien dice \"por supuesto\".",
            effect: "Decir \"por supuesto que no\""
        }
    },
    "3": {
        "♥️": {
            trigger: "Cuando alguien haga un brindis",
            effect: "Decir: \"El ritual ha sido completado\""
        },
        "♠️": {
            trigger: "Cuando alguien haga un brindis",
            effect: "Hacer un unico aplauso"
        },
        "♦️": {
            trigger: "Se hace un brindis",
            effect: "Suelta un discurso justo despues del discurso. Si no hay discurso, tienes que decirlo tu."
        },
        "♣️": {
            trigger: "Cuando alguien haga un brindis",
            effect: "Decir \"Que vivan los novios!\""
        }
    },
    "4": {
        "♥️": {
            trigger: "Se canta cumpleaños feliz",
            effect: "Cantarlo con emoción"
        },
        "♠️": {
            trigger: "Se canta cumpleaños feliz",
            effect: "Haz ritmos en la mesa"
        },
        "♦️": {
            trigger: "Se canta cumpleaños feliz",
            effect: "Encender un mechero y moverlo como si fuera un concierto"
        },
        "♣️": {
            trigger: "Se canta cumpleaños feliz",
            effect: "Hacer palmas al ritmo"
        }
    },
    "5": {
        "♥️": {
            trigger: "Cuando alguien diga un insulto",
            effect: "Decir \"Pero es que nadie va a pensar en los niños?\""
        },
        "♠️": {
            trigger: "Cuando alguien diga cualquier numero",
            effect: "Decir: \"Por el culo te la hinco\""
        },
        "♦️": {
            trigger: "Cuando alguien diga cualquier numero",
            effect: "Repitelo como en el bingo"
        },
        "♣️": {
            trigger: "Cuando alguien pregunte \"¿cuantos somos?\"",
            effect: "Inventate un numero"
        }
    },
    "6": {
        "♥️": {
            trigger: "Cuando suene ABBA",
            effect: "Saca tus mejores pasos de los 80"
        },
        "♠️": {
            trigger: "Cuando suene ABBA",
            effect: "Decir: \"Quiero que esto suene en mi boda / funeral\""
        },
        "♦️": {
            trigger: "Cuando suene ABBA",
            effect: "Cantar un trozo de la cancion"
        },
        "♣️": {
            trigger: "Alguien opina sobre la música puesta.",
            effect: "\"Eso no es música, ABBA sí que es música. ¿Nunca lo has escuchado?\"."
        }
    },
    "7": {
        "♥️": {
            trigger: "Alguien pregunta \"¿qué tal?\".",
            effect: "Decir: \"¿en qué sentido? ¿emocional, físico, espiritual?\""
        },
        "♠️": {
            trigger: "Alguien tropieza",
            effect: "Decir: \"¡Otra! ¡Otra!\""
        },
        "♦️": {
            trigger: "Alguien tropieza",
            effect: "Decir: \"eso fue el Karma\""
        },
        "♣️": {
            trigger: "Alguien dice una palabra en inglés",
            effect: "Traducela mal a proposito"
        }
    },
    "8": {
        "♥️": {
            trigger: "Alguien recibe un regalo.",
            effect: "Gritar \"¡YO TAMBIEN QUIERO UNO!\""
        },
        "♠️": {
            trigger: "Alguien dice \"Ahora vengo\"",
            effect: "Decir \"Eso dijeron muchos valientes\""
        },
        "♦️": {
            trigger: "Alguien sirve bebida en un vaso.",
            effect: "Hacer el sonido de una fuente o grifo abierto hasta que deje de servir."
        },
        "♣️": {
            trigger: "Si alguien ofrece bebida al grupo",
            effect: "Decir \"yo no\" (aunque luego pilles algo)"
        }
    },
    "9": {
        "♥️": {
            trigger: "Alguien deja el movil en la mesa",
            effect: "Coger una servilleta, taparlo y decir \"a dormir!\""
        },
        "♠️": {
            trigger: "Alguien pregunta sobre tu trabajo",
            effect: "Decir: \"Solo estoy levantando el pais\""
        },
        "♦️": {
            trigger: "Alguien se estira",
            effect: "Imitiar su estiramiento exageradamente"
        },
        "♣️": {
            trigger: "Alguien dice una frase hecha (ej: \"más vale tarde...\").",
            effect: "Completarla mal (ej: \"...que nunca dormir\")"
        }
    },
    "10": {
        "♥️": {
            trigger: "Alguien pide ayuda para algo (ej: \"¿Me alcanzas eso?\").",
            effect: "Decir: \"Claro, son 5 euros.\""
        },
        "♠️": {
            trigger: "Alguien que esta cerca tuyo se va",
            effect: "Decir: \"No me dejes solo con estos locos\""
        },
        "♦️": {
            trigger: "Alguien bosteza",
            effect: "Decir: \"perdón por existir\""
        },
        "♣️": {
            trigger: "Alguien dice \"sin ánimo de ofender\"",
            effect: "Decir: Demasiado tarde"
        }
    },
    "J": {
        "♥️": {
            trigger: "Alguien dice: \"estoy cansado\".",
            effect: "Decir \"yo más\" y dejarte caer en el suelo (o en un sofá si hay)"
        },
        "♠️": {
            trigger: "Alguien habla de su trabajo.",
            effect: "Preguntar \"¿y eso tiene descuento para amigos?\""
        },
        "♦️": {
            trigger: "Alguien te da la mano.",
            effect: "Dejar los dedos como salchichas"
        },
        "♣️": {
            trigger: "Alguien habla de una película/serie.",
            effect: "Decir: \"Spoiler: al final todos mueren. Ah, no, esa era otra\"."
        }
    },
    "Q": {
        "♥️": {
            trigger: "Alguien halaga algo o a alguien (¡qué guapo, qué bonito, qué rico!).",
            effect: "Decir \"sí, pero no tanto como tú\" con coquetería"
        },
        "♠️": {
            trigger: "Alguien se disculpa por algo minimo",
            effect: "Decir: \"El consejo de ancianos acepta tu disculpa\""
        },
        "♦️": {
            trigger: "Alguien abre una puerta",
            effect: "Hacer sonido de puerta que chirria"
        },
        "♣️": {
            trigger: "Cuando alguien diga \"no entiendo\"",
            effect: "Explicarlo con mímica exagerada"
        }
    },
    "K": {
        "♥️": {
            trigger: "Cada vez que aparezca Mar",
            effect: "Proponer cantar el cumpleaños feliz"
        },
        "♠️": {
            trigger: "Cada hora en punto",
            effect: "Poner alguna canción de ABBA"
        },
        "♦️": {
            trigger: "Cada vez que se tenga que servir algo",
            effect: "Preguntar \"¿cuantos somos?\""
        },
        "♣️": {
            trigger: "Alguien te sirve bebida",
            effect: "Proponer un brindis"
        }
    },
    "Joker": {
        "♥️": {
            trigger: "En cualquier momento",
            effect: "Gritar \"¡BINGO!\" y levantar los brazos"
        },
        "♠️": {
            trigger: "En cualquier momento",
            effect: "Gritar \"¡BINGO!\" y levantar los brazos"
        },
        "♦️": {
            trigger: "En cualquier momento",
            effect: "Gritar \"¡BINGO!\" y levantar los brazos"
        },
        "♣️": {
            trigger: "En cualquier momento",
            effect: "Gritar \"¡BINGO!\" y levantar los brazos"
        }
    }
};

// State management
let selectedSuit = null;
let selectedRank = null;

// DOM Elements
const suitButtons = document.querySelectorAll('.suit-btn');
const rankButtons = document.querySelectorAll('.rank-btn');
const jokerButton = document.querySelector('.joker-btn');
const cardsGrid = document.getElementById('cardsGrid');
const filterText = document.getElementById('filterText');

// Suit names mapping
const suitNames = {
    '♥️': 'Emoción / Opinión',
    '♠️': 'Dinámica social',
    '♦️': 'Objetos o acciones físicas',
    '♣️': 'Lenguaje'
};

// Initialize - show all cards
renderCards();

// Event Listeners
suitButtons.forEach(button => {
    button.addEventListener('click', () => {
        const clickedSuit = button.dataset.suit;

        // Toggle suit selection
        if (selectedSuit === clickedSuit) {
            // Deselect
            button.classList.remove('active');
            selectedSuit = null;
        } else {
            // Select new suit
            suitButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            selectedSuit = clickedSuit;
        }

        renderCards();
    });
});

rankButtons.forEach(button => {
    button.addEventListener('click', () => {
        const clickedRank = button.dataset.rank;

        // Toggle rank selection
        if (selectedRank === clickedRank) {
            // Deselect
            button.classList.remove('active');
            selectedRank = null;
        } else {
            // Deselect joker if active
            jokerButton.classList.remove('active');

            // Select new rank
            rankButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            selectedRank = clickedRank;
        }

        renderCards();
    });
});

jokerButton.addEventListener('click', () => {
    // Toggle joker selection
    if (selectedRank === 'Joker') {
        // Deselect
        jokerButton.classList.remove('active');
        selectedRank = null;
    } else {
        // Deselect all rank buttons
        rankButtons.forEach(btn => btn.classList.remove('active'));

        // Select joker
        jokerButton.classList.add('active');
        selectedRank = 'Joker';
    }

    renderCards();
});

// Render cards based on current filters
function renderCards() {
    // Clear current cards
    cardsGrid.innerHTML = '';

    // Update filter text
    updateFilterText();

    // Define the correct order of ranks (A first, then 2-K, then Joker)
    const allRanks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'Joker'];

    // Determine which cards to show
    const ranks = selectedRank ? [selectedRank] : allRanks;
    const suits = selectedSuit ? [selectedSuit] : ['♥️', '♠️', '♦️', '♣️'];

    // Generate cards
    ranks.forEach(rank => {
        suits.forEach(suit => {
            if (cardData[rank] && cardData[rank][suit]) {
                const cardElement = createCardElement(rank, suit, cardData[rank][suit]);
                cardsGrid.appendChild(cardElement);
            }
        });
    });
}

// Create a card element
function createCardElement(rank, suit, data) {
    const cardItem = document.createElement('div');
    cardItem.className = 'card-item';

    // Determine color
    const isRed = suit === '♥️' || suit === '♦️';
    const color = isRed ? '#dc2626' : '#1a1a1a';

    // Create card HTML
    cardItem.innerHTML = `
        <div class="card-visual" style="color: ${color}">
            <div class="card-corner top-left">
                <span class="corner-rank">${rank === 'Joker' ? '🃏' : rank}</span>
                <span class="corner-suit">${rank === 'Joker' ? '' : suit}</span>
            </div>
            <div class="card-center">
                <span class="center-suit">${rank === 'Joker' ? '🃏' : suit}</span>
            </div>
            <div class="card-corner bottom-right">
                <span class="corner-rank">${rank === 'Joker' ? '🃏' : rank}</span>
                <span class="corner-suit">${rank === 'Joker' ? '' : suit}</span>
            </div>
        </div>
        <div class="card-info">
            <h3 class="card-title" style="color: ${color}">
                ${rank === 'Joker' ? '🃏 JOKER' : rank + suit}
            </h3>
            <div class="trigger">
                <h4>🎬 Desencadenante</h4>
                <p class="trigger-text">${data.trigger}</p>
            </div>
            <div class="effect">
                <h4>✨ Efecto</h4>
                <p class="effect-text">${data.effect}</p>
            </div>
        </div>
    `;

    return cardItem;
}

// Update filter text
function updateFilterText() {
    let text = '';

    if (!selectedSuit && !selectedRank) {
        text = 'Todas las cartas';
    } else if (selectedSuit && !selectedRank) {
        text = `${suitNames[selectedSuit]} (${selectedSuit})`;
    } else if (!selectedSuit && selectedRank) {
        text = `Todas las ${selectedRank === 'Joker' ? 'JOKER' : selectedRank}`;
    } else {
        text = `${selectedRank === 'Joker' ? '🃏 JOKER' : selectedRank + selectedSuit}`;
    }

    filterText.textContent = text;
}
