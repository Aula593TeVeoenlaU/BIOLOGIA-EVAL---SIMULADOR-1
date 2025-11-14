// ==========================
// SIMULADOR DE INGRESO
// ==========================

// ===== NUEVAS PREGUNTAS DE BIOLOGÍA =====
const questions = [
    { id: 1, block: 'BIOLOGÍA', text: '¿Cuál es la función principal de moléculas como el almidón -en las plantas- o el glucógeno -en los animales-?', options: ['a) Acelerar reacciones químicas (catálisis).', 'b) Transmitir la información genética.', 'c) Almacenar energía de forma eficiente.', 'd) Formar la membrana celular.'], answer: 'c' },
    { id: 2, block: 'BIOLOGÍA', text: 'La desnaturalización de una proteína implica la pérdida de su estructura tridimensional. ¿Cuál de los siguientes tipos de enlace es el último en romperse durante este proceso?', options: ['a) Los puentes de hidrógeno.', 'b) Las interacciones hidrofóbicas.', 'c) Los enlaces peptídicos.', 'd) Los puentes disulfuro.'], answer: 'c' },
    { id: 3, block: 'BIOLOGÍA', text: 'Además de su papel como cofactor enzimático y en el equilibrio osmótico, ¿qué ion mineral es esencial para la estabilidad estructural de los ácidos nucleicos ADN y ARN y participa activamente en los procesos de replicación y transcripción?', options: ['a) El ion Na+', 'b) El ion Ca2+', 'c) El ion K+', 'd) El ion Mg2+'], answer: 'd' },
    { id: 4, block: 'BIOLOGÍA', text: '¿Qué proceso de transporte de membrana implica el uso de un gradiente iónico (generado previamente por otro transporte activo) para mover una segunda molécula en contra de su propio gradiente de concentración, a menudo en la misma dirección (simporte)?', options: ['a) Difusión facilitada.', 'b) Transporte activo primario.', 'c) Osmosis.', 'd) Transporte activo secundario'], answer: 'd' },
    { id: 5, block: 'BIOLOGÍA', text: 'La Teoría Endosimbiótica propone el origen de las mitocondrias y cloroplastos. ¿Cuál de las siguientes evidencias no apoya a esta teoría?', options: ['a) Ambos orgánulos se dividen de forma independiente a la célula por fisión binaria, similar a las bacterias.', 'b) Ambos poseen ribosomas 70S, distintos a los ribosomas 80S del citoplasma eucariota, pero similares a los bacterianos.', 'c) Ambos poseen ADN circular que se replica independientemente del ADN nuclear, sin estar asociado a histonas.', 'd) La capacidad de ambos orgánulos para sintetizar todas las proteínas que necesitan sin depender de la traducción citoplasmática.'], answer: 'd' },
    { id: 6, block: 'BIOLOGÍA', text: 'Un postulado moderno de la Teoría Celular establece que "la célula es la unidad de origen". ¿Qué principio fundamental en biología sintetiza esta idea?', options: ['a) La célula es la unidad fisiológica de la vida.', 'b) La célula es la unidad estructural de la vida.', 'c) El ADN es el material hereditario.', 'd) Toda célula procede de otra célula preexistente.'], answer: 'd' },
    { id: 7, block: 'BIOLOGÍA', text: 'En una población de pinzones, la selección natural favorece a los individuos con picos muy grandes (para romper semillas duras) y a los individuos con picos muy pequeños (para manipular semillas tiernas), mientras que los de pico intermedio tienen dificultades. ¿Qué tipo de selección natural está actuando aquí?', options: ['a) Selección direccional.', 'b) Selección estabilizadora.', 'c) Selección diversificadora.', 'd) Selección sexual.'], answer: 'c' },
    { id: 8, block: 'BIOLOGÍA', text: 'La \'prueba molecular\' utiliza la comparación de secuencias de ADN. ¿Qué principio fundamental permite utilizar la tasa de mutación de estas moléculas como un \'reloj\' para estimar el tiempo transcurrido desde la divergencia de dos especies?', options: ['a) La tasa de mutación de todos los genes es idéntica en todas las especies y constante a lo largo del tiempo geológico.', 'b) Las mutaciones deletéreas son rápidamente eliminadas, haciendo que solo las mutaciones beneficiosas persistan para el análisis.', 'c) La acumulación de mutaciones neutras a una tasa relativamente constante a lo largo del tiempo.', 'd) El grado de homología en la secuencia de ADN solo es un indicador de la función compartida, no del tiempo de divergencia.'], answer: 'c' },
    { id: 9, block: 'BIOLOGÍA', text: '¿Cuál de las siguientes características morfológicas en los primeros homínidos es considerada el rasgo definitorio y la primera adaptación evolutiva clave que condujo al linaje humano?', options: ['a) La fabricación y uso habitual de herramientas de piedra.', 'b) El desarrollo de un lenguaje simbólico.', 'c) El bipedismo.', 'd) Un volumen cerebral que supera los 1000 cm3'], answer: 'c' },
    { id: 10, block: 'BIOLOGÍA', text: '¿Cuál es la principal diferencia a nivel de la membrana celular que justifica la separación de los procariotas en los Dominios Bacteria y Archaea, y que también se relaciona con su tolerancia a ambientes extremos?', options: ['a) La presencia de un núcleo delimitado por membrana en Archaea y su ausencia en Bacteria.', 'b) La composición lipídica de la membrana: los lípidos de Bacteria tienen enlaces éster y los de Archaea tienen enlaces éter, a menudo con monocapas.', 'c) Archaea realiza la fotosíntesis con clorofila, mientras que Bacteria es exclusivamente quimiosintética.', 'd) Bacteria contiene ADN circular y Archaea contiene ADN lineal.'], answer: 'b' },
    { id: 11, block: 'BIOLOGÍA', text: 'El evento de la Meiosis I que es crucial para la reducción del número de cromosomas, la generación de gametos haploides y garantizar la variabilidad genética mediante el intercambio de segmentos es:', options: ['a) La anafase II donde las cromátidas hermanas se separan.', 'b) La metafase II, donde los cromosomas se alinean en la placa ecuatorial.', 'c) La sinapsis y la recombinación homóloga (entrecruzamiento) en Profase I.', 'd) La separación de las cromátidas hermanas en Anafase I.'], answer: 'c' },
    { id: 12, block: 'BIOLOGÍA', text: 'El punto de restricción principal (checkpoin G1) verifica que la célula esté lista para entrar en la fase S. ¿Qué clase de proteínas reguladoras, cuyas concentraciones varían cíclicamente, son esenciales para activar las Cdk (quinasas dependientes de ciclina)?', options: ['a) Factores de crecimiento.', 'b) Rb.', 'c) Ciclinas.', 'd) p53.'], answer: 'c' },
    { id: 13, block: 'BIOLOGÍA', text: 'Dos genes, el A y el B, controlan la pigmentación de un ratón. El alelo recesivo aa en el gen A resulta en albinismo, independientemente de los alelos presentes en el gen B. Este fenómeno, donde un gen enmascara la expresión de otro, se conoce como:', options: ['a) Dominancia incompleta.', 'b) Pleiotropía.', 'c) Epistasis.', 'd) Ligamiento al sexo.'], answer: 'c' },
    { id: 14, block: 'BIOLOGÍA', text: 'Una enfermedad recesiva ligada al cromosoma X afecta casi exclusivamente a los varones. Si una mujer portadora (heterocigota) tiene hijos con un hombre sano, ¿cuál es la probabilidad de que su hija herede el alelo y sea portadora sin manifestar la enfermedad?', options: ['a) 100% de probabilidad de ser portadora.', 'b) La hija no tiene probabilidad de ser portadora si el padre es sano.', 'c) 50% de probabilidad de ser portadora.', 'd) 25% de probabilidad de padecer la enfermedad.'], answer: 'c' },
    { id: 15, block: 'BIOLOGÍA', text: '¿Cuál es el proceso molecular que convierte la secuencia de nucleótidos de un ARNm en una secuencia de aminoácidos específica dentro del citoplasma de la célula?', options: ['a) Replicación.', 'b) Traducción.', 'c) Transcripción.', 'd) Splicing.'], answer: 'b' },
    { id: 16, block: 'BIOLOGÍA', text: 'Louis Pasteur refutó la teoría de la generación espontánea con sus experimentos de matraces con cuello de cisne. ¿Cuál fue el paso clave de su experimento que demostró que el aire contenía microorganismos responsables de la putrefacción?', options: ['a) Sellar completamente el matraz sin permitir la entrada de aire.', 'b) Hervir el caldo para esterilizarlo y luego dejarlo enfriar con el cuello de cisne intacto.', 'c) Filtrar el caldo nutritivo antes de hervirlo para eliminar cualquier contaminante previo.', 'd) Al inclinar el matraz para que el caldo tocara la curva del cuello (donde se depositaban las partículas), el caldo se contaminó.'], answer: 'd' },
    { id: 17, block: 'BIOLOGÍA', text: 'Un ecólogo compara dos hábitats adyacentes —un bosque y un pastizal— y mide la cantidad de especies que son únicas en cada uno, es decir, el grado de cambio o reemplazo de especies a lo largo del gradiente ambiental. Este índice se conoce como:', options: ['a) Riqueza de especies (α-diversidad)', 'b) Diversidad beta (β-diversidad)', 'c) Diversidad gamma (γ-diversidad)', 'd) Estructura trófica de la comunidad'], answer: 'b' },
    { id: 18, block: 'BIOLOGÍA', text: 'En el ciclo del Nitrógeno, ¿cuál es el proceso clave realizado por bacterias especializadas (ej. Rhizobium) que transforma el N2 atmosférico, un gas inerte, en amonio (NH4+), haciéndolo finalmente accesible para las plantas?', options: ['a) Nitrificación.', 'b) Desnitrificación.', 'c) Amonificación.', 'd) Fijación de nitrógeno.'], answer: 'd' },
    { id: 19, block: 'BIOLOGÍA', text: 'El concepto de "deuda ecológica" se utiliza a menudo en debates sobre sostenibilidad. ¿Qué representa mejor este concepto en el contexto del consumo de recursos naturales y la capacidad de regeneración del planeta?', options: ['a) El valor económico total de todos los recursos renovables consumidos anualmente por un país.', 'b) La cantidad de CO2 emitida por una nación en exceso de sus compromisos internacionales.', 'c) La diferencia entre la huella ecológica de un país y su propia biocapacidad.', 'd) El costo de la limpieza de la contaminación histórica en los ecosistemas de aguas residuales.'], answer: 'c' },
    { id: 20, block: 'BIOLOGÍA', text: 'En un ecosistema tropical se observa que la eliminación de un depredador tope provoca un aumento en la población de herbívoros, lo que conduce a la sobreexplotación de las plantas y a una disminución significativa de la biomasa vegetal total. Posteriormente, se registra una reducción en la biodiversidad de especies vegetales y una alteración del ciclo de nutrientes. Desde el punto de vista de la ecología de comunidades y ecosistemas, ¿cómo se denomina este fenómeno y qué mecanismos ecológicos explican su efecto cascada sobre los diferentes niveles tróficos?', options: ['a) Efecto cascada trófica; control descendente de la estructura y función del ecosistema.', 'b) Sucesión ecológica; cambios en la estructura del ecosistema por reemplazo de especies pioneras.', 'c) Efecto cascada por competencia interespecífica; regulación de la comunidad por exclusión competitiva.', 'd) Retroalimentación positiva; amplificación de los procesos de productividad primaria.'], answer: 'a' }
];

// Variables globales
let currentQuestionIndex = 0;
let timerInterval;
const totalTime = 20 * 60; // 20 minutos (AJUSTADO)
let timeRemaining = totalTime;
let userAnswers = {};
let flaggedQuestions = new Set();
let isQuizSubmitted = false;
let isQuizActive = false;

// **FUNCIÓN MODIFICADA**
function startQuiz() {
    const email = window.currentUser ? window.currentUser.email : null;
    if (!email) {
        alert("Error: No se ha podido identificar al usuario. Por favor, inicie sesión de nuevo.");
        return;
    }

    // Verificar intentos antes de empezar
    const isAdmin = email === "sebastian.neto@593teveoenlau.ec";
    let attempts = localStorage.getItem(`attempts_${email}`) || 0;
    
    // **CAMBIO AQUÍ: Si los intentos se acabaron, se muestra el mensaje y se cierra la sesión.**
    if (!isAdmin && attempts >= 2) {
      alert("Ya alcanzaste el límite de 2 intentos. Se cerrará tu sesión.");
      logoutAndReload(); // Llama a la función para cerrar sesión y recargar
      return;
    }
    // **FIN DEL CAMBIO**

    if (typeof registerAttempt === 'function') {
        registerAttempt();
    } else {
        console.error("La función registerAttempt no está definida.");
        return;
    }

    isQuizActive = true;
    currentQuestionIndex = 0;
    timeRemaining = totalTime;
    userAnswers = {};
    flaggedQuestions.clear();
    isQuizSubmitted = false;
    document.getElementById('intro-page-container').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'flex';
    renderQuiz();
    startTimer();
    saveProgress();
}

function renderQuiz() {
    renderNavigation();
    renderQuestion(currentQuestionIndex);
    if (window.MathJax) {
        window.MathJax.typeset();
    }
}

// ================================================================
// ===== FUNCIÓN renderNavigation() MODIFICADA =====
// ================================================================
function renderNavigation() {
    // Apuntar al nuevo contenedor único
    const navContainer = document.getElementById('biology-nav-buttons');
    if (!navContainer) {
        console.error("Error: No se encontró el div 'biology-nav-buttons'. Asegúrate de actualizar tu index.html.");
        return;
    }
    navContainer.innerHTML = '';

    // Limpiar los contenedores antiguos (por si acaso no se actualizó el html)
    if (document.getElementById('math-nav-buttons')) document.getElementById('math-nav-buttons').innerHTML = '';
    if (document.getElementById('spatial-nav-buttons')) document.getElementById('spatial-nav-buttons').innerHTML = '';
    if (document.getElementById('verbal-nav-buttons')) document.getElementById('verbal-nav-buttons').innerHTML = '';

    questions.forEach((q, index) => {
        const button = document.createElement('button');
        button.textContent = q.id;
        button.onclick = () => {
            renderQuestion(index);
            saveProgress(); 
        };
        
        if (userAnswers[q.id]) button.classList.add('answered');
        if (flaggedQuestions.has(q.id)) button.classList.add('flagged');
        if (index === currentQuestionIndex) button.classList.add('active');
        
        // Añadir el botón al nuevo contenedor
        navContainer.appendChild(button);
    });
}
// ================================================================


// ================================================================
// ===== FUNCIÓN renderQuestion() (SIN CAMBIOS) =====
// Esta función ya estaba preparada para manejar preguntas de solo texto
// ================================================================
function renderQuestion(index) {
    currentQuestionIndex = index;
    const container = document.getElementById('question-container');
    container.innerHTML = '';
    const q = questions[index];
    document.getElementById('section-title').textContent = q.block;
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question active';

    // 1. Añadir Texto 1
    let html = `<h3>Pregunta ${q.id}.</h3><p>${q.text}</p>`;

    // 2. Añadir Imagen 1 (si existe)
    if (q.image) {
        const style = q.imageStyle || '';
        html += `<div class="image-container"><img src="${q.image}" alt="Imagen para el ejercicio ${q.id}" style="${style}"></div>`;
    }

    // 3. Añadir Texto 2 (si existe)
    if (q.textAfterImage) {
        html += `<p>${q.textAfterImage}</p>`;
    }
    
    // 4. Añadir Imagen 2 (la de opciones visuales, si existe)
    if (q.imageOptions) {
        const style = q.imageOptionsStyle || '';
        html += `<div class="image-container"><img src="${q.imageOptions}" alt="Opciones visuales para ${q.id}" style="${style}"></div>`;
    }

    // 5. Renderizar las opciones (de radio)
    html += '<div class="options">';

    // Caso A: Opciones con imágenes
    if (q.optionImages) {
        const containerClass = 'image-options-container'; 
        html += `<div class="${containerClass}">`;
        q.options.forEach((option, i) => {
            const optionValue = String.fromCharCode(97 + i); // a, b, c, d
            const checked = userAnswers[q.id] === optionValue ? 'checked' : '';
            html += `
                <label class="image-option-label">
                    <input type="radio" name="q${q.id}" value="${optionValue}" ${checked} onclick="handleOptionClick(${q.id}, this)">
                    <span>${option}</span>
                    <img src="${q.optionImages[i]}" alt="Opción ${optionValue}">
                </label>
            `;
        });
        html += `</div>`;
    } 
    // Caso B: Opciones de texto normales (Usado por Biología)
    else {
        q.options.forEach((option, i) => {
            const optionValue = option.charAt(0).toLowerCase();
            const checked = userAnswers[q.id] === optionValue ? 'checked' : '';
            html += `
                <label>
                    <input type="radio" name="q${q.id}" value="${optionValue}" ${checked} onclick="handleOptionClick(${q.id}, this)">
                    ${option}
                </label>
            `;
        });
    }
    html += '</div>'; // Cierre de .options
    
    questionDiv.innerHTML = html;
    container.appendChild(questionDiv);
    
    // Actualizar MathJax y botones
    if (window.MathJax) {
        window.MathJax.typesetPromise([questionDiv]).catch(function (err) {
            console.log('MathJax error: ' + err.message);
        });
    }

    updateNavigationButtons();
}
// ================================================================
// ===== FIN DE LA MODIFICACIÓN =====
// ================================================================


function handleOptionClick(questionId, element) {
    userAnswers[questionId] = element.value;
    saveProgress(); 
    renderNavigation();
}

function updateNavigationButtons() {
    document.getElementById('next-btn').style.display = currentQuestionIndex === questions.length - 1 ? 'none' : 'block';
    document.getElementById('prev-btn').style.display = currentQuestionIndex === 0 ? 'none' : 'block';
    const flagBtn = document.getElementById('flag-btn');
    if (flaggedQuestions.has(questions[currentQuestionIndex].id)) {
        flagBtn.style.backgroundColor = '#ffc107';
    } else {
        flagBtn.style.backgroundColor = '#6c757d';
    }
    renderNavigation();
}

function toggleFlaggedQuestion() {
    const currentId = questions[currentQuestionIndex].id;
    if (flaggedQuestions.has(currentId)) {
        flaggedQuestions.delete(currentId);
    } else {
        flaggedQuestions.add(currentId);
    }
    saveProgress();
    updateNavigationButtons();
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        renderQuestion(currentQuestionIndex + 1);
        saveProgress();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        renderQuestion(currentQuestionIndex - 1);
        saveProgress();
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
            return;
        }
        timeRemaining--;
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        document.getElementById('timer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        if (timeRemaining % 5 === 0) {
            saveProgress();
        }
    }, 1000);
}

function submitQuiz() {
    if (isQuizSubmitted) return; 
    clearInterval(timerInterval);
    isQuizSubmitted = true;
    isQuizActive = false; 
    localStorage.removeItem("quizState"); 
    
    document.getElementById('quiz-page').style.display = 'none';
    document.getElementById('results-page').style.display = 'flex';
    displayResultsPage();
}

function calculateResults() {
    let correctAnswers = 0;
    questions.forEach(q => {
        if (userAnswers[q.id] === q.answer) {
            correctAnswers++;
        }
    });
    return { correctAnswers, totalQuestions: questions.length };
}

function displayResultsPage() {
    const existingAdjustedScore = document.querySelector('.adjusted-score-display');
    if (existingAdjustedScore) {
        existingAdjustedScore.remove();
    }
    const results = calculateResults();
    const resultsScoreEl = document.querySelector('.results-score');
    resultsScoreEl.textContent = `Aciertos: ${results.correctAnswers} / ${results.totalQuestions} (${(results.correctAnswers / results.totalQuestions * 100).toFixed(1)}%)`;
    const baseScore = 425;
    const variableScore = 575;
    const pointsPerAnswer = variableScore / results.totalQuestions;
    const finalScore = Math.round(baseScore + (results.correctAnswers * pointsPerAnswer));
    const adjustedScoreEl = document.createElement('p');
    adjustedScoreEl.className = 'results-score adjusted-score-display';
    adjustedScoreEl.style.marginTop = '15px';
    adjustedScoreEl.style.fontSize = '2.8em';
    adjustedScoreEl.innerHTML = `Puntuación Final: <strong style="color: var(--accent-color);">${finalScore} / 1000</strong>`;
    resultsScoreEl.parentNode.insertBefore(adjustedScoreEl, resultsScoreEl.nextSibling);
    const resultsContent = document.getElementById('results-content');
    resultsContent.innerHTML = '';
    questions.forEach(q => {
        const userAnswer = userAnswers[q.id];
        const isCorrect = userAnswer === q.answer;
        const block = document.createElement('div');
        block.className = 'results-question-block';
        
        // --- Lógica de recuadro de resultados (similar a renderQuestion) ---
        let html = `<h4>Pregunta ${q.id}. ${q.block}</h4><p>${q.text}</p>`;
        
        // Imagen 1
        if (q.image) {
            const style = q.imageStyle || '';
            html += `<div class="image-container"><img src="${q.image}" alt="Imagen para el ejercicio ${q.id}" style="${style}"></div>`;
        }
        // Texto 2
        if (q.textAfterImage) {
            html += `<p>${q.textAfterImage}</p>`;
        }
        // Imagen 2
        if (q.imageOptions) {
            const style = q.imageOptionsStyle || '';
            html += `<div class="image-container"><img src="${q.imageOptions}" alt="Opciones visuales para ${q.id}" style="${style}"></div>`;
        }
        // --- Fin de lógica de recuadro ---

        html += '<div class="options">';
        if (q.optionImages) {
            const containerClass = 'image-options-container';
            html += `<div class="${containerClass}">`;
            q.options.forEach((option, i) => {
                const optionValue = String.fromCharCode(97 + i);
                const isSelected = userAnswer === optionValue;
                const isTheCorrectAnswer = q.answer === optionValue;
                let labelClass = 'image-option-label';
                if (isSelected && isCorrect) labelClass += ' correct';
                else if (isSelected && !isCorrect) labelClass += ' incorrect';
                else if (isTheCorrectAnswer) labelClass += ' correct';
                html += `
                    <label class="${labelClass}">
                        <input type="radio" name="results_q${q.id}" value="${optionValue}" ${isSelected ? 'checked' : ''} disabled>
                        <span>${option}</span>
                        <img src="${q.optionImages[i]}" alt="Opción ${optionValue}">
                    </label>`;
            });
            html += `</div>`;
        } else {
            q.options.forEach((option, i) => {
                const optionValue = option.charAt(0).toLowerCase();
                const isSelected = userAnswer === optionValue;
                const isTheCorrectAnswer = q.answer === optionValue;
                let labelClass = '';
                if (isSelected && isCorrect) labelClass = 'correct';
                else if (isSelected && !isCorrect) labelClass = 'incorrect';
                else if (isTheCorrectAnswer) labelClass = 'correct';
                html += `
                    <label class="${labelClass}">
                        <input type="radio" name="results_q${q.id}" value="${optionValue}" ${isSelected ? 'checked' : ''} disabled>
                        ${option}
                    </label>`;
            });
        }
        html += '</div>';
        if (!isCorrect) {
            html += `<p style="color: red; margin-top: 10px;">Tu respuesta: ${userAnswer ? userAnswer.toUpperCase() : 'Ninguna'}. Respuesta correcta: <strong>${q.answer.toUpperCase()}</strong></p>`;
        } else {
            html += `<p style="color: green; margin-top: 10px;">¡Respuesta correcta!</p>`;
        }
        block.innerHTML = html;
        resultsContent.appendChild(block);
    });

    if (window.MathJax) {
        window.MathJax.typesetPromise([resultsContent]).catch(function (err) {
            console.log('MathJax error: ' + err.message);
        });
    }
}

function saveProgress() {
    if (!isQuizActive || isQuizSubmitted) return;
    const state = {
        currentQuestionIndex,
        userAnswers,
        timeRemaining,
        flaggedQuestions: Array.from(flaggedQuestions)
    };
    localStorage.setItem("quizState", JSON.stringify(state));
}

function restoreProgress() {
    const savedState = localStorage.getItem("quizState");
    if (savedState) {
        const saved = JSON.parse(savedState);
        isQuizActive = true; 
        document.getElementById('intro-page-container').style.display = 'none';
        document.getElementById('quiz-page').style.display = 'flex';
        currentQuestionIndex = saved.currentQuestionIndex || 0;
        userAnswers = saved.userAnswers || {};
        timeRemaining = saved.timeRemaining || totalTime;
        flaggedQuestions = new Set(saved.flaggedQuestions || []);
        renderQuiz();
        startTimer();
    }
}

// LÓGICA DE INICIO CENTRALIZADA (sin cambios)
document.addEventListener('DOMContentLoaded', () => {
    auth.onAuthStateChanged(user => {
        if (user) {
            window.currentUser = user; 
            document.getElementById('login-page').style.display = 'none';
            document.getElementById('app-container').style.display = 'block';

            if (localStorage.getItem("quizState")) {
                restoreProgress();
            } else {
                document.getElementById('intro-page-container').style.display = 'flex';
                document.getElementById('quiz-page').style.display = 'none';
                document.getElementById('results-page').style.display = 'none';
            }
        } else {
            window.currentUser = null;
            document.getElementById('login-page').style.display = 'flex';
            document.getElementById('app-container').style.display = 'none';
        }
    });
});

window.addEventListener("beforeunload", (e) => {
    if (isQuizActive && !isQuizSubmitted) {
        const confirmationMessage = '¡Atención! Si cierras o recargas la pestaña, tu intento se enviará automáticamente. ¿Estás seguro?';
        e.returnValue = confirmationMessage; 
        return confirmationMessage;
    }
});

window.addEventListener("pagehide", () => {
    if (isQuizActive && !isQuizSubmitted) {
        saveProgress();
    }
});
