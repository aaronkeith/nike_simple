var shoeInventory = [
  {
    brand: 'NIKE',
    style: 'AIR MAX 2017',
    category: 'RUNNING SHOES',
    price: 190,
    styleNumber: '849559-001',
    color: 'Black/Anthracite/White',
    numberColors: 3,
    sex: 'MEN',
    shoeImage: 'images/RUN/RUN NIKE AIR MAX 2017 MEN\'S RUNNING SHOE $190 Style: 849559-001 Black Anthracite White.jpg'},
    {
      brand: 'NIKE',
      style: 'AIR MAX SEQUENT 2',
      category: 'RUNNING SHOES',
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
      category: 'RUNNING SHOES',
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
      category: 'RUNNING SHOES',
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
      category: 'SKATE SHOES',
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
      category: 'SKATE SHOES',
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
      category: 'SKATE SHOES',
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
      category: 'SKATE SHOES',
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
      category: 'BALL SHOES',
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
      category: 'BALL SHOES',
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
      category: 'BALL SHOES',
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
      category: 'BALL SHOES',
      price: 200,
      styleNumber: '852402-666',
      color: 'Black/Pure Gold/White',
      numberColors: 2,
      sex: 'MEN',
      shoeImage: 'images/BALL/BALL NIKE KYRIE 2 iD_Black Gold White .jpg'
    },
  ]

  // function extractByCategory () {
  //   var runInventory = []
  //   var skateInventory = []
  //   var ballInventory = []
  //   shoeInventory.forEach(function(shoe) {
  //     if (shoe.category === 'RUN') {
  //       runInventory.push(shoe)
  //     } else if (shoe.category === 'SKATE') {
  //       skateInventory.push(shoe)
  //     } else if (shoe.category === 'BALL') {
  //       ballInventory.push(shoe)
  //     } else {
  //       // console.log('nada');
  //     }
  //   })
  //   return { runInventory, skateInventory, ballInventory }
  //   }

  function extractByCategory(category, shoes) {
    var categoryMatch = shoes.filter (function (shoe){
      return shoe.category === category
    })
    return categoryMatch
  }

  //loop for renderShoe function() *****not working****
  // for (var i = 0; i < sneaker.length; i++) {
  //   var sneaker = renderPost(sneaker[i])
  //   document.body.appendChild(sneaker)
  // }

  function renderShoe(shoeData) {
    var $shoe = document.createElement('div')
    $shoe.classList.add('gallery-item-box')
    $shoe.classList.add('col-xs-6')
    $shoe.classList.add('col-md-3')
    $shoe.classList.add('col-sm-3')

    var $content = document.createElement('div')
    $content.classList.add('gallery-item-content')

    var $image = document.createElement('div')
    $image.classList.add('gallery-item-image')

    var $imageWrapper = document.createElement('div')
    $imageWrapper.classList.add('galley-item-image-wrapper')

    var $productImage = document.createElement('img')
    $productImage.setAttribute('src', shoeData.shoeImage)

    $shoe.appendChild($content)
    $content.appendChild($image)
    $image.appendChild($imageWrapper)
    $imageWrapper.appendChild($productImage)

    //****end image box*****///

    var $itemInfo = document.createElement('div')
    $itemInfo.classList.add('gallery-item-info')

    var $numColors = document.createElement('div')
    $numColors.classList.add('gallery-number-colors')

    var $colorDisplay = document.createElement('p')
    $colorDisplay.classList.add('gallery-colors-display')

    var $hr = document.createElement('hr')
    $hr.classList.add('color-break')

    $itemInfo.appendChild($numColors)
    $numColors.appendChild($colorDisplay)
    $itemInfo.appendChild($hr)

    //****end colors break*****///

    var $productName = document.createElement('div')
    $productName.classList.add('gallery-product-name')

    var $productDisplayName = document.createElement('p')
    $productDisplayName.classList.add('gallery-product-display-name')

    var $productCategoryDisplay = document.createElement('p')
    $productCategoryDisplay.classList.add('gallery-product-category')

    var $productPrice = document.createElement('div')
    $productPrice.classList.add('gallery-product-price')

    var $priceDisplay = document.createElement('div')
    $priceDisplay.classList.add('gallery-product-price-display')

    var $price = document.createElement('p')
    $price.classList.add('gallery-price')

    $itemInfo.appendChild($productName)
    $productName.appendChild($productDisplayName)
    $productDisplayName.appendChild($productCategoryDisplay)
    $productCategoryDisplay.appendChild($productPrice)
    $productPrice.appendChild($priceDisplay)
    $priceDisplay.appendChild($price)

    //****end product details*****///

    $shoe.appendChild($itemInfo)
    $shoe.appendChild($productName)

    return $shoe
  }
