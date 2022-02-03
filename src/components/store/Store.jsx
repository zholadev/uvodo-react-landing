import React from 'react'
import Container from '../partials/Container'
import './store.sass'
import image from '../../helpers/image'
import Heading from '../fonts/Heading'
import Cards from '../cards/Cards'

const data = [
  {
    id: 1,
    icon: image.brilliantIcon,
    name: 'One-time payment',
    description:
      'Uvodo is a lifetime investment, one-time fee with no recurring payments. Pay once and never pay again to own your shop.',
  },
  {
    id: 2,
    icon: image.timeIcon,
    name: 'Always free updates',
    description:
      'Uvodo is so committed to giving you the tools that are always current that it sends you free updates foa lifetime without paying for anything.',
  },
  {
    id: 3,
    icon: image.setIcon,
    name: '100% customizable',
    description:
      'You have complete control over the customization of your storefront and everything else the way you want as an owner of the source code.',
  },
  {
    id: 4,
    icon: image.dataBaseIcon,
    name: 'Self-hosted data',
    description:
      'You own your data and gain complete control over your business, data and profits, and how your store look and operates.',
  },
  {
    id: 5,
    icon: image.phoneIcon,
    name: 'Mobile first design',
    description:
      'Manage your store right at your fingertips and provide a seamless shopping experience to your customers with PWA ready storefront.',
  },
  {
    id: 6,
    icon: image.toolsIcon,
    name: 'Smooth installation',
    description:
      'Enjoy a hassle-free experience of the breeze installation process knowing your system is running at peak performance.',
  },
]

const Store = () => {
  return (
    <div className="store-container">
      <Container>
        <div className="box">
          <div className="left-section">
            <div className="top-text">360° CUSTOMIZABLE</div>
            <Heading text="Have full control over your online store" heading />
            <Heading
              text="Take complete control over your eCommerce business by owning source code, data, and economics."
              subtitle
            />
          </div>

          <div className="right-section">
            <div className="store-list">
              {data.map((item, id) => {
                return <Cards key={id} data={item} />
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Store
