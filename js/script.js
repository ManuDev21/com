// Función para mostrar la calculadora en SweetAlert2
document.querySelectorAll('.btn-ver-formula').forEach(button => {
    button.addEventListener('click', (e) => {
        const figura = e.target.getAttribute('data-figura');
        showCalculator(figura);
    });
});

// Mostrar el formulario y calcular dependiendo de la figura
function showCalculator(figura) {
    let calculatorHTML = '';

    if (figura === 'Círculo') {
        calculatorHTML = `
            <h5>Fórmula: Área = π × r², Perímetro = 2 × π × r</h5>
            <div class="mb-3">
                <label for="radio" class="form-label">Radio (r)</label>
                <input type="number" id="radio" class="form-control" placeholder="Ingresa el radio">
            </div>
            <button class="btn btn-primary" onclick="calculateCircle()">Calcular</button>
            <div id="circle-result" class="mt-3"></div>
        `;
    } else if (figura === 'Triángulo') {
        calculatorHTML = `
            <h5>Fórmula: Área = ½ × base × altura, Perímetro = a + b + c</h5>
            <div class="mb-3">
                <label for="base" class="form-label">Base (b)</label>
                <input type="number" id="base" class="form-control" placeholder="Ingresa la base">
            </div>
            <div class="mb-3">
                <label for="height" class="form-label">Altura (h)</label>
                <input type="number" id="height" class="form-control" placeholder="Ingresa la altura">
            </div>
            <div class="mb-3">
                <label for="side1" class="form-label">Lado 1 (a)</label>
                <input type="number" id="side1" class="form-control" placeholder="Ingresa el primer lado">
            </div>
            <div class="mb-3">
                <label for="side2" class="form-label">Lado 2 (b)</label>
                <input type="number" id="side2" class="form-control" placeholder="Ingresa el segundo lado">
            </div>
            <div class="mb-3">
                <label for="side3" class="form-label">Lado 3 (c)</label>
                <input type="number" id="side3" class="form-control" placeholder="Ingresa el tercer lado">
            </div>
            <button class="btn btn-primary" onclick="calculateTriangle()">Calcular</button>
            <div id="triangle-result" class="mt-3"></div>
        `;
    } else if (figura === 'Rectángulo') {
        calculatorHTML = `
            <h5>Fórmula: Área = base × altura, Perímetro = 2 × (base + altura)</h5>
            <div class="mb-3">
                <label for="base-rect" class="form-label">Base (b)</label>
                <input type="number" id="base-rect" class="form-control" placeholder="Ingresa la base">
            </div>
            <div class="mb-3">
                <label for="height-rect" class="form-label">Altura (h)</label>
                <input type="number" id="height-rect" class="form-control" placeholder="Ingresa la altura">
            </div>
            <button class="btn btn-primary" onclick="calculateRectangle()">Calcular</button>
            <div id="rectangle-result" class="mt-3"></div>
        `;
    } else if (figura === 'Rombo') {
        calculatorHTML = `
            <h5>Fórmula: Área = ½ × d₁ × d₂, Perímetro = 4 × L</h5>
            <div class="mb-3">
                <label for="diagonal1" class="form-label">Diagonal 1 (d₁)</label>
                <input type="number" id="diagonal1" class="form-control" placeholder="Ingresa la primera diagonal">
            </div>
            <div class="mb-3">
                <label for="diagonal2" class="form-label">Diagonal 2 (d₂)</label>
                <input type="number" id="diagonal2" class="form-control" placeholder="Ingresa la segunda diagonal">
            </div>
            <div class="mb-3">
                <label for="lado" class="form-label">Lado (L)</label>
                <input type="number" id="lado" class="form-control" placeholder="Ingresa la longitud de un lado">
            </div>
            <button class="btn btn-primary" onclick="calculateRombo()">Calcular</button>
            <div id="rombo-result" class="mt-3"></div>
        `;
    } else if (figura === 'Romboide') {
        calculatorHTML = `
            <h5>Fórmula: Área = base × altura, Perímetro = 2 × (base + lado)</h5>
            <div class="mb-3">
                <label for="base-romboide" class="form-label">Base (b)</label>
                <input type="number" id="base-romboide" class="form-control" placeholder="Ingresa la base">
            </div>
            <div class="mb-3">
                <label for="height-romboide" class="form-label">Altura (h)</label>
                <input type="number" id="height-romboide" class="form-control" placeholder="Ingresa la altura">
            </div>
            <div class="mb-3">
                <label for="side-romboide" class="form-label">Lado (L)</label>
                <input type="number" id="side-romboide" class="form-control" placeholder="Ingresa la longitud de un lado">
            </div>
            <button class="btn btn-primary" onclick="calculateRomboide()">Calcular</button>
            <div id="romboide-result" class="mt-3"></div>
        `;
    } else if (figura === 'Trapecio') {
        calculatorHTML = `
            <h5>Fórmula: Área = (b₁ + b₂) × h / 2, Perímetro = b₁ + b₂ + l₁ + l₂</h5>
            <div class="mb-3">
                <label for="base1" class="form-label">Base 1 (b₁)</label>
                <input type="number" id="base1" class="form-control" placeholder="Ingresa la base 1">
            </div>
            <div class="mb-3">
                <label for="base2" class="form-label">Base 2 (b₂)</label>
                <input type="number" id="base2" class="form-control" placeholder="Ingresa la base 2">
            </div>
            <div class="mb-3">
                <label for="height-trap" class="form-label">Altura (h)</label>
                <input type="number" id="height-trap" class="form-control" placeholder="Ingresa la altura">
            </div>
            <div class="mb-3">
                <label for="side1-trap" class="form-label">Lado 1 (l₁)</label>
                <input type="number" id="side1-trap" class="form-control" placeholder="Ingresa el primer lado no paralelo">
            </div>
            <div class="mb-3">
                <label for="side2-trap" class="form-label">Lado 2 (l₂)</label>
                <input type="number" id="side2-trap" class="form-control" placeholder="Ingresa el segundo lado no paralelo">
            </div>
            <button class="btn btn-primary" onclick="calculateTrapezoid()">Calcular</button>
            <div id="trapezoid-result" class="mt-3"></div>
        `;
    } else if (figura === 'Circunferencia') {
        calculatorHTML = `
            <h5>Fórmula: Área = π × r², Perímetro = 2 × π × r</h5>
            <div class="mb-3">
                <label for="radio-circ" class="form-label">Radio (r)</label>
                <input type="number" id="radio-circ" class="form-control" placeholder="Ingresa el radio">
            </div>
            <button class="btn btn-primary" onclick="calculateCircumference()">Calcular</button>
            <div id="circumference-result" class="mt-3"></div>
        `;
    } else if (figura === 'SectorCircular') {
        calculatorHTML = `
            <h5>Fórmulas: Área = (θ/360) × π × r², Longitud del arco = (θ/360) × 2πr</h5>
            <div class="mb-3">
                <label for="radio-sector" class="form-label">Radio (r)</label>
                <input type="number" id="radio-sector" class="form-control" placeholder="Ingresa el radio">
            </div>
            <div class="mb-3">
                <label for="angulo-sector" class="form-label">Ángulo central (θ) en grados</label>
                <input type="number" id="angulo-sector" class="form-control" placeholder="Ingresa el ángulo central en grados">
            </div>
            <button class="btn btn-primary" onclick="calculateSector()">Calcular</button>
            <div id="sector-result" class="mt-3"></div>
        `;
    } else if (figura === 'Cubo') {
        calculatorHTML = `
            <h5>Fórmulas: Volumen = a³, Área superficial = 6 × a²</h5>
            <div class="mb-3">
                <label for="lado-cubo" class="form-label">Longitud del lado (a)</label>
                <input type="number" id="lado-cubo" class="form-control" placeholder="Ingresa la longitud del lado">
            </div>
            <button class="btn btn-primary" onclick="calculateCube()">Calcular</button>
            <div id="cubo-result" class="mt-3"></div>
        `;
    } else if (figura === 'Paralelepípedo') {
        calculatorHTML = `
                <h5>Fórmulas: Volumen = a × b × c, Área superficial = 2 × (ab + ac + bc)</h5>
                <div class="mb-3">
                    <label for="lado1" class="form-label">Lado a</label>
                    <input type="number" id="lado1" class="form-control" placeholder="Ingresa el valor de a">
                </div>
                <div class="mb-3">
                    <label for="lado2" class="form-label">Lado b</label>
                    <input type="number" id="lado2" class="form-control" placeholder="Ingresa el valor de b">
                </div>
                <div class="mb-3">
                    <label for="lado3" class="form-label">Lado c</label>
                    <input type="number" id="lado3" class="form-control" placeholder="Ingresa el valor de c">
                </div>
                <button class="btn btn-primary" onclick="calculateParalelepipedo()">Calcular</button>
                <div id="paralelepipedo-result" class="mt-3"></div>
            `;
    } else if (figura === 'Piramide') {
        calculatorHTML = `
                    <h5>Fórmulas: Volumen = (1/3) × A_b × h, Área superficial = A_b + (1/2) × P_b × l</h5>
                    <div class="mb-3">
                        <label for="areaBase" class="form-label">Área de la base (A_b)</label>
                        <input type="number" id="areaBase" class="form-control" placeholder="Ingresa el área de la base">
                    </div>
                    <div class="mb-3">
                        <label for="altura" class="form-label">Altura (h)</label>
                        <input type="number" id="altura" class="form-control" placeholder="Ingresa la altura">
                    </div>
                    <div class="mb-3">
                        <label for="perimetroBase" class="form-label">Perímetro de la base (P_b)</label>
                        <input type="number" id="perimetroBase" class="form-control" placeholder="Ingresa el perímetro de la base">
                    </div>
                    <div class="mb-3">
                        <label for="apotema" class="form-label">Apotema (l)</label>
                        <input type="number" id="apotema" class="form-control" placeholder="Ingresa la apotema">
                    </div>
                    <button class="btn btn-primary" onclick="calculatePyramid()">Calcular</button>
                    <div id="piramide-result" class="mt-3"></div>
                `;
    } else if (figura === 'Cono') {
        calculatorHTML = `
                        <h5>Fórmulas: Volumen = (1/3) × π × r² × h, Área superficial = π × r × (r + l)</h5>
                        <div class="mb-3">
                            <label for="radio-cono" class="form-label">Radio de la base (r)</label>
                            <input type="number" id="radio-cono" class="form-control" placeholder="Ingresa el radio de la base">
                        </div>
                        <div class="mb-3">
                            <label for="altura-cono" class="form-label">Altura (h)</label>
                            <input type="number" id="altura-cono" class="form-control" placeholder="Ingresa la altura">
                        </div>
                        <div class="mb-3">
                            <label for="generatriz-cono" class="form-label">Generatriz (l)</label>
                            <input type="number" id="generatriz-cono" class="form-control" placeholder="Ingresa la generatriz">
                        </div>
                        <button class="btn btn-primary" onclick="calculateCone()">Calcular</button>
                        <div id="cone-result" class="mt-3"></div>
                    `;
    } else if (figura === 'Cilindro') {
        calculatorHTML = `
                            <h5>Fórmulas: Volumen = π × r² × h, Área superficial = 2π × r² + 2π × r × h</h5>
                            <div class="mb-3">
                                <label for="radio-cilindro" class="form-label">Radio de la base (r)</label>
                                <input type="number" id="radio-cilindro" class="form-control" placeholder="Ingresa el radio de la base">
                            </div>
                            <div class="mb-3">
                                <label for="altura-cilindro" class="form-label">Altura (h)</label>
                                <input type="number" id="altura-cilindro" class="form-control" placeholder="Ingresa la altura">
                            </div>
                            <button class="btn btn-primary" onclick="calculateCylinder()">Calcular</button>
                            <div id="cilindro-result" class="mt-3"></div>
                        `;
    } else if (figura === 'Esfera') {
        calculatorHTML = `
                                <h5>Fórmulas: Volumen = (4/3) × π × r³, Área superficial = 4 × π × r²</h5>
                                <div class="mb-3">
                                    <label for="radio-esfera" class="form-label">Radio (r)</label>
                                    <input type="number" id="radio-esfera" class="form-control" placeholder="Ingresa el radio de la esfera">
                                </div>
                                <button class="btn btn-primary" onclick="calculateSphere()">Calcular</button>
                                <div id="esfera-result" class="mt-3"></div>
                            `;
    } else if (figura === 'Cuadrado') {
        calculatorHTML = `
                                    <h5>Fórmulas: Área = a², Perímetro = 4 × a</h5>
                                    <div class="mb-3">
                                        <label for="lado-cuadrado" class="form-label">Lado (a)</label>
                                        <input type="number" id="lado-cuadrado" class="form-control" placeholder="Ingresa la longitud del lado">
                                    </div>
                                    <button class="btn btn-primary" onclick="calculateSquare()">Calcular</button>
                                    <div id="cuadrado-result" class="mt-3"></div>
                                `;
    }

    // Mostrar el contenido en SweetAlert2
    Swal.fire({
        title: 'Calculadora de Área y Perímetro',
        html: calculatorHTML,
        showCancelButton: true,
        cancelButtonText: 'Cerrar',
        focusConfirm: false,
    });
}

// Función para calcular el área y perímetro del Círculo
function calculateCircle() {
    const radio = parseFloat(document.getElementById('radio').value);
    if (radio > 0) {
        const area = Math.PI * Math.pow(radio, 2);
        const perimeter = 2 * Math.PI * radio;
        document.getElementById('circle-result').innerHTML = `
            Área del círculo: ${area.toFixed(2)} cm²<br>
            Perímetro del círculo: ${perimeter.toFixed(2)} cm
        `;
    } else {
        document.getElementById('circle-result').innerHTML = 'Por favor, ingresa un valor válido para el radio.';
    }
}

function calculateTriangle() {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    const side1 = parseFloat(document.getElementById('side1').value);
    const side2 = parseFloat(document.getElementById('side2').value);
    const side3 = parseFloat(document.getElementById('side3').value);

    if (base > 0 && height > 0 && side1 > 0 && side2 > 0 && side3 > 0) {
        const area = 0.5 * base * height;
        const perimeter = side1 + side2 + side3;
        document.getElementById('triangle-result').innerHTML = `
            Área del triángulo: ${area.toFixed(2)} cm²<br>
            Perímetro del triángulo: ${perimeter.toFixed(2)} cm
        `;
    } else {
        document.getElementById('triangle-result').innerHTML = 'Por favor, ingresa valores válidos para los lados y la altura.';
    }
}

function calculateRectangle() {
    const base = parseFloat(document.getElementById('base-rect').value);
    const height = parseFloat(document.getElementById('height-rect').value);

    if (base > 0 && height > 0) {
        const area = base * height;
        const perimeter = 2 * (base + height);
        document.getElementById('rectangle-result').innerHTML = `
            Área del rectángulo: ${area.toFixed(2)} cm²<br>
            Perímetro del rectángulo: ${perimeter.toFixed(2)} cm
        `;
    } else {
        document.getElementById('rectangle-result').innerHTML = 'Por favor, ingresa valores válidos para la base y la altura.';
    }
}

function calculateRombo() {
    const diagonal1 = parseFloat(document.getElementById('diagonal1').value);
    const diagonal2 = parseFloat(document.getElementById('diagonal2').value);
    const lado = parseFloat(document.getElementById('lado').value);

    if (diagonal1 > 0 && diagonal2 > 0 && lado > 0) {
        const area = (diagonal1 * diagonal2) / 2;
        const perimeter = 4 * lado;
        document.getElementById('rombo-result').innerHTML = `
            Área del rombo: ${area.toFixed(2)} cm²<br>
            Perímetro del rombo: ${perimeter.toFixed(2)} cm
        `;
    } else {
        document.getElementById('rombo-result').innerHTML = 'Por favor, ingresa valores válidos para las diagonales y el lado.';
    }
}

function calculateRomboide() {
    const base = parseFloat(document.getElementById('base-romboide').value);
    const height = parseFloat(document.getElementById('height-romboide').value);
    const side = parseFloat(document.getElementById('side-romboide').value);

    if (base > 0 && height > 0 && side > 0) {
        const area = base * height;
        const perimeter = 2 * (base + side);
        document.getElementById('romboide-result').innerHTML = `
            Área del romboide: ${area.toFixed(2)} cm²<br>
            Perímetro del romboide: ${perimeter.toFixed(2)} cm
        `;
    } else {
        document.getElementById('romboide-result').innerHTML = 'Por favor, ingresa valores válidos para la base, altura y el lado.';
    }
}

function calculateTrapezoid() {
    const base1 = parseFloat(document.getElementById('base1').value);
    const base2 = parseFloat(document.getElementById('base2').value);
    const height = parseFloat(document.getElementById('height-trap').value);
    const side1 = parseFloat(document.getElementById('side1-trap').value);
    const side2 = parseFloat(document.getElementById('side2-trap').value);

    if (base1 > 0 && base2 > 0 && height > 0 && side1 > 0 && side2 > 0) {
        const area = ((base1 + base2) * height) / 2;
        const perimeter = base1 + base2 + side1 + side2;
        document.getElementById('trapezoid-result').innerHTML = `
            Área del trapecio: ${area.toFixed(2)} cm²<br>
            Perímetro del trapecio: ${perimeter.toFixed(2)} cm
        `;
    } else {
        document.getElementById('trapezoid-result').innerHTML = 'Por favor, ingresa valores válidos para las bases, altura y los lados.';
    }
}

function calculateCircumference() {
    const radio = parseFloat(document.getElementById('radio-circ').value);

    if (radio > 0) {
        const area = Math.PI * Math.pow(radio, 2);
        const perimeter = 2 * Math.PI * radio;
        document.getElementById('circumference-result').innerHTML = `
            Área de la circunferencia: ${area.toFixed(2)} cm²<br>
            Perímetro de la circunferencia: ${perimeter.toFixed(2)} cm
        `;
    } else {
        document.getElementById('circumference-result').innerHTML = 'Por favor, ingresa un valor válido para el radio.';
    }
}

function calculateSector() {
    const radio = parseFloat(document.getElementById('radio-sector').value);
    const angulo = parseFloat(document.getElementById('angulo-sector').value);

    if (radio > 0 && angulo > 0) {
        const area = (angulo / 360) * Math.PI * Math.pow(radio, 2);
        const longitudArco = (angulo / 360) * 2 * Math.PI * radio;
        document.getElementById('sector-result').innerHTML = `
            Área del sector circular: ${area.toFixed(2)} cm²<br>
            Longitud del arco: ${longitudArco.toFixed(2)} cm
        `;
    } else {
        document.getElementById('sector-result').innerHTML = 'Por favor, ingresa valores válidos para el radio y el ángulo.';
    }
}

function calculateCube() {
    const lado = parseFloat(document.getElementById('lado-cubo').value);

    if (lado > 0) {
        const volumen = Math.pow(lado, 3);
        const areaSuperficial = 6 * Math.pow(lado, 2);
        document.getElementById('cubo-result').innerHTML = `
            Volumen del cubo: ${volumen.toFixed(2)} cm³<br>
            Área superficial del cubo: ${areaSuperficial.toFixed(2)} cm²
        `;
    } else {
        document.getElementById('cubo-result').innerHTML = 'Por favor, ingresa un valor válido para el lado.';
    }
}

function calculateParalelepipedo() {
    const a = parseFloat(document.getElementById('lado1').value);
    const b = parseFloat(document.getElementById('lado2').value);
    const c = parseFloat(document.getElementById('lado3').value);

    if (a > 0 && b > 0 && c > 0) {
        const volumen = a * b * c;
        const areaSuperficial = 2 * (a * b + a * c + b * c);
        document.getElementById('paralelepipedo-result').innerHTML = `
            Volumen del paralelepípedo: ${volumen.toFixed(2)} cm³<br>
            Área superficial del paralelepípedo: ${areaSuperficial.toFixed(2)} cm²
        `;
    } else {
        document.getElementById('paralelepipedo-result').innerHTML = 'Por favor, ingresa valores válidos para los lados a, b y c.';
    }
}

function calculatePyramid() {
    const areaBase = parseFloat(document.getElementById('areaBase').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const perimetroBase = parseFloat(document.getElementById('perimetroBase').value);
    const apotema = parseFloat(document.getElementById('apotema').value);

    if (areaBase > 0 && altura > 0 && perimetroBase > 0 && apotema > 0) {
        // Calcular volumen
        const volumen = (1 / 3) * areaBase * altura;

        // Calcular área superficial
        const areaSuperficial = areaBase + (0.5 * perimetroBase * apotema);

        document.getElementById('piramide-result').innerHTML = `
            Volumen de la pirámide: ${volumen.toFixed(2)} cm³<br>
            Área superficial de la pirámide: ${areaSuperficial.toFixed(2)} cm²
        `;
    } else {
        document.getElementById('piramide-result').innerHTML = 'Por favor, ingresa valores válidos para el área de la base, altura, perímetro de la base y apotema.';
    }
}

function calculateCone() {
    const radio = parseFloat(document.getElementById('radio-cono').value);
    const altura = parseFloat(document.getElementById('altura-cono').value);
    const generatriz = parseFloat(document.getElementById('generatriz-cono').value);

    if (radio > 0 && altura > 0 && generatriz > 0) {
        // Calcular volumen
        const volumen = (1 / 3) * Math.PI * Math.pow(radio, 2) * altura;

        // Calcular área superficial
        const areaSuperficial = Math.PI * radio * (radio + generatriz);

        document.getElementById('cone-result').innerHTML = `
            Volumen del cono: ${volumen.toFixed(2)} cm³<br>
            Área superficial del cono: ${areaSuperficial.toFixed(2)} cm²
        `;
    } else {
        document.getElementById('cone-result').innerHTML = 'Por favor, ingresa valores válidos para el radio, altura y generatriz.';
    }
}

function calculateCylinder() {
    const radio = parseFloat(document.getElementById('radio-cilindro').value);
    const altura = parseFloat(document.getElementById('altura-cilindro').value);

    if (radio > 0 && altura > 0) {
        // Calcular volumen
        const volumen = Math.PI * Math.pow(radio, 2) * altura;

        // Calcular área superficial
        const areaSuperficial = 2 * Math.PI * Math.pow(radio, 2) + 2 * Math.PI * radio * altura;

        document.getElementById('cilindro-result').innerHTML = `
            Volumen del cilindro: ${volumen.toFixed(2)} cm³<br>
            Área superficial del cilindro: ${areaSuperficial.toFixed(2)} cm²
        `;
    } else {
        document.getElementById('cilindro-result').innerHTML = 'Por favor, ingresa valores válidos para el radio y la altura.';
    }
}

function calculateSphere() {
    const radio = parseFloat(document.getElementById('radio-esfera').value);

    if (radio > 0) {
        // Calcular volumen
        const volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);

        // Calcular área superficial
        const areaSuperficial = 4 * Math.PI * Math.pow(radio, 2);

        document.getElementById('esfera-result').innerHTML = `
            Volumen de la esfera: ${volumen.toFixed(2)} cm³<br>
            Área superficial de la esfera: ${areaSuperficial.toFixed(2)} cm²
        `;
    } else {
        document.getElementById('esfera-result').innerHTML = 'Por favor, ingresa un valor válido para el radio.';
    }
}

function calculateSquare() {
    const lado = parseFloat(document.getElementById('lado-cuadrado').value);

    if (lado > 0) {
        // Calcular área
        const area = Math.pow(lado, 2);

        // Calcular perímetro
        const perimetro = 4 * lado;

        document.getElementById('cuadrado-result').innerHTML = `
            Área del cuadrado: ${area.toFixed(2)} cm²<br>
            Perímetro del cuadrado: ${perimetro.toFixed(2)} cm
        `;
    } else {
        document.getElementById('cuadrado-result').innerHTML = 'Por favor, ingresa un valor válido para el lado.';
    }
}











