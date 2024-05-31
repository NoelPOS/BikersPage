const wrapper = document.querySelector('.sliderwrapper')
const menuitems = document.querySelectorAll('.menuitem')

const products = [
  {
    id: 1,
    title: 'Honda Fireblade',
    price: 10000,
    colors: [
      {
        code: 'red',
        img: 'img/honda.png',
      },
      {
        code: 'white',
        img: 'img/honda2.png',
      },
    ],
  },
  {
    id: 2,
    title: 'Yamaha R1M',
    price: 12500,
    colors: [
      {
        code: 'lightgray',
        img: 'img/yamaha.png',
      },
      {
        code: 'yellow',
        img: 'img/yamaha2.png',
      },
    ],
  },
  {
    id: 3,
    title: 'Aprilla Rsv4',
    price: 15000,
    colors: [
      {
        code: 'white',
        img: 'img/aprilla.jpg',
      },
      {
        code: 'orange',
        img: 'img/aprilla2.jpg',
      },
    ],
  },
  {
    id: 4,
    title: 'Kawasaki Zx10R',
    price: 12900,
    colors: [
      {
        code: 'green',
        img: 'img/kawasaki.jpg',
      },
      {
        code: 'black',
        img: 'img/kawasaki2.jpg',
      },
    ],
  },
  {
    id: 5,
    title: 'Suzuki GSX R1000',
    price: 21500,
    colors: [
      {
        code: 'white',
        img: 'img/suzuki.jpg',
      },
      {
        code: 'blue',
        img: 'img/suzuki2.jpg',
      },
    ],
  },
]

const productimg = document.querySelector('.productimg')
const producttitle = document.querySelector('.producttitle')
const productprice = document.querySelector('.productprice')
const productsizes = document.querySelectorAll('.size')
const productcolors = document.querySelectorAll('.color')

console.log(productcolors)

menuitems.forEach((item, index) => {
  item.addEventListener('click', () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`

    const chosenproduct = products[index]
    productimg.src = chosenproduct.colors[0].img
    producttitle.textContent = chosenproduct.title
    productprice.textContent = chosenproduct.price

    productcolors.forEach((color, index) => {
      color.style.backgroundColor = chosenproduct.colors[index].code
    })
    productcolors.forEach((color, index) => {
      color.addEventListener('click', () => {
        productimg.src = chosenproduct.colors[index].img
      })
    })
  })
})

productsizes.forEach((size, index) => {
  size.addEventListener('click', () => {
    productsizes.forEach((size) => {
      size.style.backgroundColor = 'white'
      size.style.color = 'black'
    })
    size.style.backgroundColor = 'black'
    size.style.color = 'white'
  })
})

const productButton = document.querySelector('.productbutton')
const payment = document.querySelector('.payment')
const close = document.querySelector('.close')

productButton.addEventListener('click', () => {
  payment.style.display = 'flex'
})

close.addEventListener('click', () => {
  payment.style.display = 'none'
})
