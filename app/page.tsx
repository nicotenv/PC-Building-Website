import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <Image
                src="/logo.svg"
                alt="BuildMyPC Logo"
                width={180}
                height={60}
                priority
            />
          </div>
          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/builds">Our Builds</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact" className={styles.ctaButton}>Get Started</Link>
          </nav>
        </header>

        <main className={styles.main}>
          <section className={styles.hero}>
            <div className={styles.heroContent}>
              <h1>Custom PC Builds for Every Need</h1>
              <p>Professional assembly, exceptional performance, lifetime support</p>
              <div className={styles.heroCta}>
                <Link href="/builds" className={styles.primaryButton}>
                  Explore Builds
                </Link>
                <Link href="/contact" className={styles.secondaryButton}>
                  Request Custom Quote
                </Link>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                  src="/hero-pc.jpg"
                  alt="Custom Gaming PC"
                  width={600}
                  height={400}
                  priority
                  className={styles.imageRounded}
              />
            </div>
          </section>

          <section className={styles.features}>
            <h2>Why Choose Us</h2>
            <div className={styles.featureCards}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Image src="/icon-quality.svg" alt="Quality" width={40} height={40} />
                </div>
                <h3>Premium Components</h3>
                <p>We use only top-tier components from trusted manufacturers</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Image src="/icon-support.svg" alt="Support" width={40} height={40} />
                </div>
                <h3>Expert Support</h3>
                <p>Lifetime technical support and generous warranty policies</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Image src="/icon-custom.svg" alt="Custom" width={40} height={40} />
                </div>
                <h3>Custom Solutions</h3>
                <p>Tailor-made builds for gaming, productivity, or specialized workloads</p>
              </div>
            </div>
          </section>

          <section className={styles.showcase}>
            <h2>Featured Builds</h2>
            <div className={styles.buildCards}>
              {['Gaming Beast', 'Workstation Pro', 'Compact Creator'].map((build) => (
                  <div key={build} className={styles.buildCard}>
                    <Image
                        src={`/build-${build.toLowerCase().replace(' ', '-')}.jpg`}
                        alt={build}
                        width={350}
                        height={280}
                        className={styles.buildImage}
                    />
                    <h3>{build}</h3>
                    <p>Starting at $1,299</p>
                    <Link href={`/builds/${build.toLowerCase().replace(' ', '-')}`} className={styles.detailsButton}>
                      View Details
                    </Link>
                  </div>
              ))}
            </div>
          </section>

          <section className={styles.testimonials}>
            <h2>Customer Testimonials</h2>
            <div className={styles.testimonialCards}>
              <div className={styles.testimonialCard}>
                <p>"The gaming PC they built for me exceeds all my expectations. Incredible performance!"</p>
                <div className={styles.testimonialAuthor}>- Michael R.</div>
              </div>
              <div className={styles.testimonialCard}>
                <p>"Their attention to detail and cable management is unmatched. Worth every penny."</p>
                <div className={styles.testimonialAuthor}>- Sarah L.</div>
              </div>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerLogo}>
              <Image
                  src="/logo.svg"
                  alt="BuildMyPC Logo"
                  width={120}
                  height={40}
              />
              <p>Custom PC building solutions for every need</p>
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.linkColumn}>
                <h4>Services</h4>
                <Link href="/builds/gaming">Gaming PCs</Link>
                <Link href="/builds/workstation">Workstations</Link>
                <Link href="/services/repair">Repairs & Upgrades</Link>
              </div>
              <div className={styles.linkColumn}>
                <h4>Company</h4>
                <Link href="/about">About Us</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
              </div>
              <div className={styles.linkColumn}>
                <h4>Support</h4>
                <Link href="/faq">FAQs</Link>
                <Link href="/warranty">Warranty</Link>
                <Link href="/shipping">Shipping</Link>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>© {new Date().getFullYear()} BuildMyPC. All rights reserved.</p>
          </div>
        </footer>
      </div>
  );
}