const products = [
    {
        id: 1,
        name: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        quantity: 94,
        imgUrl: "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
        , categoryId: 1,
    },
    {
        id: 2,
        name: "iPhone X",
        description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        quantity: 34,
        imgUrl: "https://dummyjson.com/image/i/products/2/thumbnail.jpg"
        , categoryId: 2
    },
    {
        id: 3,
        name: "Samsung Universe 9",
        description: "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        quantity: 36,
        imgUrl: "https://dummyjson.com/image/i/products/3/thumbnail.jpg"
        , categoryId: 1
    },
    {
        id: 4,
        name: "OPPOF19",
        description: "OPPO F19 is officially announced on April 2021.",
        price: 280,
        quantity: 123,
        imgUrl: "https://dummyjson.com/image/i/products/4/thumbnail.jpg"
        , categoryId: 3
    },
    {
        id: 5,
        name: "Huawei P30",
        description: "Huawei�s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        price: 499,
        quantity: 32,
        imgUrl: "https://dummyjson.com/image/i/products/5/thumbnail.jpg"
        , categoryId: 4
    },
    {
        id: 6,
        name: "MacBook Pro",
        description: "MacBook Pro 2021 with mini-LED display may launch between September, November",
        price: 1749,
        quantity: 83,
        imgUrl: "https://dummyjson.com/image/i/products/6/thumbnail.png"
        , categoryId: 5
    },
    {
        id: 7,
        name: "Samsung Galaxy Book",
        description: "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
        price: 1499,
        quantity: 50,
        imgUrl: "https://dummyjson.com/image/i/products/7/thumbnail.jpg"
        , categoryId: 6
    },
    {
        id: 8,
        name: "Microsoft Surface Laptop 4",
        description: "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
        price: 1499,
        quantity: 68,
        imgUrl: "https://dummyjson.com/image/i/products/8/thumbnail.jpg"
        , categoryId: 7
    },
    {
        id: 9,
        name: "Infinix INBOOK",
        description: "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey � 1 Year Warranty",
        price: 1099,
        quantity: 96,
        imgUrl: "https://dummyjson.com/image/i/products/9/thumbnail.jpg"
        , categoryId: 1
    },
    {
        id: 10,
        name: "HP Pavilion 15-DK1056WM",
        description: "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
        price: 1099,
        quantity: 89,
        imgUrl: "https://dummyjson.com/image/i/products/10/thumbnail.jpeg"
        , categoryId: 1
    },
    {
        id: 11,
        name: "perfume Oil",
        description: "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
        price: 13,
        quantity: 65,
        imgUrl: "https://dummyjson.com/image/i/products/11/thumbnail.jpg"
        , categoryId: 1
    },
    {
        id: 12,
        name: "Brown Perfume",
        description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
        price: 40,
        quantity: 52,
        imgUrl: "https://dummyjson.com/image/i/products/12/thumbnail.jpg"
        , categoryId: 1
    },
    {
        id: 13,
        name: "Fog Scent Xpressio Perfume",
        description: "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
        price: 13,
        quantity: 61,
        imgUrl: "https://dummyjson.com/image/i/products/13/thumbnail.webp"
        , categoryId: 7
    },
    {
        id: 14,
        name: "Non-Alcoholic Concentrated Perfume Oil",
        description: "Original Al Munakh� by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
        price: 120,
        quantity: 114,
        imgUrl: "https://dummyjson.com/image/i/products/14/thumbnail.jpg"
        , categoryId: 3
    },
    {
        id: 15,
        name: "Eau De Perfume Spray",
        description: "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
        price: 30,
        quantity: 105,
        imgUrl: "https://dummyjson.com/image/i/products/15/thumbnail.jpg"
        , categoryId: 2
    },
    {
        id: 16,
        name: "Hyaluronic Acid Serum",
        description: "L'Oréal Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
        price: 19,
        quantity: 110,
        imgUrl: "https://dummyjson.com/image/i/products/16/thumbnail.jpg"
        , categoryId: 1
    },
    {
        id: 17,
        name: "Tree Oil 30ml",
        description: "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
        price: 12,
        quantity: 78,
        imgUrl: "https://dummyjson.com/image/i/products/17/thumbnail.jpg"
        , categoryId: 1
    },
    {
        id: 18,
        name: "Oil Free Moisturizer 100ml",
        description: "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
        price: 40,
        quantity: 88,
        imgUrl: "https://dummyjson.com/image/i/products/18/thumbnail.jpg"
        , categoryId: 1
    },
    {
        id: 19,
        name: "Skin Beauty Sername",
        description: "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
        price: 46,
        quantity: 54,
        imgUrl: "https://dummyjson.com/image/i/products/19/thumbnail.jpg"
        , categoryId: 1
    },
    {
        id: 20,
        name: "Freckle Treatment Cream- 15gm",
        description: "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
        price: 70,
        quantity: 140,
        imgUrl: "https://dummyjson.com/image/i/products/20/thumbnail.jpg"
        , categoryId: 1
    },
    {
        id: 21,
        name: "Elbow Macaroni - 400 gm",
        description: "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
        price: 14,
        quantity: 146,
        imgUrl: "https://dummyjson.com/image/i/products/22/thumbnail.jpg"
        , categoryId: 1
    },
    {
        id: 22,
        name: "Orange Essence Food Flavou",
        description: "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
        price: 14,
        quantity: 26,
        imgUrl: "https://dummyjson.com/image/i/products/23/thumbnail.jpg"
        , categoryId: 1
    },
    {
        id: 23,
        name: "cereals muesli fruit nuts",
        description: "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
        price: 46,
        quantity: 113,
        imgUrl: "https://dummyjson.com/image/i/products/24/thumbnail.jpg"
        , categoryId: 2
    },
    {
        id: 24,
        name: "Gulab Powder 50 Gram",
        description: "Dry Rose Flower Powder Gulab Powder 50 Gram � Treats Wounds",
        price: 70,
        quantity: 47,
        imgUrl: "https://dummyjson.com/image/i/products/25/thumbnail.jpg"
        , categoryId: 2
    },
    {
        id: 25,
        name: "Plant Hanger For Home",
        description: "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
        price: 41,
        quantity: 131,
        imgUrl: "https://dummyjson.com/image/i/products/26/thumbnail.jpg"
        , categoryId: 1
    },
    {
        id: 26,
        name: "Flying Wooden Bird",
        description: "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
        price: 51,
        quantity: 17,
        imgUrl: "https://dummyjson.com/image/i/products/27/thumbnail.webp"
        , categoryId: 5
    },
    {
        id: 27,
        name: "3D Embellishment Art Lamp",
        description: "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
        price: 20,
        quantity: 54,
        imgUrl: "https://dummyjson.com/image/i/products/28/thumbnail.jpg"
        , categoryId: 4
    },
    {
        id: 28,
        name: "Handcraft Chinese style",
        description: "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
        price: 60,
        quantity: 7,
        imgUrl: "https://dummyjson.com/image/i/products/29/thumbnail.webp"
        , categoryId: 1
    },
    {
        id: 29,
        name: "Key Holder",
        description: "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
        price: 30,
        quantity: 54,
        imgUrl: "https://dummyjson.com/image/i/products/30/thumbnail.jpg"
        , categoryId: 1
    }
]



const categories = [
    {
        id: 1,
        name: "electronics"
    },
    {
        id: 2,
        name: "Fashion"
    },
    {
        id: 3,
        name: "Shoes"
    },
    {
        id: 4,
        name: "Furniture"
    },
    {
        id: 5,
        name: "Skincare"
    },
    {
        id: 6,
        name: "Home Decoration"
    },
    {
        id: 7,
        name: "Others"
    }
]

module.exports = {
    categories, products
}
