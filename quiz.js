// script.js
class QuizAvesAndinas {
    constructor() {
        this.allQuestions = [
            // Águila Ratonera Pechinegra
            {
                question: "¿Cuál es el nombre científico del Águila Ratonera Pechinegra?",
                options: ["Geranoaetus melanoleucus", "Himantopus mexicanus", "Recurvirostra andina", "Charadrius alticola"],
                correct: 0,
                explanation: "El Águila Ratonera Pechinegra tiene el nombre científico Geranoaetus melanoleucus."
            },
            {
                question: "¿En qué rango de altitud prefiere vivir el Águila Ratonera Pechinegra?",
                options: ["1,000-2,000 metros", "2,000-5,000 metros", "5,000-7,000 metros", "500-1,500 metros"],
                correct: 1,
                explanation: "El Águila Ratonera prefiere zonas entre los 2,000 y 5,000 metros de altitud."
            },
            {
                question: "¿Cuál es la envergadura del Águila Ratonera Pechinegra?",
                options: ["120-150 cm", "70-80 cm", "180-200 cm", "90-110 cm"],
                correct: 2,
                explanation: "El Águila Ratonera tiene una envergadura de 180-200 cm."
            },
            
            // Aguilucho Negro
            {
                question: "¿Cuál de estas aves tiene el plumaje completamente negro?",
                options: ["Águila Ratonera Pechinegra", "Aguilucho Negro", "Cigüeñuela", "Chullumpi"],
                correct: 1,
                explanation: "El Aguilucho Negro se caracteriza por su plumaje negro azabache."
            },
            {
                question: "¿Cuál es la velocidad máxima del Aguilucho Negro?",
                options: ["40-50 km/h", "60-70 km/h", "80-90 km/h", "100-110 km/h"],
                correct: 1,
                explanation: "El Aguilucho Negro puede alcanzar velocidades de 60-70 km/h."
            },
            
            // Avoceta Andina
            {
                question: "¿Cuál es la característica más distintiva de la Avoceta Andina?",
                options: ["Su cola larga", "Su pico curvado hacia arriba", "Sus patas cortas", "Su canto melodioso"],
                correct: 1,
                explanation: "La Avoceta Andina es fácil de reconocer por su largo pico curvado hacia arriba."
            },
            {
                question: "¿Cuál es el estado de conservación de la Avoceta Andina?",
                options: ["Preocupación Menor", "Vulnerable", "En Peligro", "Extinta"],
                correct: 1,
                explanation: "La Avoceta Andina está clasificada como Vulnerable debido a su dependencia de humedales."
            },
            
            // Chorlito de Puna
            {
                question: "¿A qué familia pertenece el Chorlito de Puna?",
                options: ["Accipitridae", "Recurvirostridae", "Charadriidae", "Anatidae"],
                correct: 2,
                explanation: "El Chorlito de Puna pertenece a la familia Charadriidae."
            },
            {
                question: "¿Dónde construye su nido el Chorlito de Puna?",
                options: ["En árboles altos", "En acantilados", "En el suelo", "En cuevas"],
                correct: 2,
                explanation: "El Chorlito de Puna construye nidos simples en el suelo, camuflados entre la vegetación."
            },
            
            // Chullumpi
            {
                question: "¿Cuál es el peso aproximado del Chullumpi?",
                options: ["200-300 g", "500-800 g", "1.2-2.0 kg", "40-55 g"],
                correct: 1,
                explanation: "El Chullumpi pesa entre 500-800 gramos."
            },
            {
                question: "¿A qué orden pertenece el Chullumpi?",
                options: ["Charadriiformes", "Anseriformes", "Accipitriformes", "Gruiformes"],
                correct: 1,
                explanation: "El Chullumpi pertenece al orden Anseriformes, como todos los patos."
            },
            
            // Cigüeñuela
            {
                question: "¿Cuál es la principal fuente de alimento de la Cigüeñuela?",
                options: ["Semillas y frutos", "Insectos acuáticos y crustáceos", "Peces grandes", "Hojas y tallos"],
                correct: 1,
                explanation: "La Cigüeñuela se alimenta principalmente de insectos acuáticos, crustáceos y larvas."
            },
            {
                question: "¿Cuál es la envergadura de la Cigüeñuela?",
                options: ["50-60 cm", "70-80 cm", "90-100 cm", "110-120 cm"],
                correct: 1,
                explanation: "La Cigüeñuela tiene una envergadura de 70-80 cm."
            },
            
            // Gallineta Común
            {
                question: "¿Cuál es la característica más distintiva del pico de la Gallineta Común?",
                options: ["Completamente negro", "Rojo con punta amarilla", "Amarillo brillante", "Verde azulado"],
                correct: 1,
                explanation: "La Gallineta Común tiene un pico rojo con punta amarilla muy característico."
            },
            {
                question: "¿A qué familia pertenece la Gallineta Común?",
                options: ["Anatidae", "Rallidae", "Ardeidae", "Charadriidae"],
                correct: 1,
                explanation: "La Gallineta Común pertenece a la familia Rallidae."
            },
            {
                question: "¿Cuál es la longevidad de la Gallineta Común?",
                options: ["5-7 años", "8-10 años", "Hasta 11 años", "15-20 años"],
                correct: 2,
                explanation: "La Gallineta Común puede vivir hasta 11 años."
            },
            
            // Gallinula Morada
            {
                question: "¿Cuál es otra denominación para la Gallinula Morada?",
                options: ["Pato morado", "Calamón americano", "Garza púrpura", "Cigüeña violeta"],
                correct: 1,
                explanation: "La Gallinula Morada también se conoce como calamón americano."
            },
            {
                question: "¿Qué colores predominan en el plumaje de la Gallinula Morada?",
                options: ["Negro y blanco", "Púrpura, azul metálico y verde", "Marrón y gris", "Rojo y amarillo"],
                correct: 1,
                explanation: "La Gallinula Morada presenta tonalidades púrpuras, azul metálico y verde iridiscente."
            },
            
            // Garceta Bueyera
            {
                question: "¿Por qué se llama 'Bueyera' a esta garceta?",
                options: ["Por su tamaño", "Porque sigue al ganado", "Por su color", "Por su hábitat"],
                correct: 1,
                explanation: "Se llama Garceta Bueyera porque sigue al ganado para atrapar insectos espantados por su movimiento."
            },
            {
                question: "¿Cuál es la envergadura de la Garceta Bueyera?",
                options: ["60-70 cm", "75-85 cm", "88-96 cm", "100-110 cm"],
                correct: 2,
                explanation: "La Garceta Bueyera tiene una envergadura de 88-96 cm."
            },
            {
                question: "¿Qué color desarrolla la Garceta Bueyera en época de cría?",
                options: ["Plumas negras", "Plumas color crema", "Plumas azules", "Plumas rojas"],
                correct: 1,
                explanation: "Durante la época de cría, desarrolla plumas color crema en la cabeza, pecho y lomo."
            },
            
            // Garceta Grande
            {
                question: "¿Cómo se llaman las plumas ornamentales de la Garceta Grande?",
                options: ["Crestas", "Aigrettes", "Penachos", "Plumones"],
                correct: 1,
                explanation: "Las finas plumas ornamentales de la espalda se llaman aigrettes."
            },
            {
                question: "¿Cuál es el peso de la Garceta Grande?",
                options: ["500-800 g", "1-1.5 kg", "1.8-2.2 kg", "2.5-3 kg"],
                correct: 1,
                explanation: "La Garceta Grande pesa entre 1-1.5 kg."
            },
            
            // Garza Nocturna
            {
                question: "¿Cuál es la principal característica de los ojos de la Garza Nocturna?",
                options: ["Son amarillos", "Son rojizos intensos", "Son negros", "Son azules"],
                correct: 1,
                explanation: "La Garza Nocturna tiene ojos rojizos intensos que mejoran su visión nocturna."
            },
            {
                question: "¿Cuántas plumas blancas exhibe la Garza Nocturna durante el cortejo?",
                options: ["Una", "Dos", "Tres", "Cuatro"],
                correct: 1,
                explanation: "Durante el cortejo, exhibe dos largas plumas blancas en la cabeza."
            },
            
            // Gavilán Dorsirrojo
            {
                question: "¿Cuál es la característica más notable del Gavilán Dorsirrojo?",
                options: ["Caza solo", "Caza en grupo", "No puede volar", "Es nocturno"],
                correct: 1,
                explanation: "El Gavilán Dorsirrojo es notable por cazar en grupo, una rareza entre aves de presa."
            },
            {
                question: "¿Cuál es otro nombre del Gavilán Dorsirrojo?",
                options: ["Gavilán Común", "Gavilán de Harris", "Gavilán Andino", "Gavilán Real"],
                correct: 1,
                explanation: "El Gavilán Dorsirrojo también se conoce como Gavilán de Harris."
            },
            
            // Gaviota Andina
            {
                question: "¿Qué característica presenta la Gaviota Andina en época reproductiva?",
                options: ["Pico rojo", "Capucha negra", "Patas amarillas", "Cola larga"],
                correct: 1,
                explanation: "Durante la época reproductiva, presenta una capucha negra distintiva."
            },
            {
                question: "¿En qué rango de altitud vive la Gaviota Andina?",
                options: ["1,000-2,000 m", "2,000-3,000 m", "3,000-5,000 m", "5,000-6,000 m"],
                correct: 2,
                explanation: "La Gaviota Andina habita entre los 3,000 y 5,000 metros sobre el nivel del mar."
            },
            
            // Golondrina Andina
            {
                question: "¿Cuál es el peso de la Golondrina Andina?",
                options: ["10-12 g", "15-20 g", "25-30 g", "35-40 g"],
                correct: 1,
                explanation: "La Golondrina Andina pesa entre 15-20 gramos."
            },
            {
                question: "¿De qué se alimenta exclusivamente la Golondrina Andina?",
                options: ["Semillas", "Insectos", "Néctar", "Frutas"],
                correct: 1,
                explanation: "La Golondrina Andina se alimenta exclusivamente de insectos que captura en vuelo."
            },
            
            // Huallata
            {
                question: "¿Cuál es otro nombre para la Huallata?",
                options: ["Pato andino", "Ganso andino", "Cisne andino", "Garza andina"],
                correct: 1,
                explanation: "La Huallata también se conoce como Ganso andino."
            },
            {
                question: "¿Cuál es el peso de la Huallata?",
                options: ["1-1.5 kg", "2-2.5 kg", "2.5-3.5 kg", "4-5 kg"],
                correct: 2,
                explanation: "La Huallata pesa entre 2.5-3.5 kg."
            },
            {
                question: "¿Cómo se describe el sonido de la Huallata?",
                options: ["Melodioso", "Silbido", "Similar a una trompeta", "Chasquido"],
                correct: 2,
                explanation: "La Huallata produce fuertes graznidos resonantes, similares a una trompeta."
            },

            // Leke Leke (Avefría Andina)
    {
        question: "¿Por qué se llama 'Leke Leke' a la Avefría Andina?",
        options: ["Por su coloración", "Por su característico canto", "Por su tamaño", "Por su forma de volar"],
        correct: 1,
        explanation: "Se conoce localmente como 'leke leke' por su característico canto repetitivo 'leke-leke'."
    },
    {
        question: "¿Cuál es el nombre científico del Leke Leke?",
        options: ["Vanellus resplendens", "Geositta punensis", "Phoenicoparrus andinus", "Colaptes rupicola"],
        correct: 0,
        explanation: "El Leke Leke tiene el nombre científico Vanellus resplendens."
    },
    {
        question: "¿En qué rango de altitud habita el Leke Leke?",
        options: ["2,000-3,000 m", "3,000-4,800 m", "4,800-5,500 m", "1,000-2,500 m"],
        correct: 1,
        explanation: "El Leke Leke habita pastizales altoandinos entre 3,000 y 4,800 m s.n.m."
    },
    {
        question: "¿Cuál es la envergadura del Leke Leke?",
        options: ["60-70 cm", "80-90 cm", "100-110 cm", "40-50 cm"],
        correct: 1,
        explanation: "El Leke Leke tiene una envergadura de 80-90 cm."
    },
    {
        question: "¿Cómo defiende el Leke Leke su territorio?",
        options: ["Solo con vocalizaciones", "Ataca en vuelo a intrusos", "Se esconde en el nido", "Migra a otra zona"],
        correct: 1,
        explanation: "El Leke Leke es muy territorial y ataca en vuelo a depredadores o humanos que se acercan al nido."
    },

    // Minero de Puna
    {
        question: "¿Cuál es la especialidad del Minero de Puna en cuanto a locomoción?",
        options: ["Volar largas distancias", "Caminar y correr ágilmente", "Nadar", "Saltar entre rocas"],
        correct: 1,
        explanation: "El Minero de Puna prefiere caminar o correr ágilmente entre las rocas en lugar de volar."
    },
    {
        question: "¿Dónde construye sus nidos el Minero de Puna?",
        options: ["En árboles altos", "En cuevas excavadas en el suelo", "En acantilados", "En nidos comunales"],
        correct: 1,
        explanation: "El Minero de Puna excava túneles en el suelo para anidar, protegiéndose del frío andino."
    },
    {
        question: "¿Cuál es el peso aproximado del Minero de Puna?",
        options: ["25-35 g", "50-60 g", "100-120 g", "200-250 g"],
        correct: 0,
        explanation: "El Minero de Puna pesa entre 25-35 gramos, siendo un ave pequeña y liviana."
    },
    {
        question: "¿A qué familia pertenece el Minero de Puna?",
        options: ["Charadriidae", "Furnariidae", "Picidae", "Anatidae"],
        correct: 1,
        explanation: "El Minero de Puna pertenece a la familia Furnariidae."
    },

    // Parihuana (Flamenco Andino)
    {
        question: "¿Cuál es la causa del color rosado de la Parihuana?",
        options: ["Genética", "Edad avanzada", "Carotenoides en su dieta", "Exposición al sol"],
        correct: 2,
        explanation: "El color rosado de la Parihuana se debe a los carotenoides presentes en su alimentación."
    },
    {
        question: "¿Cuál es la longevidad de la Parihuana?",
        options: ["10-15 años", "20-25 años", "30-40 años", "50-60 años"],
        correct: 2,
        explanation: "La Parihuana puede vivir entre 30-40 años, siendo una de las aves más longevas de la región."
    },
    {
        question: "¿Cuál es el estado de conservación de la Parihuana?",
        options: ["Preocupación Menor", "Vulnerable", "En Peligro Crítico", "Extinta"],
        correct: 1,
        explanation: "La Parihuana está clasificada como Vulnerable debido a la disminución de humedales y contaminación."
    },
    {
        question: "¿Cuál es la velocidad máxima de vuelo de la Parihuana?",
        options: ["40 km/h", "hasta 60 km/h", "80 km/h", "100 km/h"],
        correct: 1,
        explanation: "La Parihuana puede volar hasta 60 km/h durante sus desplazamientos."
    },
    {
        question: "¿De qué se alimenta principalmente la Parihuana?",
        options: ["Peces pequeños", "Algas microscópicas y diatomeas", "Insectos", "Semillas"],
        correct: 1,
        explanation: "La Parihuana se alimenta filtrando algas microscópicas, diatomeas y otros microorganismos del agua."
    },

    // Parpadeo Andino
    {
        question: "¿Qué hace único al Parpadeo Andino entre los carpinteros?",
        options: ["Su gran tamaño", "Sus hábitos terrestres", "Su canto melodioso", "Su plumaje colorido"],
        correct: 1,
        explanation: "El Parpadeo Andino es único porque ha desarrollado hábitos terrestres, pasando más tiempo en el suelo que en árboles."
    },
    {
        question: "¿Cuál es el alimento principal del Parpadeo Andino?",
        options: ["Semillas", "Hormigas", "Frutas", "Néctar"],
        correct: 1,
        explanation: "El Parpadeo Andino es especialista en hormigas, usando su lengua pegajosa para capturarlas."
    },
    {
        question: "¿A qué orden pertenece el Parpadeo Andino?",
        options: ["Passeriformes", "Piciformes", "Charadriiformes", "Anseriformes"],
        correct: 1,
        explanation: "El Parpadeo Andino pertenece al orden Piciformes, como todos los carpinteros."
    },
    {
        question: "¿Cuál es el peso del Parpadeo Andino?",
        options: ["50-70 g", "100-120 g", "150-180 g", "200-250 g"],
        correct: 1,
        explanation: "El Parpadeo Andino pesa entre 100-120 gramos."
    },

    // Pata Amarilla Menor
    {
        question: "¿Cuál es la característica más distintiva de la Pata Amarilla Menor?",
        options: ["Su pico largo", "Sus patas largas y amarillas", "Su cola colorida", "Su cresta"],
        correct: 1,
        explanation: "La Pata Amarilla Menor es reconocida por sus patas largas y amarillas distintivas."
    },
    {
        question: "¿Qué distancia puede recorrer la Pata Amarilla Menor en sus migraciones?",
        options: ["3,000 km", "5,000 km", "más de 7,000 km", "10,000 km"],
        correct: 2,
        explanation: "La Pata Amarilla Menor puede recorrer más de 7,000 km en sus rutas migratorias anuales."
    },
    {
        question: "¿Dónde cría la Pata Amarilla Menor?",
        options: ["En Perú", "En zonas boscosas de Canadá y Alaska", "En Argentina", "En Bolivia"],
        correct: 1,
        explanation: "La Pata Amarilla Menor cría en zonas boscosas de Canadá y Alaska, luego migra hacia el sur."
    },
    {
        question: "¿Cuál es la velocidad máxima de la Pata Amarilla Menor?",
        options: ["40 km/h", "60 km/h", "Hasta 70 km/h", "90 km/h"],
        correct: 2,
        explanation: "La Pata Amarilla Menor puede alcanzar velocidades de hasta 70 km/h."
    },

    // Pato Puna
    {
        question: "¿Cuál es la característica más llamativa del Pato Puna?",
        options: ["Su tamaño grande", "Su pico azul brillante y cabeza negra", "Su cola larga", "Sus patas rojas"],
        correct: 1,
        explanation: "El Pato Puna es muy llamativo por su pico azul brillante y cabeza negra."
    },
    {
        question: "¿Cuál es la longevidad del Pato Puna?",
        options: ["5-7 años", "10-12 años", "15-18 años", "20-25 años"],
        correct: 1,
        explanation: "El Pato Puna puede vivir entre 10-12 años."
    },
    {
        question: "¿Cuál es la velocidad máxima del Pato Puna?",
        options: ["50 km/h", "Hasta 80 km/h", "100 km/h", "120 km/h"],
        correct: 1,
        explanation: "El Pato Puna puede alcanzar velocidades de hasta 80 km/h."
    },
    {
        question: "¿Cómo se alimenta principalmente el Pato Puna?",
        options: ["Cazando peces", "Filtrando con su pico ensanchado", "Comiendo plantas terrestres", "Cazando insectos voladores"],
        correct: 1,
        explanation: "El Pato Puna usa su pico ensanchado para filtrar algas, larvas y pequeños crustáceos del agua."
    },

    // Pato Rana
    {
        question: "¿Por qué se llama 'Pato Rana' a esta especie?",
        options: ["Por su color verde", "Por su habilidad para bucear", "Por su canto similar a las ranas", "Por vivir cerca de ranas"],
        correct: 1,
        explanation: "Se llama Pato Rana por su excelente habilidad para bucear y zambullirse, similar a como lo hacen las ranas."
    },
    {
        question: "¿Cuál es el nombre científico del Pato Rana?",
        options: ["Spatula puna", "Oxyura ferruginea", "Spatula cyanoptera", "Tringa flavipes"],
        correct: 1,
        explanation: "El Pato Rana tiene el nombre científico Oxyura ferruginea."
    },
    {
        question: "¿Qué raramente hace el Pato Rana?",
        options: ["Nadar", "Bucear", "Volar", "Comer"],
        correct: 2,
        explanation: "El Pato Rana rara vez vuela y pasa casi toda su vida flotando o sumergido en las lagunas."
    },
    {
        question: "¿Cuál es el peso del Pato Rana?",
        options: ["200-300 g", "500-700 g", "800-1000 g", "1200-1500 g"],
        correct: 1,
        explanation: "El Pato Rana pesa entre 500-700 gramos."
    },

    // Pato Sutro
    {
        question: "¿Cuál es la característica más distintiva del macho del Pato Sutro?",
        options: ["Plumaje verde brillante", "Plumaje rojo ladrillo y pico azul celeste", "Cola muy larga", "Cresta prominente"],
        correct: 1,
        explanation: "Los machos del Pato Sutro tienen plumaje castaño intenso (rojo ladrillo) y un pico celeste muy visible."
    },
    {
        question: "¿Dónde se encuentra principalmente el Pato Sutro?",
        options: ["En todo Perú", "En la costa central del Perú", "Solo en la sierra", "En la selva amazónica"],
        correct: 1,
        explanation: "El Pato Sutro se encuentra principalmente en la costa central del Perú, como en los pantanos de Villa."
    },
    {
        question: "¿Cuál es el estado de conservación del Pato Sutro?",
        options: ["Preocupación Menor", "Vulnerable", "En Peligro Crítico", "Extinto"],
        correct: 1,
        explanation: "El Pato Sutro está clasificado como Vulnerable debido a la pérdida de hábitat en humedales costeros."
    },
    {
        question: "¿Por qué es difícil observar al Pato Sutro?",
        options: ["Es nocturno", "Se oculta entre juncos y totoras", "Vuela muy rápido", "Es muy pequeño"],
        correct: 1,
        explanation: "El Pato Sutro es difícil de observar porque se oculta fácilmente entre juncos y totoras de la vegetación acuática."
    },

    // Preguntas comparativas y de distribución
    {
        question: "¿Cuál de estas aves tiene la mayor envergadura?",
        options: ["Leke Leke (80-90 cm)", "Parihuana (140-160 cm)", "Pato Puna (65-75 cm)", "Parpadeo Andino (35-40 cm)"],
        correct: 1,
        explanation: "La Parihuana (Flamenco Andino) tiene la mayor envergadura con 140-160 cm."
    },
    {
        question: "¿Cuál de estas aves es migratoria?",
        options: ["Minero de Puna", "Pata Amarilla Menor", "Leke Leke", "Pato Rana"],
        correct: 1,
        explanation: "La Pata Amarilla Menor es migratoria, criando en Canadá y Alaska y migrando hacia América del Sur."
    },
    {
        question: "¿Cuál de estas aves está clasificada como Vulnerable?",
        options: ["Minero de Puna", "Parihuana y Pato Sutro", "Leke Leke", "Pato Rana"],
        correct: 1,
        explanation: "Tanto la Parihuana como el Pato Sutro están clasificados como Vulnerable por pérdida de hábitat."
    },
    {
        question: "¿Cuál de estas aves es especialista en filtrar alimento del agua?",
        options: ["Parpadeo Andino", "Minero de Puna", "Parihuana", "Leke Leke"],
        correct: 2,
        explanation: "La Parihuana es especialista en filtrar microorganismos del agua con su pico especializado."
    },

    // Pinchaflores de Garganta Negra
    {
        question: "¿Cuál es la técnica alimentaria única del Pinchaflores de Garganta Negra?",
        options: ["Poliniza flores normalmente", "Corta la base de las flores para extraer néctar", "Come solo insectos", "Perfora frutas"],
        correct: 1,
        explanation: "El Pinchaflores corta la base de las flores para acceder al néctar sin polinizar, técnica conocida como 'robo de néctar'."
    },
    {
        question: "¿Cuál es el nombre científico del Pinchaflores de Garganta Negra?",
        options: ["Diglossa brunneiventris", "Phrygilus punensis", "Pardirallus sanguinolentus", "Podiceps occipitalis"],
        correct: 0,
        explanation: "El Pinchaflores de Garganta Negra tiene el nombre científico Diglossa brunneiventris."
    },
    {
        question: "¿En qué rango altitudinal vive el Pinchaflores?",
        options: ["1,000-2,000 m", "2,500-4,000 m", "4,000-5,000 m", "500-1,500 m"],
        correct: 1,
        explanation: "El Pinchaflores habita en zonas entre 2,500 y 4,000 m s.n.m. en bosques andinos."
    },
    {
        question: "¿Cuál es el peso del Pinchaflores de Garganta Negra?",
        options: ["12-18 g", "25-35 g", "50-60 g", "80-100 g"],
        correct: 0,
        explanation: "El Pinchaflores es muy pequeño, pesando solo entre 12-18 gramos."
    },

    // Pinzón Sierra Peruano
    {
        question: "¿Cuál es la adaptación principal del Pinzón Sierra Peruano al clima andino?",
        options: ["Patas largas", "Plumaje denso para resistir el frío", "Pico muy largo", "Alas grandes"],
        correct: 1,
        explanation: "El Pinzón Sierra Peruano tiene plumaje denso que le permite resistir las bajas temperaturas de la puna."
    },
    {
        question: "¿Cuál es la dieta principal del Pinzón Sierra Peruano?",
        options: ["Solo néctar", "Principalmente semillas", "Solo insectos", "Peces pequeños"],
        correct: 1,
        explanation: "El Pinzón Sierra Peruano es granívoro, alimentándose principalmente de semillas de plantas resistentes."
    },
    {
        question: "¿A qué altitud mínima vive el Pinzón Sierra Peruano?",
        options: ["2,000 m", "3,000 m", "4,000 m", "5,000 m"],
        correct: 1,
        explanation: "El Pinzón Sierra Peruano vive en altitudes superiores a 3,000 m s.n.m."
    },
    {
        question: "¿Cuál es el tamaño del Pinzón Sierra Peruano?",
        options: ["10-12 cm", "14-16 cm", "18-20 cm", "22-25 cm"],
        correct: 1,
        explanation: "El Pinzón Sierra Peruano mide entre 14-16 cm de longitud."
    },

    // Rascón Plomizo
    {
        question: "¿Por qué es difícil observar al Rascón Plomizo?",
        options: ["Es muy pequeño", "Vuela muy rápido", "Es tímido y se desplaza con sigilo", "Solo sale de noche"],
        correct: 2,
        explanation: "El Rascón Plomizo es una ave tímida que se desplaza sigilosamente entre la vegetación densa."
    },
    {
        question: "¿Cuándo es más activo el Rascón Plomizo?",
        options: ["Al mediodía", "Al amanecer y anochecer", "Solo de noche", "Durante tormentas"],
        correct: 1,
        explanation: "El Rascón Plomizo es más activo al amanecer y al anochecer, siendo más fácil de oír que de ver."
    },
    {
        question: "¿A qué orden pertenece el Rascón Plomizo?",
        options: ["Passeriformes", "Gruiformes", "Charadriiformes", "Anseriformes"],
        correct: 1,
        explanation: "El Rascón Plomizo pertenece al orden Gruiformes, familia Rallidae."
    },
    {
        question: "¿Cuál es el peso del Rascón Plomizo?",
        options: ["50-80 g", "100-150 g", "180-230 g", "300-400 g"],
        correct: 2,
        explanation: "El Rascón Plomizo pesa entre 180-230 gramos."
    },

    // Zambullidor
    {
        question: "¿Cuál es la principal adaptación del Zambullidor para el buceo?",
        options: ["Pico muy largo", "Cuerpo hidrodinámico y patas palmeadas", "Alas muy grandes", "Cola prensil"],
        correct: 1,
        explanation: "El Zambullidor tiene un cuerpo hidrodinámico, patas traseras palmeadas y plumaje impermeable para bucear eficientemente."
    },
    {
        question: "¿De qué se alimenta principalmente el Zambullidor?",
        options: ["Plantas acuáticas", "Peces pequeños e insectos acuáticos", "Semillas", "Néctar"],
        correct: 1,
        explanation: "El Zambullidor se alimenta de peces pequeños, insectos acuáticos y crustáceos que captura bajo el agua."
    },
    {
        question: "¿A qué orden pertenece el Zambullidor?",
        options: ["Anseriformes", "Podicipediformes", "Pelecaniformes", "Charadriiformes"],
        correct: 1,
        explanation: "El Zambullidor pertenece al orden Podicipediformes, especializado en aves buceadoras."
    },
    {
        question: "¿Cuál es el peso del Zambullidor?",
        options: ["100-150 g", "250-400 g", "500-600 g", "700-800 g"],
        correct: 1,
        explanation: "El Zambullidor pesa entre 250-400 gramos."
    },

    // Zampullín Plateado
    {
        question: "¿Cuál es la característica distintiva del plumaje del Zampullín Plateado?",
        options: ["Color rojo brillante", "Coloración grisácea metálica", "Plumas muy largas", "Manchas negras"],
        correct: 1,
        explanation: "El Zampullín Plateado se distingue por su coloración grisácea metálica que le da un aspecto plateado."
    },
    {
        question: "¿Cómo evade el peligro el Zampullín Plateado?",
        options: ["Volando rápidamente", "Zambulléndose", "Corriendo", "Camuflándose"],
        correct: 1,
        explanation: "El Zampullín Plateado prefiere zambullirse para evadir el peligro en lugar de volar."
    },
    {
        question: "¿Cuál es el tamaño del Zampullín Plateado?",
        options: ["15-18 cm", "21-27 cm", "30-35 cm", "40-45 cm"],
        correct: 1,
        explanation: "El Zampullín Plateado mide entre 21-27 cm, siendo pequeño y compacto."
    },
    {
        question: "¿Cuál es la distribución del Zampullín Plateado?",
        options: ["Solo en Perú", "Desde sur de EE.UU. hasta Sudamérica", "Solo en Bolivia", "Solo zonas costeras"],
        correct: 1,
        explanation: "El Zampullín Plateado se distribuye desde el sur de Estados Unidos hasta Sudamérica."
    },

    // Zarapito Picolargo
    {
        question: "¿Cuál es la característica más distintiva del Zarapito Picolargo?",
        options: ["Sus patas rojas", "Su pico largo curvado hacia abajo", "Su cola colorida", "Sus ojos grandes"],
        correct: 1,
        explanation: "El Zarapito Picolargo se distingue por su característico pico largo y curvado hacia abajo."
    },
    {
        question: "¿Dónde nidifica el Zarapito Picolargo?",
        options: ["En Sudamérica", "En tundras del Ártico", "En bosques tropicales", "En desiertos"],
        correct: 1,
        explanation: "El Zarapito Picolargo nidifica en las tundras del Ártico y migra hacia el sur durante el invierno."
    },
    {
        question: "¿Para qué le sirve su pico curvado al Zarapito Picolargo?",
        options: ["Para cortar flores", "Para capturar invertebrados en arena o barro", "Para pelear", "Para construir nidos"],
        correct: 1,
        explanation: "Su pico curvado le permite capturar invertebrados enterrados en la arena o barro de manera especializada."
    },
    {
        question: "¿Cuál es la longevidad del Zarapito Picolargo?",
        options: ["5-8 años", "12-15 años", "20-25 años", "30-35 años"],
        correct: 1,
        explanation: "El Zarapito Picolargo puede vivir entre 12-15 años, siendo longevo para un ave playera."
    },

    // Preguntas comparativas adicionales
    {
        question: "¿Cuál de estas aves es la más pequeña?",
        options: ["Pinchaflores (12-18 g)", "Zampullín Plateado (100-150 g)", "Pinzón Sierra (18-25 g)", "Rascón Plomizo (180-230 g)"],
        correct: 0,
        explanation: "El Pinchaflores de Garganta Negra es la más pequeña, pesando solo 12-18 gramos."
    },
    {
        question: "¿Cuál de estas aves tiene un comportamiento alimentario considerado 'controversial'?",
        options: ["Zambullidor", "Pinchaflores", "Pinzón Sierra", "Zarapito"],
        correct: 1,
        explanation: "El Pinchaflores tiene un comportamiento controversial porque 'roba' néctar sin polinizar las flores."
    },
    {
        question: "¿Cuál de estas aves es especialista en bucear?",
        options: ["Rascón Plomizo", "Zambullidor y Zampullín Plateado", "Pinchaflores", "Zarapito Picolargo"],
        correct: 1,
        explanation: "Tanto el Zambullidor como el Zampullín Plateado son especialistas en bucear para capturar alimento."
    },
    {
        question: "¿Cuál de estas aves realiza las migraciones más largas?",
        options: ["Pinchaflores", "Pinzón Sierra", "Zarapito Picolargo", "Rascón Plomizo"],
        correct: 2,
        explanation: "El Zarapito Picolargo realiza migraciones transoceánicas desde el Ártico hasta Sudamérica."
    }

            
        ];

        this.questions = [];

        this.currentQuestion = 0;
        this.score = 0;
        this.selectedAnswer = null;
        this.userAnswers = [];
        this.isQuizComplete = false;

        this.initializeElements();
        this.bindEvents();
        this.generateRandomQuestions();
        this.loadQuestion();
    }

    initializeElements() {
        this.questionNumberEl = document.getElementById('questionNumber');
        this.totalQuestionsEl = document.getElementById('totalQuestions');
        this.questionTextEl = document.getElementById('questionText');
        this.optionsContainerEl = document.getElementById('optionsContainer');
        this.nextBtnEl = document.getElementById('nextBtn');
        this.quizContainerEl = document.getElementById('quizContainer');
        this.resultsContainerEl = document.getElementById('resultsContainer');
        this.finalScoreEl = document.getElementById('finalScore');
        this.totalScoreEl = document.getElementById('totalScore');
        this.scoreMessageEl = document.getElementById('scoreMessage');
        this.resultsDetailsEl = document.getElementById('resultsDetails');
        this.restartBtnEl = document.getElementById('restartBtn');
        this.progressFillEl = document.getElementById('progressFill');

        this.totalQuestionsEl.textContent = this.questions.length;
        this.totalScoreEl.textContent = this.questions.length;
    }

    bindEvents() {
        this.nextBtnEl.addEventListener('click', () => this.nextQuestion());
        this.restartBtnEl.addEventListener('click', () => this.restartQuiz());
    }

    generateRandomQuestions() {
        // Crear una copia del array de preguntas
        const shuffledQuestions = [...this.allQuestions];
        
        // Algoritmo Fisher-Yates para mezclar aleatoriamente
        for (let i = shuffledQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
        }
        
        // Seleccionar solo 10 preguntas aleatorias
        this.questions = shuffledQuestions.slice(0, 10);
    }

    loadQuestion() {
        if (this.currentQuestion >= this.questions.length) {
            this.showResults();
            return;
        }

        const question = this.questions[this.currentQuestion];
        this.selectedAnswer = null;

        this.questionNumberEl.textContent = this.currentQuestion + 1;
        this.questionTextEl.textContent = question.question;
        this.nextBtnEl.disabled = true;

        this.optionsContainerEl.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionEl = document.createElement('div');
            optionEl.className = 'option';
            optionEl.textContent = option;
            optionEl.addEventListener('click', () => this.selectOption(index, optionEl));
            this.optionsContainerEl.appendChild(optionEl);
        });

        this.updateProgress();
    }

    selectOption(index, optionEl) {
        if (this.selectedAnswer !== null) return;

        this.selectedAnswer = index;
        const question = this.questions[this.currentQuestion];
        
        // Guardar la respuesta del usuario
        this.userAnswers.push({
            question: question.question,
            selectedAnswer: index,
            correctAnswer: question.correct,
            explanation: question.explanation,
            isCorrect: index === question.correct
        });

        // Mostrar todas las opciones con sus estados
        const allOptions = this.optionsContainerEl.querySelectorAll('.option');
        allOptions.forEach((opt, i) => {
            opt.classList.add('disabled');
            if (i === question.correct) {
                opt.classList.add('correct');
            } else if (i === index && i !== question.correct) {
                opt.classList.add('incorrect');
            }
        });

        // Actualizar puntuación
        if (index === question.correct) {
            this.score++;
        }

        this.nextBtnEl.disabled = false;
        
        // Cambiar texto del botón en la última pregunta
        if (this.currentQuestion === this.questions.length - 1) {
            this.nextBtnEl.textContent = 'Ver Resultados';
        }
    }

    nextQuestion() {
        this.currentQuestion++;
        this.loadQuestion();
    }

    updateProgress() {
        const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
        this.progressFillEl.style.width = `${progress}%`;
    }

    showResults() {
        this.isQuizComplete = true;
        this.quizContainerEl.style.display = 'none';
        this.resultsContainerEl.style.display = 'block';

        this.finalScoreEl.textContent = this.score;
        this.scoreMessageEl.textContent = this.getScoreMessage();

        // Mostrar detalles de las respuestas
        this.resultsDetailsEl.innerHTML = '';
        this.userAnswers.forEach((answer, index) => {
            const resultItem = document.createElement('div');
            resultItem.className = `result-item ${answer.isCorrect ? 'correct' : 'incorrect'}`;
            
            resultItem.innerHTML = `
                <div>
                    <strong>Pregunta ${index + 1}:</strong> ${answer.question}
                </div>
                <div>
                    <span class="result-icon">${answer.isCorrect ? '✅' : '❌'}</span>
                </div>
            `;
            
            this.resultsDetailsEl.appendChild(resultItem);

            // Agregar explicación
            const explanation = document.createElement('div');
            explanation.style.cssText = 'font-size: 0.9rem; color: #666; margin-top: 5px; padding-left: 20px;';
            explanation.textContent = answer.explanation;
            this.resultsDetailsEl.appendChild(explanation);
        });

        this.progressFillEl.style.width = '100%';
    }

    getScoreMessage() {
        const percentage = (this.score / this.questions.length) * 100;
        
        if (percentage >= 90) {
            return '🏆 ¡Excepcional! Eres un experto en aves andinas';
        } else if (percentage >= 75) {
            return '🌟 ¡Muy bien! Tienes un buen conocimiento de aves andinas';
        } else if (percentage >= 60) {
            return '👍 ¡Bien hecho! Conoces bastante sobre aves andinas';
        } else if (percentage >= 40) {
            return '📚 Necesitas estudiar un poco más sobre aves andinas';
        } else {
            return '🔄 Te recomendamos revisar la información sobre aves andinas';
        }
    }

    restartQuiz() {
        this.currentQuestion = 0;
        this.score = 0;
        this.selectedAnswer = null;
        this.userAnswers = [];
        this.isQuizComplete = false;

        this.quizContainerEl.style.display = 'block';
        this.resultsContainerEl.style.display = 'none';
        this.nextBtnEl.textContent = 'Siguiente';
        this.progressFillEl.style.width = '0%';

        // Generar nuevas preguntas aleatorias
        this.generateRandomQuestions();
        this.loadQuestion();
    }
}

// Inicializar el quiz cuando la página se carga
document.addEventListener('DOMContentLoaded', () => {
    new QuizAvesAndinas();
});