// Catálogo de Texas Gravestone Care — datos estructurados extraídos y verificados del PDF original
const CATALOG = {
  colors: {
    title: "Colores de granito",
    groups: [
      { group: "Colores de importación · Grupo 1", items: [
        { name: "China Barre Grey", img: "p04_00.jpg" },
        { name: "Ocean Wave", img: "p04_01.jpg" },
      ]},
      { group: "Colores de importación · Grupo 2", items: [
        { name: "Dark Cloud Grey", img: "p04_02.jpg" },
        { name: "Imperial Rose", img: "p04_03.jpg" },
      ]},
      { group: "Colores de importación · Grupo 3", items: [
        { name: "Rustic Brown", img: "p04_04.jpg" },
        { name: "India Mist", img: "p04_05.jpg" },
        { name: "Impala Black", img: "p04_06.jpg" },
        { name: "India Grey", img: "p04_07.jpg" },
      ]},
      { group: "Colores de importación · Grupo 4", items: [
        { name: "Premium Jet Black", img: "p04_08.jpg" },
      ]},
      { group: "Colores de importación · Grupo 5", items: [
        { name: "Bahama Blue", img: "p04_09.jpg" },
        { name: "Paradiso", img: "p04_10.jpg" },
        { name: "Indian Mahogany", img: "p04_11.jpg" },
        { name: "Tan Brown", img: "p04_12.jpg" },
        { name: "Coffee Brown", img: "p04_13.jpg" },
        { name: "Tropical Green", img: "p04_14.jpg" },
        { name: "Impala Green", img: "p04_15.jpg" },
        { name: "Red Multicolor", img: "p04_16.jpg" },
      ]},
      { group: "Colores de importación · Grupo 6", items: [
        { name: "China Pink", img: "p04_17.jpg" },
        { name: "Butterfly Blue", img: "p04_18.jpg" },
      ]},
      { group: "Colores de importación · Grupo 7", items: [
        { name: "India Red", img: "p04_19.jpg" },
        { name: "Catseye Brown", img: "p04_20.jpg" },
        { name: "Aurora Red", img: "p04_21.jpg" },
        { name: "Black Galaxy", img: "p04_22.jpg" },
      ]},
      { group: "Colores de importación · Grupo 8", items: [
        { name: "Blue Pearl", img: "p04_23.jpg" },
      ]},
      { group: "Colores domésticos · Grupo 9", items: [
        { name: "Georgia Grey", img: "p04_24.jpg" },
      ]},
      { group: "Colores domésticos · Grupo 10", items: [
        { name: "North American Pink / Morning Rose", img: "p04_25.jpg" },
      ]},
      { group: "Colores domésticos · Grupo 11", items: [
        { name: "Barre Grey", img: "p04_26.jpg" },
        { name: "Flash Black", img: "p04_27.jpg" },
        { name: "Dakota Mahogany", img: "p04_28.jpg" },
      ]},
      { group: "Colores domésticos · Grupo 12", items: [
        { name: "American Black", img: "p04_29.jpg" },
      ]},
      { group: "Colores adicionales", items: [
        { name: "Emerald Green", img: "p04_30.jpg" },
        { name: "Carrara Marble", img: "p04_31.jpg" },
        { name: "South African Impala", img: "p04_32.jpg" },
        { name: "Silver Cloud", img: "p04_33.jpg" },
      ]},
    ]
  },

  categories: [
    {
      id: "flush-single",
      group: "Diseños estándar en inventario",
      title: "Lápidas planas (flush) — individuales",
      subtitle: "Acabado: PFT / lados aserrados",
      sizes: ["1-4 x 0-8 x 0-4", "1-8 x 0-10 x 0-4", "2-0 x 1-0 x 0-4", "2-0 x 1-2 x 0-4", "2-4 x 1-4 x 0-4", "2-4 x 1-6 x 0-4", "2-6 x 1-0 x 0-4", "2-6 x 1-2 x 0-4"],
      items: [
        { color: "India Red", img: "p07_00.jpg" },
        { color: "Premium Jet Black con grabado láser", img: "p07_01.jpg" },
        { color: "Modern Grey", img: "p07_02.jpg" },
        { color: "Bahama Blue", img: "p07_03.jpg" },
        { color: "Premium Jet Black con grabado láser", img: "p07_04.jpg" },
        { color: "Tropical Green", img: "p07_05.jpg" },
      ]
    },
    {
      id: "flush-companion",
      group: "Diseños estándar en inventario",
      title: "Lápidas planas (flush) — para pareja",
      subtitle: "Acabado: PFT / lados aserrados",
      sizes: ["3-0 x 1-0 x 0-4", "3-0 x 1-2 x 0-4", "3-6 x 1-0 x 0-4", "4-0 x 1-0 x 0-4", "4-0 x 1-2 x 0-4", "4-0 x 1-4 x 0-4", "4-0 x 1-6 x 0-4"],
      items: [
        { color: "North American Pink", img: "p08_00.jpg" },
        { color: "Tropical Green", img: "p08_01.jpg" },
        { color: "Blue Pearl", img: "p08_02.jpg" },
        { color: "India Grey", img: "p08_03.jpg" },
        { color: "Premium Jet Black con grabado láser", img: "p08_04.jpg" },
      ]
    },
    {
      id: "bevel-single",
      group: "Diseños estándar en inventario",
      title: "Lápidas inclinadas (bevel) — individuales",
      subtitle: "Acabado: PBT / BRP",
      sizes: ["6\" de espesor: 1-8 x 0-10 x 0-6, 2-0 x 1-0 x 0-6, 2-0 x 1-2 x 0-6", "8\" de espesor: 2-0 x 1-0 x 0-8, 3-0 x 1-0 x 0-8"],
      items: [
        { color: "Dark Cloud Grey", img: "p09_00.jpg" },
        { color: "Premium Jet Black con grabado láser", img: "p09_01.jpg" },
        { color: "Spring Green", img: "p09_02.jpg" },
        { color: "Premium Jet Black con grabado láser y retrato", img: "p09_03.jpg" },
        { color: "Aurora Red", img: "p09_04.jpg" },
        { color: "India Grey", img: "p09_05.jpg" },
      ]
    },
    {
      id: "bevel-companion",
      group: "Diseños estándar en inventario",
      title: "Lápidas inclinadas (bevel) — para pareja",
      subtitle: "Acabado: PBT / BRP",
      sizes: ["6\" de espesor: 3-0 x 1-2 x 0-6, 4-0 x 1-2 x 0-6", "8\" de espesor: 3-6 x 1-0 x 0-8, 3-6 x 1-2 x 0-8, 4-0 x 1-0 x 0-8, 4-0 x 1-2 x 0-8"],
      items: [
        { color: "Blue Pearl", img: "p10_00.jpg" },
        { color: "Bahama Blue", img: "p10_01.jpg" },
        { color: "Premium Jet Black con grabado láser", img: "p10_02.jpg" },
        { color: "Autumn Pink", img: "p10_03.jpg" },
        { color: "Premium Jet Black con grabado láser", img: "p10_04.jpg" },
      ]
    },
    {
      id: "slant-single",
      group: "Diseños estándar en inventario",
      title: "Lápidas inclinadas altas (slant) — individuales",
      subtitle: "Acabado: P2, P3 o P5",
      sizes: ["10\" de espesor, base de 14\" de ancho", "12\" de espesor, base de 16\" de ancho", "Tamaños desde 1-8 x 0-10 x 1-4 hasta 2-6 x 1-0 x 1-6"],
      items: [
        { color: "Bahama Blue", img: "p11_00.jpg" },
        { color: "Catseye", img: "p11_01.jpg" },
        { color: "American Black", img: "p11_02.jpg" },
        { color: "Tropical Green", img: "p11_03.jpg" },
        { color: "Premium Jet Black con grabado láser", img: "p11_04.jpg" },
        { color: "Premium Jet Black con grabado láser", img: "p11_05.jpg" },
      ]
    },
    {
      id: "slant-companion",
      group: "Diseños estándar en inventario",
      title: "Lápidas inclinadas altas (slant) — para pareja",
      subtitle: "Acabado: P2, P3 o P5",
      sizes: ["10\" y 12\" de espesor", "Bases de 14\" y 16\" de ancho", "Tamaños desde 3-0 x 0-10 x 1-4 hasta 5-0 x 1-4 x 0-6"],
      items: [
        { color: "Premium Jet Black con grabado láser", img: "p12_00.jpg" },
        { color: "Paradiso", img: "p12_01.jpg" },
        { color: "Blue Pearl", img: "p12_02.jpg" },
        { color: "Modern Grey", img: "p12_03.jpg" },
        { color: "Premium Jet Black con grabado láser", img: "p12_04.jpg" },
        { color: "Tropical Green", img: "p12_05.jpg" },
      ]
    },
    {
      id: "serptop-single",
      group: "Diseños estándar en inventario",
      title: "Serptops — individuales",
      subtitle: "Acabado: P2, P3 o P5 · base de 12\" de ancho",
      sizes: ["6\" de espesor: desde 1-6 x 0-6 x 1-8 hasta 2-6 x 0-6 x 2-0", "8\" de espesor: desde 1-8 x 0-8 x 2-0 hasta 2-6 x 0-8 x 2-2"],
      items: [
        { color: "India Red", img: "p13_00.jpg" },
        { color: "Premium Jet Black con grabado láser", img: "p13_01.jpg" },
        { color: "Ocean Wave", img: "p13_02.jpg" },
        { color: "Paradiso", img: "p13_03.jpg" },
        { color: "Bahama Blue", img: "p13_04.jpg" },
        { color: "Premium Jet Black con grabado láser", img: "p13_05.jpg" },
      ]
    },
    {
      id: "serptop-companion",
      group: "Diseños estándar en inventario",
      title: "Serptops — para pareja",
      subtitle: "Acabado: P2, P3 o P5 · bases de 12\" y 14\" de ancho",
      sizes: ["6\" y 8\" de espesor", "Tamaños desde 3-0 x 0-6 x 1-8 hasta 10-0 x 1-2 x 0-8"],
      items: [
        { color: "Rustic Brown", img: "p14_00.jpg" },
        { color: "Premium Jet Black con grabado láser (palomas)", img: "p14_01.jpg" },
        { color: "Spring Green", img: "p14_02.jpg" },
        { color: "Bahama Blue", img: "p14_03.jpg" },
        { color: "Premium Jet Black con grabado láser y retrato", img: "p14_04.jpg" },
        { color: "Aurora Red", img: "p14_05.jpg" },
      ]
    },
    {
      id: "horizontal-series",
      group: "Diseños especiales en inventario",
      title: "Serie horizontal",
      subtitle: "Gran variedad de formas a un excelente precio, en tamaños que cumplen la mayoría de los reglamentos de cementerio",
      sizes: ["Die desde 3-0 x 0-6 x 2-0 hasta 5-0 x 0-8 x 2-6", "Base desde 4-0 x 1-0 x 0-6 hasta 7-0 x 1-2 x 0-8"],
      items: [
        { color: "Roof Top w/ Chamfers — Tan Brown", img: "p15_00.jpg" },
        { color: "Special Serp w/ Chamfers — Premium Jet Black", img: "p15_01.jpg" },
        { color: "Double Heart — Premium Jet Black con grabado láser", img: "p15_02.jpg" },
        { color: "Oval Design — Aurora Red", img: "p15_03.jpg" },
        { color: "Stippled Serptop — Tan Brown", img: "p16_00.jpg" },
        { color: "Design 33628 — Premium Jet Black con grabado láser", img: "p16_01.jpg" },
        { color: "Apex Top w/ Scotia — Paradiso", img: "p16_02.jpg" },
      ]
    },
    {
      id: "vertical-series",
      group: "Diseños especiales en inventario",
      title: "Serie vertical",
      subtitle: "Diseños verticales con carácter, en una variedad de tamaños",
      sizes: ["Die desde 2-0 x 0-6 x 2-4 hasta 2-10 x 0-6 x 3-8", "Base desde 3-0 x 1-0 x 0-6 hasta 3-6 x 1-2 x 0-8"],
      items: [
        { color: "Tear Drop — Premium Jet Black con grabado láser", img: "p17_00.jpg" },
        { color: "Curved Top w/ Chamfers — Rustic Brown", img: "p17_01.jpg" },
        { color: "Rocked Wave — Bahama Blue", img: "p17_02.jpg" },
        { color: "Tall Oval — Tan Brown", img: "p17_03.jpg" },
        { color: "Single Heart — Modern Grey", img: "p18_00.jpg" },
        { color: "Rocked Wave (corazón) — Modern Grey", img: "p18_01.jpg" },
        { color: "Stacked Heart — Aurora Red", img: "p18_02.jpg" },
        { color: "Design 31357 — Premium Jet Black con grabado láser (faro)", img: "p18_03.jpg" },
        { color: "Oval Top w/ Chamfers — Aurora Red", img: "p18_04.jpg" },
      ]
    },
    {
      id: "rock-series",
      group: "Diseños especiales en inventario",
      title: "Serie de roca natural",
      subtitle: "Acabado rústico tipo roca, con bordes naturales",
      sizes: ["Die desde 3-0 x 0-6 x 2-2 hasta 4-0 x 0-8 x 3-0", "Base desde 4-0 x 1-0 x 0-6 hasta 5-6 x 1-0 x 0-6"],
      items: [
        { color: "Rocky — Premium Jet Black", img: "p19_00.jpg" },
        { color: "Shell Rock — Dark Cloud Grey con grabado láser", img: "p19_01.jpg" },
        { color: "Roca natural con paisaje de montañas — Premium Jet Black con grabado láser", img: "p19_02.jpg" },
        { color: "Random Rock — Dark Cloud Grey", img: "p19_03.jpg" },
        { color: "Rocked Cross — Dark Cloud Grey", img: "p19_04.jpg" },
        { color: "Starburst Cross — India Red", img: "p19_05.jpg" },
      ]
    },
    {
      id: "multi-piece",
      group: "Diseños especiales en inventario",
      title: "Conjuntos de varias piezas",
      subtitle: "Monumentos compuestos por más de una pieza: columnas, bancas, jarrones y más",
      sizes: ["Wing Monument Set, Lighthouse Set, Half Serp Bench Set, Half Heart Set, Round Column Set, Square Column Set — medidas variables, consultar"],
      items: [
        { color: "Lighthouse Set — Premium Jet Black con grabado láser", img: "p20_00.jpg" },
        { color: "Half Heart Set — Premium Jet Black", img: "p20_01.jpg" },
        { color: "Wing Monument Set — Aurora Red", img: "p20_02.jpg" },
        { color: "Design 17012 — Premium Jet Black con grabado láser (corazón calado)", img: "p20_03.jpg" },
        { color: "Half Serp Bench Set — Blue Pearl", img: "p20_04.jpg" },
        { color: "Round Column Set — Premium Jet Black", img: "p20_05.jpg" },
        { color: "Square Column Set — Premium Jet Black", img: "p20_06.jpg" },
      ]
    },
    {
      id: "children",
      group: "Diseños especiales en inventario",
      title: "Diseños para niños",
      subtitle: "Diseños pensados especialmente para honrar la memoria de los más pequeños",
      sizes: ["Baby Block: Die 1-0 x 1-0 x 1-0", "Butterfly: Die 3-0 x 0-6 x 2-0, Base 4-0 x 1-0 x 0-6", "Rounded Tilted Heart: Die 2-0 x 0-6 x 1-10", "Carved Bear: Die 2-0 x 0-4 x 2-4"],
      items: [
        { color: "Baby Block — Premium Jet Black con grabado láser", img: "p21_00.jpg" },
        { color: "Butterfly — Premium Jet Black con grabado láser", img: "p21_01.jpg" },
        { color: "Carved Bear — Premium Jet Black con grabado láser y retrato", img: "p21_02.jpg" },
        { color: "Rounded Tilted Heart — Blue Pearl", img: "p21_03.jpg" },
        { color: "Diseño con ángel y corazón — Premium Jet Black con grabado láser", img: "p21_04.jpg" },
        { color: "Diseño con ángel — Aurora Red", img: "p21_05.jpg" },
      ]
    },
    {
      id: "angel-carvings",
      group: "Diseños especiales en inventario",
      title: "Tallas de ángeles",
      subtitle: "Esculturas y relieves de ángeles, talladas con gran detalle",
      sizes: ["Angel Holding Heart: Die 2-2.5 x 0-6 x 2-8.5 / 3-0 x 0-8 x 3-0", "Angel Over Hearts: Die 4-0 x 0-8 x 3-0", "Double Angel Holding Heart: Die 4-2 x 0-8 x 2-6", "Angel Draped Over Heart: Die 3-6 x 0-8 x 3-6"],
      items: [
        { color: "Angel Holding Heart — Premium Jet Black con grabado láser", img: "p22_00.jpg" },
        { color: "Angel Over Hearts — Premium Jet Black con grabado láser", img: "p22_01.jpg" },
        { color: "Double Angel Holding Heart — Premium Jet Black con grabado láser", img: "p22_02.jpg" },
        { color: "Sitting Angel Cremation Bench — Gris claro", img: "p22_03.jpg" },
        { color: "Angel Draped Over Heart — Gris claro", img: "p22_04.jpg" },
      ]
    },
    {
      id: "various-carvings",
      group: "Diseños especiales en inventario",
      title: "Otras tallas y diseños",
      subtitle: "Corazones, flores, cruces y diseños únicos",
      sizes: ["Tamaños variables según diseño — consultar con nuestro equipo"],
      items: [
        { color: "Heart with Flowers — Imperial Rose", img: "p23_00.jpg" },
        { color: "Broken Tree — Premium Jet Black con grabado láser", img: "p23_01.jpg" },
        { color: "Teardrop with Flowers — Imperial Rose", img: "p23_02.jpg" },
        { color: "Design 44320 — Red Multicolor", img: "p23_03.jpg" },
        { color: "Serptop w/ Flutes & Flowers — Dark Cloud Grey", img: "p23_04.jpg" },
        { color: "Design 16002 — Dark Cloud Grey", img: "p24_00.jpg" },
        { color: "Hands Holding Heart / Design 18012 — Bahama Blue", img: "p24_01.jpg" },
        { color: "Design 62009 — Silver Cloud", img: "p24_02.jpg" },
        { color: "Heart con palomas — Autumn Pink", img: "p24_03.jpg" },
      ]
    },
    {
      id: "statues",
      group: "Diseños especiales en inventario",
      title: "Estatuas religiosas",
      subtitle: "En Modern Grey",
      sizes: ["Estatua de Jesús: pequeña 0-11 x 0-6 x 2-0, grande 1-6 x 1-2 x 4-0", "Estatua de María: pequeña 1-0 x 0-6 x 2-0, grande 1-9 x 1-2 x 4-0", "Estatua de Ángel: pequeña 1-4 x 0-10 x 2-0, grande 2-8 x 1-4 x 4-0"],
      items: [
        { color: "Estatua de Jesús", img: "p25_00.jpg" },
        { color: "Estatua de la Virgen María", img: "p25_01.jpg" },
        { color: "Estatua de Ángel", img: "p25_02.jpg" },
      ]
    },
    {
      id: "benches",
      group: "Bancas",
      title: "Bancas conmemorativas",
      subtitle: "",
      sizes: ["Park Bench: asiento 3' o 4', 3-0/4-0 x 1-2 x 0-2", "Couch Bench: asiento 3-6 x 1-0 x 0-2.5", "Straight Bench: asiento 3' o 4'", "Curved / Pedestal Bench: asiento 4-0 x 1-4 x 0-4"],
      items: [
        { color: "Park Bench — Tan Brown", img: "p27_00.jpg" },
        { color: "Couch Bench — Premium Jet Black con grabado láser", img: "p27_01.jpg" },
        { color: "Straight Bench — Bahama Blue", img: "p27_02.jpg" },
        { color: "Curved / Pedestal Bench — Autumn Pink", img: "p27_03.jpg" },
        { color: "Park Bench — Premium Jet Black con grabado láser", img: "p27_04.jpg" },
      ]
    },
    {
      id: "cremation-benches",
      group: "Cremación",
      title: "Bancas para cremación",
      subtitle: "Bancas con espacio integrado para urnas",
      sizes: ["Cremation Panel Bench: 3-6 x 1-4 x 1-10", "Cremation Boulder Bench: asiento 4-0 x 1-2 x 0-4", "Cremation Heart Bench: pedestal 4-0 x 0-8 x 2-4", "Cremation Pedestal Bench: asiento 3' o 4'"],
      items: [
        { color: "Cremation Panel Bench — Gris con grabado láser", img: "p28_00.jpg" },
        { color: "Cremation Heart Bench — Premium Jet Black con grabado láser", img: "p28_01.jpg" },
        { color: "Cremation Boulder Bench — Roca natural", img: "p28_02.jpg" },
        { color: "Cremation Pedestal Bench — Bahama Blue", img: "p28_03.jpg" },
      ]
    },
    {
      id: "personal-cremation",
      group: "Cremación",
      title: "Cremación personal",
      subtitle: "Pilares, urnas y columbarios de nicho personal",
      sizes: ["Single/Companion Cremation Pillar", "Cremation Urn: 0-9 x 0-9 x 1-2", "2 y 4 Niche Columbaria (con y sin alcove): 2-9 x 1-5 x 1-11 / 4-2 x 1-5 x 3-2", "Cremation Bird Bath, Open Book Cremation Pedestal, Cremation Boulder"],
      items: [
        { color: "Single Cremation Pillar — Gris con grabado láser", img: "p29_00.jpg" },
        { color: "Companion Cremation Pillar — Gris con grabado láser", img: "p29_01.jpg" },
        { color: "Cremation Urn (talla de rosa) — Premium Jet Black", img: "p29_02.jpg" },
        { color: "2 Niche Columbaria — Gris con grabado láser", img: "p29_03.jpg" },
        { color: "4 Niche Columbaria sin alcove — Gris con grabado láser", img: "p29_04.jpg" },
        { color: "4 Niche Columbaria con alcove — Gris claro", img: "p30_00.jpg" },
        { color: "4 Niche Columbaria con alcove — Gris claro", img: "p30_01.jpg" },
        { color: "Open Book Cremation Pedestal — Granito oscuro (Douglas)", img: "p30_02.jpg" },
        { color: "Cremation Bird Bath — Bahama Blue", img: "p30_03.jpg" },
        { color: "Cremation Boulder — Roca natural", img: "p30_04.jpg" },
      ]
    },
    {
      id: "community-columbaria",
      group: "Cremación",
      title: "Columbarios comunitarios",
      subtitle: "Para cementerios e iglesias — desde 6 hasta 300 nichos, en distintas configuraciones",
      sizes: ["6, 8, 12, 16, 24, 32, 36, 40, 48 (horizontal, vertical o curvo), 64, 72 (incl. hexágono), 80, 112 y 300 nichos"],
      items: [
        { color: "Columbario con frontón y columnas", img: "p31_00.jpg" },
        { color: "Columbario rectangular de varias filas", img: "p31_01.jpg" },
        { color: "Columbario con frontón central", img: "p31_02.jpg" },
        { color: "Columbario en cuadrícula compacta", img: "p31_03.jpg" },
        { color: "Columbario de fila ancha", img: "p31_04.jpg" },
        { color: "Columbario de gran formato, varias filas", img: "p31_05.jpg" },
        { color: "Columbario de formato medio", img: "p31_06.jpg" },
        { color: "Columbario angosto de varias filas", img: "p31_07.jpg" },
        { color: "Columbario horizontal extendido", img: "p31_08.jpg" },
        { color: "Columbario de gran capacidad", img: "p31_09.jpg" },
        { color: "Columbario amplio de varias filas", img: "p31_10.jpg" },
        { color: "Columbario curvo con columnas decorativas", img: "p31_11.jpg" },
        { color: "Columbario extendido de alta capacidad", img: "p31_12.jpg" },
        { color: "Columbario octagonal con columnas", img: "p31_13.jpg" },
        { color: "Columbario en forma de estrella (varios módulos)", img: "p31_14.jpg" },
        { color: "Columbario rectangular de gran capacidad", img: "p31_15.jpg" },
        { color: "Columbario curvo cerrado con columnas", img: "p31_16.jpg" },
      ]
    },
    {
      id: "custom-columbaria",
      group: "Cremación",
      title: "Columbarios personalizados",
      subtitle: "Diseñados a medida para cementerios e iglesias, con renders 3D antes de fabricar",
      sizes: [],
      items: [
        { color: "Columbario personalizado en forma de estrella — boceto técnico", img: "p32_00.jpg" },
        { color: "Columbario personalizado — render 3D", img: "p32_01.jpg" },
        { color: "Columbario personalizado — render en jardín", img: "p32_02.jpg" },
      ]
    },
    {
      id: "preassembled-mausoleums",
      group: "Mausoleos",
      title: "Mausoleos pre-ensamblados",
      subtitle: "En inventario, en los colores que más le gustarán. Vienen completamente ensamblados, lo que hace la instalación rápida y sencilla.",
      sizes: [],
      items: [
        { color: "1 Crypt Rooftop — Bahama Blue", img: "p33_00.jpg" },
        { color: "2 Crypt Rooftop Stacked — Dark Cloud Grey", img: "p33_01.jpg" },
        { color: "2 Crypt Rooftop — Grey", img: "p33_02.jpg" },
        { color: "4 Crypt Rooftop Stacked — Tan Brown", img: "p33_03.jpg" },
        { color: "6 Crypt Rooftop Stacked — Bahama Blue", img: "p33_04.jpg" },
        { color: "2 Crypt Rooftop with Stairs — Premium Jet Black", img: "p33_05.jpg" },
      ]
    },
    {
      id: "custom-mausoleums",
      group: "Mausoleos",
      title: "Mausoleos walk-in personalizados",
      subtitle: "Comprar un mausoleo walk-in es una gran inversión. Hacemos todo lo posible para que el proceso sea sencillo para usted y su familia: el precio incluye transporte, ensamblaje, puerta de bronce y vitrales. Una vez fabricado, enviamos a nuestro equipo a ensamblarlo en sitio. Las unidades se transportan en camión de plataforma y se requiere una grúa para el montaje.",
      sizes: [],
      items: [
        { color: "6 Crypt Walk-In Mausoleum — Grey con puerta de bronce, Cortland, OH", img: "p34_00.jpg" },
        { color: "2 Crypt Walk-In Mausoleum — Tan Brown con puerta de bronce, Houston, TX", img: "p34_01.jpg" },
        { color: "8 Crypt Walk-In Mausoleum — Grey con puerta de bronce, Canton, OH", img: "p34_02.jpg" },
        { color: "6 Crypt Walk-In Mausoleum — Grey con puerta de bronce, Waterford, MI", img: "p34_03.jpg" },
      ]
    },
    {
      id: "large-memorial-projects",
      group: "Nuestro trabajo",
      title: "Grandes proyectos memoriales",
      subtitle: "Somos expertos en proyectos memoriales de gran escala. Nuestra amplia experiencia y equipo dedicado le ofrecen la tranquilidad y el apoyo de diseño necesarios para hacer realidad su visión.",
      sizes: [],
      items: [
        { color: "Conjunto de mausoleos comunitarios con estatua central", img: "p26_00.jpg" },
        { color: "Mausoleos comunitarios en cementerio", img: "p26_01.jpg" },
        { color: "Mausoleos comunitarios — vista panorámica", img: "p26_02.jpg" },
        { color: "Monumento conmemorativo religioso frente a templo", img: "p26_03.jpg" },
        { color: "Obelisco conmemorativo militar", img: "p26_04.jpg" },
      ]
    },
    {
      id: "completed-monuments",
      group: "Nuestro trabajo",
      title: "Monumentos completados",
      subtitle: "Una muestra de memoriales que hemos diseñado, tallado e instalado para familias en todo Texas y más allá",
      sizes: [],
      items: [
        { color: "Monumento doble con grabado de árbol y luna", img: "p35_00.jpg" },
        { color: "Monumento en forma de corazón con ángeles", img: "p35_01.jpg" },
        { color: "Monumento con arco y cruz tallada", img: "p35_02.jpg" },
        { color: "Monumento con cruz y retratos grabados", img: "p35_03.jpg" },
        { color: "Monumento con ángel llorando tallado", img: "p35_04.jpg" },
        { color: "Monumento en forma de lágrima con Virgen de Guadalupe", img: "p35_05.jpg" },
        { color: "Placa conmemorativa deportiva", img: "p35_06.jpg" },
        { color: "Placa conmemorativa con retratos familiares", img: "p35_07.jpg" },
        { color: "Placa plana personalizada", img: "p35_08.jpg" },
        { color: "Monumento con retratos familiares grabados", img: "p35_09.jpg" },
        { color: "Monumento tipo roca natural con grabado de ciervos", img: "p36_00.jpg" },
        { color: "Monumento con retrato deportivo tallado", img: "p36_01.jpg" },
        { color: "Memorial conmemorativo 9/11 con vigas de acero", img: "p36_02.jpg" },
        { color: "Monumento doble en forma de corazones", img: "p36_03.jpg" },
      ]
    },
  ]
};
