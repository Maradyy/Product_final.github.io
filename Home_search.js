const products=[
    {
        id:1,
        image:'https://www.naturalmedicine.ie/pub/media/catalog/product/cache/c323d2da89816a886fb5d0add5886889/m/e/mens_face_wash.png', 
        category:'Man', 
        reqular_price:12,
        sale_price:8.5,
        title:'Face Wash',  
        description:'The light, airy consistency of this gel provides stressed skin with renewed freshness and mattifies the complexion', 
        views:34,
        size:'big,small', 
        color:'black,blue', 
    },
    {
        id:2,
        image:'https://bioaqua.com.pk/cdn/shop/files/rn-image_picker_lib_temp_db64977b-b80e-4403-a4f3-9b759933ffb8_1200x.jpg?v=1716304723',  
        category:'Man',
        reqular_price:30,
        sale_price:22.59,
        title:'Sunblock', 
        description:'Product Type: whitening sunscreen', 
        views:10,
        size:'50g', 
        color:'blue,black', 
    },
    {
        id:3,
        image:'https://www.themancompany.com/cdn/shop/products/3_51569c59-679e-4680-8c01-3ad6dbaf4208.jpg?v=1713855597', 
        category:' men ',
        reqular_price:18,
        sale_price:12.5,
        title:'Under Eye Cream', 
        description:' The Man Company’s Under Eye Cream helps diminish unwanted under-eye concerns. Enriched with collagen, it delivers comprehensive benefits like improved skin elasticity and hydration', 
        views:20,
        size:'15g', 
        color:'black', 
    },
    {
        id:4,
        image:'https://thekshop.ca/cdn/shop/files/SOMEBYMI-AHA_BHA_PHA30DaysMiracleCream_Canada_533x.jpg?v=1696614143', 
        category:'Woman', 
        reqular_price:0,
        sale_price:18.5,
        title:'MiracleCream', 
        description:'Miracle Cream is a moisturizer packed with AHA BHA PHA', 
        views:31,
        size:'60g , 25g', 
        color:'green , pink', 
    },
    {
        id:5,
        image:'https://images-eu.ssl-images-amazon.com/images/I/710v4UfZ7PL._AC_UL600_SR600,600_.jpg', 
        category:'men , woman', 
        reqular_price:15,
        sale_price:9,
        title:'Sun Screen', 
        description:'All Skin Types Sunscreen Cream SPF 50', 
        views:19,
        size:'50g', 
        color:'white', 
    },
    {
        id:6,
        image:'https://www.beaumaxaroma.com/cdn/shop/products/Beaumax_Vita_C_Serum_0004.jpg?v=1691706802&width=1100',
        category:'men , woman',
        reqular_price:0,
        sale_price:22.5,
        title:'Serum',
        description:'Vita_C',
        views:7,
        size:'30ml',
        color:'black , white',
    },
    {
        id:7,
        image:'  https://theskincarelibrary.com/cdn/shop/products/ImfromRiceToner_1200x.jpg?v=1702891666',
        category:'Girl',
        reqular_price:0,
        sale_price:18,
        title:'Toner',
        description:' The product forms a protective barrier over the skin to prevent water loss, eliminate dead skin cells and provide luster and moisturization to rebalance dry and tired skin.',
        views:28,
        size:'150ml ',
        color:'White',
    },
    {
        id:8,
        image:'https://m.media-amazon.com/images/I/610F7CSPv9L._AC_UF350,350_QL80_.jpg',
        category:'Girl , boy',
        reqular_price:0,
        sale_price:16.5,
        title:' Collagen Face Mask',
        description:'This collagen night wrapping mask can be used as an overnight mask for easy elasticity care while you sleep',
        views:19,
        size:'34g',
        color:'blue ,white',
    },
    {
        id:9,
        image:'https://www.moodz.gr/cdn/shop/files/Lip-Sleeping-Mask-EX-Berry-Reel-1.jpg?v=1711528252',
        category:'Girl',
        reqular_price:15,
        sale_price:7.50,
        title:'Lip Sleeping Mask',
        description:'This lip care Balm is for "plumping, lightning, firming and healing of chapped or dry lips lips really quick. Our pink lips balm erases all form of lip wrinkles almost instantly.',
        views:60,
        size:'15g',
        color:'black',
    },
    {
        id:10,
         image:'https://vitavero.eu/cdn/shop/files/4fa47931-0338-4719-b1db-7a626d8adab9_2400x.jpg?v=1727802307',
        category:'Girl',
        reqular_price:0,
        sale_price:7.80,
        title:'Nigth Cream',
        description:'Ayouthveda charcoal face wash is a deep clean, pore-refining ayurvedic solution that effectively protects the skin from pollution, controls oil, and exfoliates dead skin cells',
        views:35,
        size:'50g',
        color:'gold , black',
    },
    {
        id:11,
        image:'https://korendy.gr/cdn/shop/products/BeautyofJoseon-GinsengEssenceWaterKorendy4_800x.jpg?v=1659905915',
        category:'Women',
        reqular_price:0,
        sale_price:21.5,
        title:'Essence Water',
        description:'Infused with 80% ginseng root water as well as a uniquely formulated ginseng complex to revitalize dry skin and control sebum, this hydrating toner leaves skin plumped-up and wrinkle-free. Safe for use on sensitive skin.',
        views:45,
        size:'150ml',
        color:'yellow',
    },
    {
        id:12,
        image:'https://candle-shack.co.uk/cdn/shop/files/Hand_Body_Lotion_-_Rock_Salt_Driftwood.jpg?v=1723210118&width=750',
        category:'Woman',
        reqular_price:0,
        sale_price:22.5,
        title:'Body Lotion',
        description:'This pre-blended hand and body lotion is totally vegan-friendly and paraben free! Made with Candle Shack fragrance oils, these are truly high-quality luxurious products.',
        views:47,
        size:'50ml',
        color:'brown , White',
    },   
];


// Parse Query Parameters
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return params.get('query') || '';
}

// Filter Products
function filterProducts(query) {
  const lowerCaseQuery = query.toLowerCase();
  return products.filter(product =>
    product.title.toLowerCase().includes(lowerCaseQuery) ||
    product.category.toLowerCase().includes(lowerCaseQuery)
  );
}

// Render Products
function renderProducts(productList) {
  const container = document.getElementById('searchResults');
  container.innerHTML = '';

  if (productList.length === 0) {
    container.innerHTML = '<p class="text-center">No products found.</p>';
    return;
  }

  productList.forEach(product => {
    const card = `
      <div class="col-6 col-md-3">
        <div class="card">
          <img src="${product.image}" class="card-img-top" alt="${product.title}">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">US ${product.sale_price}</p>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
}

// On Page Load
document.addEventListener('DOMContentLoaded', () => {
  const query = getQueryParams();
  const filteredProducts = filterProducts(query);
  renderProducts(filteredProducts);
});



