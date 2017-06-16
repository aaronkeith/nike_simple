var shoeInventory = [
  {
    brand: 'NIKE',
    style: 'AIR MAX 2017',
    category: 'RUN',
    price: 190,
    styleNumber: '849559-001',
    color: 'Black/Anthracite/White',
    numberColors: 3,
    sex: 'MEN',
    shoeImage: 'images/RUN/RUN NIKE AIR MAX 2017 MEN\'S RUNNING SHOE $190 Style: 849559-001 Black Anthracite White.jpg'},
  {
    brand: 'NIKE',
    style: 'AIR MAX SEQUENT 2',
    category: 'RUN',
    price: 120,
    styleNumber: '852461-001',
    color: 'Black/Dark Grey/Wolf Grey/Metallic/Hematite',
    numberColors: 2,
    sex: 'MEN',
    shoeImage: 'images/RUN/RUN NIKE AIR MAX SEQUENT 2 MEN\'S RUNNING SHOE $100 Style: 852461-001 Black Dark-Grey Wolf-Grey Metallic Hematite.jpg'
  },
  {
    brand: 'NIKE',
    style: 'AIR ZOOM ELITE 8',
    category: 'RUN',
    price: 115,
    styleNumber: '748588-001',
    color: 'Black/Wolf Grey/Dark Grey/White',
    numberColors: 2,
    sex: 'MEN',
    shoeImage: 'images/RUN/RUN NIKE AIR ZOOM ELITE 8 MEN\'S RUNNING SHOE $115 Style: 748588-001 Black Wolf-Grey Dark-Grey White.jpg'
  },
  {
    brand: 'NIKE',
    style: 'AIR ZOOM PEGASUS 34',
    category: 'RUN',
    price: 110,
    styleNumber: '880555-403',
    color: 'Blue-Fox/Crimson/White/Black',
    numberColors: 3,
    sex: 'MEN',
    shoeImage: 'images/RUN/RUN NIKE AIR ZOOM PEGASUS 34 MEN\'S RUNNING SHOE $110 Style: 880555-403 Blue-Fox Crimson White Black.jpg'
  },
  {
    brand: 'NIKE',
    style: 'SB AIR MAX BRUIN VAPOR',
    category: 'SKATE',
    price: 100,
    styleNumber: '882097-001',
    color: 'Black/White/Cool-Grey',
    numberColors: 3,
    sex: 'MEN',
    shoeImage: 'images/SKATE/SKATE NIKE SB AIR MAX BRUIN VAPOR MEN\'S SKATEBOARDING SHOE $100 Style- 882097-001 Black White White Cool-Grey.jpg'
  },
  {
    brand: 'NIKE',
    style: 'SB BLAZER LOW GT',
    category: 'SKATE',
    price: 75,
    styleNumber: '704939-018',
    color: 'Gunsmoke/Gum Light/Orange Blaze/Black Spruce',
    numberColors: 1,
    sex: 'MEN',
    shoeImage: 'images/SKATE/SKATE NIKE SB BLAZER LOW GT MEN\'S SKATEBOARDING SHOE $75 Style- 704939-018 Gunsmoke Gum Light Orange-Blaze Black-Spruce.jpg'
  },
    {
      brand: 'NIKE',
      style: 'SB DUNK HIGH PRO',
      category: 'SKATE',
      price: 100,
      styleNumber: '854851-010',
      color: 'Dark Grey/Black/White/White',
      numberColors: 3,
      sex: 'MEN',
      shoeImage: 'images/SKATE/SKATE NIKE SB DUNK HIGH PRO MEN\'S SKATEBOARDING SHOE $100 Style- 854851-010 Dark-Grey Black White White.jpg'
    },
    {
      brand: 'NIKE',
      style: 'SB KOSTON 3 HYPERFEEL',
      category: 'SKATE',
      price: 150,
      styleNumber: '819673-017',
      color: 'Black/Yellow Strike/Gum/White',
      numberColors: 2,
      sex: 'MEN',
      shoeImage: 'images/SKATE/SKATE NIKE SB KOSTON 3 HYPERFEEL MEN\'S SKATEBOARDING SHOE $150 Style- 819673-017 Black Yellow-StrikeGum White.jpg'
    },
    {
      brand: 'NIKE',
      style: 'JORDAN SUPER FLY 5 PO',
      category: 'BALL',
      price: 140,
      styleNumber: '881571-110',
      color: 'White/White/Black',
      numberColors: 2,
      sex: 'MEN',
      shoeImage: 'images/BALL/BALL JORDAN SUPER FLY 5 PO MEN\'S BASKETBALL SHOE $140 Style: 881571-110 White White Black.jpg'
    },
    {
      brand: 'NIKE',
      style: 'KOBE A.D. NXT',
      category: 'BALL',
      price: 200,
      styleNumber: '916832-710',
      color: 'Volt/White/White',
      numberColors: 1,
      sex: 'MEN',
      shoeImage: 'images/BALL/BALL KOBE A.D. NXT MEN\'S BASKETBALL SHOE $200 Style: 916832-710 Volt White White.jpg'
    },
    {
      brand: 'NIKE',
      style: 'LEBRON XIV AGIMAT',
      category: 'BALL',
      price: 175,
      styleNumber: '852402-400',
      color: 'Coastal Blue/Star Blue/White',
      numberColors: 2,
      sex: 'MEN',
      shoeImage: 'images/BALL/BALL LEBRON XIV AGIMAT MEN\'S BASKETBALL SHOE $175 Style: 852402-400 Coastal-Blue Star-Blue White.jpg'
    },
    {
      brand: 'NIKE',
      style: 'KYRIE 2 iD',
      category: 'BALL',
      price: 200,
      styleNumber: '852402-666',
      color: 'Black/Pure Gold/White',
      numberColors: 2,
      sex: 'MEN',
      shoeImage: 'images/BALL/BALL NIKE KYRIE 2 iD_Black Gold White .jpg'
    },
]

function extractByCategory(category, shoes) {
  var categoryMatch = shoes.filter (function (shoe){
    return shoe.category === category
  })
  return categoryMatch
}
