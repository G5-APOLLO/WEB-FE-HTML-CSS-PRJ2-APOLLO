export const filters = [
  {
    title: 'Marca',
    options: [
      { label: 'HP', count: 3 },
      { label: 'LENOVO', count: 5 },
      { label: 'ZSUS', count: 8 },
      { label: 'APPLE', count: 8 },
    ],
    optionIDfilter: 1,
  },
  {
    title: 'RAM',
    options: [
      { label: '32 GB', count: 3 },
      { label: '24 GB', count: 5 },
      { label: '16 GB', count: 8 },
      { label: '8 GB', count: 8 },
    ],
    optionIDfilter: 1,
  },
  {
    title: 'Tipo de Disco',
    options: [
      { label: 'HDD', count: 7 },
      { label: 'SSD', count: 12 },
      { label: 'SSD M.2', count: 10 },
    ],
    optionIDfilter: 1,
  },
  {
    title: 'Capacidad Disco Duro',
    options: [
      { label: 'SSD 256GB', count: 3 },
      { label: 'SSD 512GB', count: 5 },
      { label: 'SSD 1TB', count: 8 },
      { label: 'SSD 2TB', count: 3 },
    ],
    optionIDfilter: 1,
  },
  {
    title: 'Sistema Operativo',
    options: [
      { label: 'Windows', count: 20 },
      { label: 'MacOS', count: 6 },
      { label: 'Linux', count: 5 },
    ],
    optionIDfilter: 1,
  },
  {
    title: 'Resolución',
    options: [
      { label: 'HD', count: 10 },
      { label: 'Full HD', count: 20 },
      { label: '4K', count: 15 },
      { label: '8K', count: 5 },
    ],
    optionIDfilter: 2,
  },
  {
    title: 'Tamaño Pantalla',
    options: [
      { label: '32"', count: 8 },
      { label: '40"', count: 12 },
      { label: '50"', count: 10 },
      { label: '65"', count: 5 },
    ],
    optionIDfilter: 2,
  },
  {
    title: 'Tipo de Audio',
    options: [
      { label: 'Estéreo', count: 10 },
      { label: 'Surround', count: 8 },
      { label: 'Hi-Fi', count: 6 },
    ],
    optionIDfilter: 3,
  },
  {
    title: 'Tipo de Video',
    options: [
      { label: 'Proyector', count: 4 },
      { label: 'Monitor', count: 12 },
    ],
    optionIDfilter: 4,
  },
  {
    title: 'Tipo de Impresora',
    options: [
      { label: 'Láser', count: 7 },
      { label: 'Inyección de tinta', count: 10 },
      { label: 'Multifuncional', count: 6 },
    ],
    optionIDfilter: 5,
  },
  {
    title: 'Tipo de Cámara',
    options: [
      { label: 'Digital', count: 10 },
      { label: 'Reflex', count: 8 },
      { label: 'Acción', count: 6 },
    ],
    optionIDfilter: 6,
  },
  {
    title: 'Tipo de Climatización',
    options: [
      { label: 'Aire Acondicionado', count: 10 },
      { label: 'Ventilador', count: 8 },
      { label: 'Calefactor', count: 5 },
    ],
    optionIDfilter: 7,
  },
  {
    title: 'Tipo de Refrigerador',
    options: [
      { label: 'No Frost', count: 12 },
      { label: 'Cíclico', count: 8 },
    ],
    optionIDfilter: 8,
  },
  {
    title: 'Capacidad de Lavado',
    options: [
      { label: '8 kg', count: 5 },
      { label: '10 kg', count: 8 },
      { label: '12 kg', count: 10 },
    ],
    optionIDfilter: 9,
  },
  {
    title: 'Marca de Celular',
    options: [
      { label: 'Samsung', count: 10 },
      { label: 'Apple', count: 6 },
      { label: 'Huawei', count: 4 },
    ],
    optionIDfilter: 10,
  },
  {
    title: 'Marca de Tablet',
    options: [
      { label: 'Apple', count: 5 },
      { label: 'Samsung', count: 7 },
    ],
    optionIDfilter: 11,
  },
  {
    title: 'Tipo de Smartwatch',
    options: [
      { label: 'Deportivo', count: 8 },
      { label: 'Elegante', count: 5 },
    ],
    optionIDfilter: 12,
  },
  {
    title: 'Tipo de Sala',
    options: [
      { label: 'Modular', count: 6 },
      { label: 'Tradicional', count: 8 },
    ],
    optionIDfilter: 13,
  },
  {
    title: 'Tipo de Comedor',
    options: [
      { label: '4 puestos', count: 5 },
      { label: '6 puestos', count: 8 },
    ],
    optionIDfilter: 14,
  },
  {
    title: 'Tipo de Cocina',
    options: [
      { label: 'Eléctrica', count: 5 },
      { label: 'A Gas', count: 8 },
    ],
    optionIDfilter: 15,
  },
  {
    title: 'Tipo de Accesorio de Baño',
    options: [
      { label: 'Ducha', count: 3 },
      { label: 'Lavamanos', count: 4 },
    ],
    optionIDfilter: 16,
  },
  // Nuevos filtros
  {
    title: 'Conectividad',
    options: [
      { label: 'Bluetooth', count: 10 },
      { label: 'Wi-Fi', count: 15 },
      { label: 'Ethernet', count: 8 },
    ],
    optionIDfilter: 1,
  },
  {
    title: 'Tipo de Pantalla',
    options: [
      { label: 'LED', count: 12 },
      { label: 'OLED', count: 8 },
      { label: 'LCD', count: 6 },
    ],
    optionIDfilter: 2,
  },
  {
    title: 'Tipo de Soporte',
    options: [
      { label: 'Pared', count: 5 },
      { label: 'De Mesa', count: 10 },
    ],
    optionIDfilter: 3,
  },
  {
    title: 'Características de Impresión',
    options: [
      { label: 'Color', count: 15 },
      { label: 'Blanco y Negro', count: 5 },
    ],
    optionIDfilter: 5,
  },
  {
    title: 'Características de Cámara',
    options: [
      { label: 'Con Zoom', count: 10 },
      { label: 'Sin Zoom', count: 6 },
    ],
    optionIDfilter: 6,
  },
  {
    title: 'Eficiencia Energética',
    options: [
      { label: 'A+', count: 8 },
      { label: 'A++', count: 10 },
      { label: 'A+++', count: 6 },
    ],
    optionIDfilter: 7,
  },
  {
    title: 'Tipo de Lavado',
    options: [
      { label: 'Frontal', count: 10 },
      { label: 'Superior', count: 5 },
    ],
    optionIDfilter: 9,
  },
  {
    title: 'Conectividad Celular',
    options: [
      { label: '4G', count: 12 },
      { label: '5G', count: 8 },
    ],
    optionIDfilter: 10,
  },
  {
    title: 'Capacidad de Batería',
    options: [
      { label: '3000 mAh', count: 5 },
      { label: '4000 mAh', count: 10 },
    ],
    optionIDfilter: 11,
  },
  {
    title: 'Material de Sala',
    options: [
      { label: 'Madera', count: 7 },
      { label: 'Metal', count: 4 },
    ],
    optionIDfilter: 13,
  },
  {
    title: 'Estilo de Comedor',
    options: [
      { label: 'Moderno', count: 8 },
      { label: 'Clásico', count: 6 },
    ],
    optionIDfilter: 14,
  },
  {
    title: 'Estilo de Cocina',
    options: [
      { label: 'Minimalista', count: 5 },
      { label: 'Rústica', count: 7 },
    ],
    optionIDfilter: 15,
  },
  {
    title: 'Material de Accesorio de Baño',
    options: [
      { label: 'Cerámica', count: 5 },
      { label: 'Plástico', count: 4 },
    ],
    optionIDfilter: 16,
  },
];
