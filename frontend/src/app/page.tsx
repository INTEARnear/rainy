import Link from 'next/link'
import { Tooltip } from './components/Tooltip'
import { products } from './data/products'

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <div className="logo">
          Rainy
          <span className="logo-by">by Intear</span>
        </div>
      </nav>

      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Cloud Infrastructure for Real-time Applications
          </h1>
          <p className="hero-subtitle">
            Build scalable real-time applications with our suite of cloud services.
            From WebSocket APIs to AI agents, we&apos;ve got everything you need.
          </p>

          <div className="products-grid">
            {products.map((product, index) => (
              <div
                key={index}
                className={`product-card ${product.status === 'coming_soon' ? 'coming-soon' : ''} ${
                  product.status === 'active' ? 'active-product' : ''
                }`}
              >
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <ul className="list-inside list-disc space-y-2 my-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx}>
                      <Tooltip text={feature.description}>
                        {feature.name}
                      </Tooltip>
                    </li>
                  ))}
                </ul>
                {product.status === 'active' && product.link && (
                  <Link href={product.link} className="btn">
                    Get Started
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
