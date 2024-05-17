import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import CartData from "../data/cart.json";
import CartItem from "../components/CartItem";

const Cart = () => {
  const [total, setTotal] = useState(calculateTotal());

  function calculateTotal() {
    return CartData.reduce(
      (accumulator, currentItem) =>
        (accumulator += currentItem.price * currentItem.quantity),
      0
    );
  }

  function updateTotal(change) {
    setTotal((prevTotal) => prevTotal + change);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={CartData}
        keyExtractor={(cart) => cart.id}
        renderItem={({ item }) => (
          <CartItem cartItem={item} updateTotal={updateTotal} />
        )}
      />
      <View style={styles.totalContainer}>
        <Pressable>
          <Text>Confirm</Text>
        </Pressable>
        <Text>Total: ${total}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 120,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Cart;

// {
//   "id":4,
//   "title":"Guía Astrológica Vibrar Alto",
//   "description":"Vibrar alto es una guía práctica que te invita a elevar tu frecuencia en los cuatro elementos: Fuego, Tierra, Aire y Agua.",
//   "price": 20900,
//   "discountPercentage": 10,
//   "rating": 4.3,
//   "stock": 13,
//   "brand": "Fera",
//   "category": "Cartas tarot y oraculos",
//   "thumbnail": "https://acdn.mitiendanube.com/stores/004/000/403/products/vibraralto_fotosprod6-4160982c0736de862917023179616407-1024-1024.webp",
//   "images": [
//     "https://acdn.mitiendanube.com/stores/004/000/403/products/vibraralto_fotosprod6-4160982c0736de862917023179616407-1024-1024.webp"
//   ]
// },
// {
//   "id": 5,
//   "title": "Oráculo de Hechizos",
//   "description": "44 rituales, recetas e intenciones para la asistencia mágica.",
//   "price": 29900,
//   "discountPercentage": 10.58,
//   "rating": 4.09,
//   "stock": 32,
//   "brand": "Huawei",
//   "category": " Cartas tarot y oraculos",
//   "thumbnail": "https://acdn.mitiendanube.com/stores/004/000/403/products/ohechizosnuevo_fotosprod1-ee5e8d34e7dd2c6d6817023211841002-1024-1024.webp",

//   "images": [
//     "https://acdn.mitiendanube.com/stores/004/000/403/products/ohechizosnuevo_fotosprod1-ee5e8d34e7dd2c6d6817023211841002-1024-1024.webp"
//   ]
// },
// {
//   "id": 6,
//   "title": "Tarot RDR - 78 Cartas de Tarot",
//   "description": "Recomendado especialmente para aquellos que se inician en el mundo del Tarot, el Tarot Rider Waite se destaca como uno de los más renombrados.",
//   "price": 14990,
//   "discountPercentage": 11.02,
//   "rating": 4.57,
//   "stock": 3,
//   "brand": "Raider Waite",
//   "category": "Cartas tarot y oraculos",
//   "thumbnail": "https://acdn.mitiendanube.com/stores/004/000/403/products/50-cd67884d58f90b232517058497639523-1024-1024.webp",

//   "images": [

//     "https://acdn.mitiendanube.com/stores/004/000/403/products/50-cd67884d58f90b232517058497639523-1024-1024.webp"
//   ]
// },
// {
//   "id": 7,
//   "title": "Libro de Tarot Magas Ilustradas con Baraja Incluida",
//   "description": "Descubre el poder de la magia interna con el Tarot Magas Ilustradas, un set único diseñado específicamente para mujeres que revelan magia a cada paso, sin necesidad de varita. Creado por la talentosa Mara Parra y bellamente ilustrado por Josefina Schargorodsky, con un prólogo inspirador de Mariana D'Erasmo, este tarot te invita a explorar una visión empoderadora y terrenal del mundo.",
//   "price": 49900,
//   "discountPercentage": 4.15,
//   "rating": 4.25,
//   "stock": 50,
//   "brand": "Fera",
//   "category": "Cartas tarot y oraculos",
//   "thumbnail": "https://acdn.mitiendanube.com/stores/004/000/403/products/173-85830fb2bd92db0f2017133798332341-1024-1024.webp",
//   "images": [
//     "https://acdn.mitiendanube.com/stores/004/000/403/products/173-85830fb2bd92db0f2017133798332341-1024-1024.webp"
//   ]
// },
// {
//   "id": 8,
//   "title": "Tarot de Marsella",
//   "description": "Sumérgete en el fascinante mundo de la adivinación y la espiritualidad con el mazo de cartas de Tarot Marsella + Guía Básica, el compañero perfecto para quienes desean explorar los misterios del pasado, presente y futuro. Con un diseño clásico y elegante, este mazo de 78 cartas te invita a un viaje único de autoconocimiento y sabiduría.",
//   "price": 14990,
//   "discountPercentage": 10,
//   "rating": 4.43,
//   "stock": 68,
//   "brand": "Iluminarte",
//   "category": "Cartas tarot y oraculos",
//   "thumbnail": "https://acdn.mitiendanube.com/stores/004/000/403/products/56-f1b540beca1f2214bc17058503484035-1024-1024.webp",
//   "images": [
//     "https://acdn.mitiendanube.com/stores/004/000/403/products/56-f1b540beca1f2214bc17058503484035-1024-1024.webp"
//   ]
// },
// {
//   "id": 9,
//   "title": "Paño de Tarot con Bolsita para Cartas",
//   "description": "¡Chequeá este combo mágico que tenemos para vos! Nuestro Paño de Tarot con Bolsita para Cartas es la última movida para que tus tiradas de cartas estén a otro nivel.",
//   "price": 9900,
//   "discountPercentage": 10,
//   "rating": 4.54,
//   "stock": 6,
//   "brand": "4 Elements",
//   "category": "Cartas tarot y oraculos",
//   "thumbnail": "https://acdn.mitiendanube.com/stores/004/000/403/products/190-c0b4dc1868287f970317133837056382-1024-1024.webp",
//   "images": [
//     "https://acdn.mitiendanube.com/stores/004/000/403/products/190-c0b4dc1868287f970317133837056382-1024-1024.webp"
//   ]
// },
// {
//   "id": 10,
//   "title": "Diario de Gratitud y Registro de Emociones",
//   "description": "Diario de Gratitud , podes empezarlo cuando desees, la fecha la colocas vos!",
//   "price": 20000,
//   "discountPercentage": 6.18,
//   "rating": 4.43,
//   "stock": 19,
//   "brand": "MorYoga",
//   "category": "Diarios De Gratitud",
//   "thumbnail": "https://acdn.mitiendanube.com/stores/004/000/403/products/68-a915f79382bf65706317058534176953-1024-1024.webp",
//   "images": [
//     "https://acdn.mitiendanube.com/stores/004/000/403/products/68-a915f79382bf65706317058534176953-1024-1024.webp"
//   ]
// },
// {
//   "id": 11,
//   "title": "Guía Astrológica Vibrar Alto",
//   "description": "Vibrar alto es una guía práctica que te invita a elevar tu frecuencia en los cuatro elementos: Fuego, Tierra, Aire y Agua",
//   "price": 20900,
//   "discountPercentage": 8.4,
//   "rating": 4.26,
//   "stock": 65,
//   "brand": "Fera",
//   "category": "Diarios De Gratitud",
//   "thumbnail": "https://acdn.mitiendanube.com/stores/004/000/403/products/vibraralto_fotosprod6-4160982c0736de862917023179616407-1024-1024.webp",
//   "images": [
//     "https://acdn.mitiendanube.com/stores/004/000/403/products/vibraralto_fotosprod6-4160982c0736de862917023179616407-1024-1024.webp"
   
//   ]
// },
// {
//   "id": 12,
//   "title": "Lámpara de Sal: Iluminá tu Espacio con Energía Pura ",
//   "description": "Llevate a tu casa una onda diferente con nuestra Lámpara de Sal. No es cualquier luz, es un pedacito de la naturaleza que te va a ayudar a relajarte y a purificar el ambiente. Con un diseño único que tira una luz cálida y suave, perfecta para crear un clima copado en cualquier rincón de tu hogar.",
//   "price": 18600,
//   "discountPercentage": 15.66,
//   "rating": 4,
//   "stock": 12,
//   "brand": "InspirArte",
//   "category": "Piedras Energeticas",
//   "thumbnail": "https://acdn.mitiendanube.com/stores/004/000/403/products/188-af0c1cb01fedae163617133824229315-1024-1024.webp",

//   "images": [
//     "https://acdn.mitiendanube.com/stores/004/000/403/products/188-af0c1cb01fedae163617133824229315-1024-1024.webp"

//   ]
// },
// {
//   "id": 13,
//   "title": "Cornalina pulida - mini",
//   "description": "Resaltando las tonalidades más cautivadoras de la cornalina, este cristal mini no solo es un accesorio hermoso, sino también un impulso instantáneo de vitalidad, coraje y creatividad.",
//   "price": 750,
//   "discountPercentage": 14,
//   "rating": 4.59,
//   "stock": 61,
//   "brand": "RockStar",
//   "category": "Piedras Energeticas",
//   "thumbnail": "https://acdn.mitiendanube.com/stores/004/000/403/products/100-c7fa2e01fd699d375117059596383441-1024-1024.webp",
  
//   "images": [
//     "https://acdn.mitiendanube.com/stores/004/000/403/products/100-c7fa2e01fd699d375117059596383441-1024-1024.webp"
//   ]
// },
// {
//   "id": 14,
//   "title": "Cuarzo Rosa premium pulido - mini",
//   "description": "Abre el corazón y promueve el amor incondicional,Restablece la confianza y la armonía,Sana emocionalmente y libera el dolor reprimido ",
//   "price": 1450,
//   "discountPercentage": 15.6,
//   "rating": 4.21,
//   "stock": 114,
//   "brand": "RockStar",
//   "category": "Piedras Energeticas",
//   "thumbnail": "https://acdn.mitiendanube.com/stores/004/000/403/products/98-d7e42ad84c24f655bb17059593214081-1024-1024.webp",
//   "images": [
//     "https://acdn.mitiendanube.com/stores/004/000/403/products/98-d7e42ad84c24f655bb17059593214081-1024-1024.webp"
//   ]
// },
// {
//   "id": 1,
//   "title": "Jaspe Rojo Pulido - Mini",
//   "description": "Este pequeño tesoro, pulido con esmero, presenta las tonalidades ricas y terrosas del jaspe rojo, conocido por sus propiedades energizantes y de fortalecimiento. Ideal para llevar contigo, este Jaspe Rojo Mini no solo añade un toque de belleza a tu colección, sino que también se cree que estimula la vitalidad y aporta una conexión más profunda con la tierra.",
//   "price": 650,
//   "discountPercentage": 10.99,
//   "rating": 4.7,
//   "stock": 105,
//   "brand": "RockStar",
//   "category": "Piedras Energeticas",
//   "thumbnail": "https://acdn.mitiendanube.com/stores/004/000/403/products/97-e70e0b4c0675a32ae717059587851513-1024-1024.webp",
//   "images": [
//     "https://acdn.mitiendanube.com/stores/004/000/403/products/97-e70e0b4c0675a32ae717059587851513-1024-1024.webp"
//   ]
// },
// {
//   "id": 16,
//   "title": "Ónix negro pulido - mini",
//   "description": "El Ónix Negro Pulido, una piedra preciosa que fusiona la profundidad del negro con un brillo pulido excepcional. Conocido por su belleza y propiedades energéticas, el Ónix Negro se asocia comúnmente con la protección y la fuerza interior",  
//   "price": 700,
//   "discountPercentage": 13.31,
//   "rating": 4.83,
//   "stock": 110,
//   "brand": "RockStar",
//   "category": "Piedras Energeticas",
//   "thumbnail": "https://acdn.mitiendanube.com/stores/004/000/403/products/96-f1f103e0e1b937bb9817059584580645-1024-1024.webp",
//   "images": [
//     "https://acdn.mitiendanube.com/stores/004/000/403/products/96-f1f103e0e1b937bb9817059584580645-1024-1024.webp"
//   ]
// },
// {
//   "id": 17,
//   "title": "Ojo de Tigre pulido mini",
//   "description": "Se dice que el ojo de tigre, al que también se le conoce como 'Piedra de la libertad' está cargado de energía positiva, una cualidad que protege frente a las malas vibraciones del entorno y puede ayudarnos a mantener el equilibrio en situaciones adversas de miedo, ansiedad o dificultad en la toma de decisiones.",
//   "price": 1560,
//   "discountPercentage": 4.09,
//   "rating": 4.52,
//   "stock": 78,
//   "brand": "RockStar",
//   "category": "Piedras Energeticas",
//   "thumbnail": "https://acdn.mitiendanube.com/stores/004/000/403/products/102-7bdf616aa0b4f453c817059579318268-1024-1024.webp",

//   "images": [
//     "https://acdn.mitiendanube.com/stores/004/000/403/products/102-7bdf616aa0b4f453c817059579318268-1024-1024.webp"
//   ]
// },
// {
//   "id": 18,
//   "title": "Kit de Limpieza Energética Vibrando Alto - Premium",
//   "description": "El Kit de Limpieza energética esta creado para que puedas limpiar tus espacios y llenarlos de buena energía, sacar las malas vibras, mejorar el estado de animo y el bienestar a través del sahumado, que es una practica ancestral que lograr realzar nuestros espacios y mejorar nuestro estado físico y mental.",
//   "price": 15000,
//   "discountPercentage": 13.1,
//   "rating": 4.56,
//   "stock": 88,
//   "brand": "Aromanza",
//   "category": "Kit Energetico",
//   "thumbnail": "https://acdn.mitiendanube.com/stores/004/000/403/products/kit1-013fcb07962eeb284517057800330030-1024-1024.webp",
//   "images": [
//     "https://acdn.mitiendanube.com/stores/004/000/403/products/kit1-013fcb07962eeb284517057800330030-1024-1024.webp"
//   ]
// },
// {
//   "id": 19,
//   "title": "Kit Sahumador Premium",
//   "description": "Al encender un sahumerio emprendemos un camino que nos dispone a ser agradecidos y apreciar cada detalle de la vida. El aquí y el ahora es lo único que tenemos, nuestra posibilidad radica en el presente, ser plenos y dejando fluir, aceptando lo que llega y dejando ir lo que se fue. ",
//   "price": 112000,
//   "discountPercentage": 10.68,
//   "rating": 4.42,
//   "stock": 54,
//   "brand": "Aromanza",
//   "category": "Kit Energetico",
//   "thumbnail": "https://acdn.mitiendanube.com/stores/004/000/403/products/24-ce81bbd3102435e3f317057787170570-1024-1024.webp",
//   "images": [
//     "https://acdn.mitiendanube.com/stores/004/000/403/products/24-ce81bbd3102435e3f317057787170570-1024-1024.webp"

//   ]
// },
// {
//   "id": 20,
//   "title": "Aceites Esenciales Aromáticos Just",
//   "description": "Aceites Esenciales para Aromaterapia: Todo el Relax y Bienestar que Necesitás",
//   "price": 30660,
//   "discountPercentage": 16.99,
//   "rating": 4.06,
//   "stock": 140,
//   "brand": "Just",
//   "category": "Autoconocimento",
//   "thumbnail": "https://acdn.mitiendanube.com/stores/004/000/403/products/178-dad7b44c4d2138f10217133814018705-1024-1024.webp",
//   "images": [
//     "https://acdn.mitiendanube.com/stores/004/000/403/products/178-dad7b44c4d2138f10217133814018705-1024-1024.webp"

//   ]
// },
// {
//   "id": 21,
//   "title": "Astrología - Carta Natal & Revolución Solar",
//   "description": "Descubre las claves de tu destino con nuestras consultas especializadas de carta natal y revolución solar. Profundiza en tu personalidad, desafíos y oportunidades a través de la interpretación astrológica detallada. Con expertos en astrología, te ofrecemos una visión única de tu viaje cósmico, ayudándote a alinear tus acciones con las energías universales. Obtén claridad, autoconocimiento y orientación para potenciar tu crecimiento personal.",
//   "price": 39000,
//   "discountPercentage": 4.81,
//   "rating": 4.44,
//   "stock": 13,
//   "brand": "Toques De Intuicion",
//   "category": "Autoconocimento",
//   "thumbnail": "https://acdn.mitiendanube.com/stores/004/000/403/products/134-6657ff90745054d4d117068020833205-1024-1024.webp",
//   "images": [
//     "https://acdn.mitiendanube.com/stores/004/000/403/products/134-6657ff90745054d4d117068020833205-1024-1024.webp"
//   ]
// },
// {
//   "id": 22,
//   "title": "Lectura de Tarot - Personalizadas",
//   "description": "¡Despierta tu intuición y desbloquea el potencial de tu destino con nuestras lecturas de tarot personalizadas!, Desvela los misterios del futuro y encuentra claridad en el presente a través de nuestras sesiones de lectura de tarot. Nuestros expertos intuitivos te guiarán con interpretaciones perspicaces, proporcionándote orientación y revelando las respuestas que buscas. Descubre la sabiduría oculta en las cartas y despliega un camino hacia el autoconocimiento y la toma de decisiones consciente.",
//   "price": 15500,
//   "discountPercentage": 15.58,
//   "rating": 4.57,
//   "stock": 146,
//   "brand": "Toques De Intuicion",
//   "category": "Autoconocimento",
//   "thumbnail": "https://acdn.mitiendanube.com/stores/004/000/403/products/49-cd03931edcfae1213a17068011877890-1024-1024.webp",
//   "images": [
//     "https://acdn.mitiendanube.com/stores/004/000/403/products/49-cd03931edcfae1213a17068011877890-1024-1024.webp"
//   ]
// },
// {
//   "id": 23,
//   "title": "Jardin Zen Buda meditando",
//   "description": "Jardín Zen con una figura de Buda meditando de dimensiones 22x15x10, diseñado como una pieza decorativa para un espacio sagrado: Adorna tu espacio sagrado con la majestuosidad de un Jardín Zen excepcional, donde la serenidad y la espiritualidad convergen en un equilibrio armonioso. Con medidas precisas de 22x15x10, este oasis de contemplación está diseñado como una obra maestra decorativa para elevar la energía de tu entorno.",
//   "price": 26000,
//   "discountPercentage": 10,
//   "rating": 4.85,
//   "stock": 16,
//   "brand": "Toques De Intuicion",
//   "category": "Autoconocimento",
//   "thumbnail":"https://acdn.mitiendanube.com/stores/004/000/403/products/107-ecb0dae3092844878c17061121971894-1024-1024.webp",
//   "images": [
//     "https://acdn.mitiendanube.com/stores/004/000/403/products/107-ecb0dae3092844878c17061121971894-1024-1024.webp"
//   ]
// },
// {
//   "id": 24,
//   "title": "Cuenco Tibetano 7 metales con tallados",
//   "description": "Los cuencos tibetanos son instrumentos de curación, sanación, relajación y meditación, ayudándonos a establecer una vibración saludable en todo nuestro organismo, tanto a nivel físico, mental o psicológico, emocional y espiritualmente.",
//   "price": 32990,
//   "discountPercentage": 8,
//   "rating": 4.94,
//   "stock": 13,
//   "brand": "Zeng",
//   "category": "Cuencos Tibetanos",
//   "thumbnail": "https://acdn.mitiendanube.com/stores/004/000/403/products/1-ae722ac6e213d978f917056019686307-1024-1024.webp",
//   "images": [
//     "https://acdn.mitiendanube.com/stores/004/000/403/products/1-ae722ac6e213d978f917056019686307-1024-1024.webp"
//   ]
// },
// {
//   "id": 25,
//   "title": "Péndulo Piao de bronce con testigo",
//   "description": "El péndulo Píao es un maestro en la sintonía fina con las vibras más sutiles, ayudándote a sintonizar con las respuestas que ya existen en el campo energético que te rodea. Además, su cámara de testigo te permite personalizar cada búsqueda, poniendo dentro un pelito de esa intención especial o una notita con lo que estás necesitando aclarar. Es como tener el as bajo la manga en cada sesión de búsqueda.",
//   "price": 14000,
//   "discountPercentage": 5,
//   "rating": 4.87,
//   "stock": 7,
//   "brand": "Zeng",
//   "category": "Cuencos Tibetanos",
//   "thumbnail": "https://acdn.mitiendanube.com/stores/004/000/403/products/155-c6044c615f849a9f9b17130353800756-1024-1024.webp",
//   "images": [
//     "https://acdn.mitiendanube.com/stores/004/000/403/products/155-c6044c615f849a9f9b17130353800756-1024-1024.webp"
//   ]
// },
// {
//   "id": 26,
//   "title": "Porta Incienso - Porta Sahumerios",
//   "description": "Porta Incienso o sahumerios de madera",
//   "price": 990,
//   "discountPercentage": 7,
//   "rating": 4.08,
//   "stock": 31,
//   "brand": "Sky Madera",
//   "category": "Sahumerios",
//   "thumbnail": "https://acdn.mitiendanube.com/stores/004/000/403/products/69-4a929b0ac926f6375317056138028245-1024-1024.webp",
//   "images": [
//     "https://acdn.mitiendanube.com/stores/004/000/403/products/69-4a929b0ac926f6375317056138028245-1024-1024.webp"
//   ]
// },
// {
//   "id": 27,
//   "title": "Rocío Áurico: Eleva tu Energía ",
//   "description": "Nuestros Rocíos Áuricos están especialmente formulados para transformar tu aura y tu espacio personal con vibraciones específicas según tus necesidades: Prosperidad, Armonización de Chakras y Atracción. Cada spray está infusionado con una mezcla única de esencias y cristales, diseñado para elevar tu energía y facilitar un ambiente de bienestar y abundancia.",
//   "price": 2050,
//   "discountPercentage": 10,
//   "rating": 4.41,
//   "stock": 15,
//   "brand": "Aromanza",
//   "category": "Sahumerios",
//   "thumbnail": "https://acdn.mitiendanube.com/stores/004/000/403/products/161-702150923d4474162417133022484845-1024-1024.webp",
//   "images": [
//     "https://acdn.mitiendanube.com/stores/004/000/403/products/161-702150923d4474162417133022484845-1024-1024.webp"
//   ]
// },
// {
//   "id": 28,
//   "title": "Hierbas para sahumar",
//   "description": "Explora la alquimia natural con nuestra selección de hierbas para sahumar, cada una con propiedades únicas para enriquecer tu espacio y espíritu.",
//   "price": 870,
//   "discountPercentage": 16,
//   "rating": 4.82,
//   "stock": 4,
//   "brand": "Sagrada Madre",
//   "category": "Sahumerios",
//   "thumbnail": "https://acdn.mitiendanube.com/stores/004/000/403/products/166-41bb7d5feb4e881bbc17133012708156-1024-1024.webp",
//   "images": [
//     "https://acdn.mitiendanube.com/stores/004/000/403/products/166-41bb7d5feb4e881bbc17133012708156-1024-1024.webp"
//   ]
// },
// {
//   "id": 29,
//   "title": "Varillas de Incienso 15 unidades",
//   "description": "Los inciensos de triple empaste Bangladesh tienen un grosor de aprox. de 1 cm de diámetro, esto logra que la esencia quede intacta en su interior y al encenderse lograr el efecto deseado.",
//   "price": 665,
//   "discountPercentage": 15,
//   "rating": 4.44,
//   "stock": 57,
//   "brand": "Bangladesh",
//   "category": "Sahumerios",
//   "thumbnail": "https://acdn.mitiendanube.com/stores/004/000/403/products/kit15-be6811ebf76e109fd617057812619389-1024-1024.webp",
//   "images": [
//     "https://acdn.mitiendanube.com/stores/004/000/403/products/kit15-be6811ebf76e109fd617057812619389-1024-1024.webp"
//   ]
// },
// {
//   "id": 30,
//   "title": "Pastillas para Sahumar Siete Chakras",
//   "description": "Pastillas Sahumadoras Siete Chakras realizadas 100% con productos naturales.",
//   "price": 1300,
//   "discountPercentage": 2,
//   "rating": 4.92,
//   "stock": 40,
//   "brand": "Aromanza",
//   "category": "Sahumerios",
//   "thumbnail": "https://acdn.mitiendanube.com/stores/004/000/403/products/45-958d39a265b816ae0b17057779797088-1024-1024.webp",
//   "images": [
//     "https://acdn.mitiendanube.com/stores/004/000/403/products/45-958d39a265b816ae0b17057779797088-1024-1024.webp"
//   ]
// },
// {
//   "id": 31,
//   "title": "Veloncito Aromático 3 unidades",
//   "description": "Las velas aromáticas tienen la capacidad de ayudarnos a crear un ambiente más acogedor. Pueden relajarnos, ayudarnos a mantener la concentración, parar un poco o darnos energía para seguir con el día a día.",
//   "price": 3100,
//   "discountPercentage": 7,
//   "rating": 4.16,
//   "stock": 14,
//   "brand": "Iluminarte",
//   "category": "Sahumerios",
//   "thumbnail": "https://acdn.mitiendanube.com/stores/004/000/403/products/35-9b871425f310f4f77817056156997623-1024-1024.webp",
//   "images": [
//     "https://acdn.mitiendanube.com/stores/004/000/403/products/35-9b871425f310f4f77817056156997623-1024-1024.webp"
//   ]
// },
// {
//   "id": 32,
//   "title": "Tabla de Radiestesia para Péndulo",
//   "description": "Esta tabla es el complemento perfecto para todos, desde novatos hasta practicantes avanzados del péndulo. Diseñada para simplificar y especificar las respuestas, esta tablita se convierte en una herramienta indispensable para el arte de la radiestesia.",
//   "price": 11500,
//   "discountPercentage": 10,
//   "rating": 4.74,
//   "stock": 10,
//   "brand": "Toques De Intuicion",
//   "category": "Meditacion",
//   "thumbnail": "https://acdn.mitiendanube.com/stores/004/000/403/products/pendulo2-f5801e70441aed10c717133848106607-1024-1024.webp",
//   "images": [
//     "https://acdn.mitiendanube.com/stores/004/000/403/products/pendulo2-f5801e70441aed10c717133848106607-1024-1024.webp"
//   ]
// },
// {
//   "id": 33,
//   "title": "Buda Indio con Base Tallado",
//   "description": "Siddhartha Gautama, más conocido como el Buda, fue un líder espiritual y fundador del budismo en la India antigua, alrededor del siglo V a.C. Nacido en una familia real, renunció a la opulencia para buscar respuestas a la naturaleza del sufrimiento.",
//   "price": 33600,
//   "discountPercentage": 17,
//   "rating": 4.31,
//   "stock": 10,
//   "brand": "Toques De Intuicion",
//   "category": "Meditacion",
//   "thumbnail": "https://acdn.mitiendanube.com/stores/004/000/403/products/buda-6289bf308d0ee6083717084607142562-1024-1024.webp",
//   "images": [
//     "https://acdn.mitiendanube.com/stores/004/000/403/products/buda-6289bf308d0ee6083717084607142562-1024-1024.webp"
//   ]
// },
// {
//   "id": 34,
//   "title": "Oleum Sagrada Madre - Aceite Esencial",
//   "description": "Descubre el bienestar físico, mental y espiritual con nuestros aceites esenciales 100% naturales. Disfruta de 11 combinaciones únicas para acompañar tu bienestar emocional.",
//   "price": 18900,
//   "discountPercentage": 10,
//   "rating": 4.01,
//   "stock": 13,
//   "brand": "Sagrada Madre",
//   "category": "Meditacion",
//   "thumbnail": "https://acdn.mitiendanube.com/stores/004/000/403/products/123-19dd66be557e3fe7b717062186593112-1024-1024.webp",
//   "images": [
//     "https://acdn.mitiendanube.com/stores/004/000/403/products/123-19dd66be557e3fe7b717062186593112-1024-1024.webp"
//   ]
// },
// {
//   "id": 35,
//   "title": "Mantas Estilos de Vida: Confort - Yoga - Tarot",
//   "description": "Experimenta el confort y versatilidad con nuestras mantas astrales de 100% poliéster de secado rápido.",
//   "price": 1500,
//   "discountPercentage": 7,
//   "rating": 4.06,
//   "stock": 18,
//   "brand": "Liberty",
//   "category": "Meditacion",
//   "thumbnail": "https://acdn.mitiendanube.com/stores/004/000/403/products/112-0b9e8d6bd242cc970c17062139967846-1024-1024.webp",
//   "images": [
//     "https://acdn.mitiendanube.com/stores/004/000/403/products/112-0b9e8d6bd242cc970c17062139967846-1024-1024.webp"
//   ]
// }
// ]