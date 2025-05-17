import Link from "next/link";
import Image from "next/image";
import styles from "./builds.module.scss";

export default function Builds() {
  const buildCategories = [
    {
      title: "Gaming PCs",
      description: "High-performance computers optimized for gaming experiences",
      image: "/builds-gaming.jpg",
      slug: "gaming"
    },
    {
      title: "Workstations",
      description: "Powerful setups for professional work and content creation",
      image: "/builds-workstation.jpg",
      slug: "workstation"
    },
    {
      title: "Compact Builds",
      description: "Space-saving solutions without compromising on performance",
      image: "/builds-compact.jpg",
      slug: "compact"
    },
    {
      title: "Custom Builds",
      description: "Tailor-made systems built to your exact specifications",
      image: "/builds-custom.jpg",
      slug: "custom"
    }
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Our PC Builds</h1>
        <p>Expertly crafted computers for every need and budget</p>
      </header>

      <section className={styles.categories}>
        {buildCategories.map((category) => (
          <Link href={`/builds/${category.slug}`} key={category.slug} className={styles.categoryCard}>
            <div className={styles.cardImage}>
              <Image
                src={category.image}
                alt={category.title}
                fill
                className={styles.image}
              />
            </div>
            <div className={styles.cardContent}>
              <h2>{category.title}</h2>
              <p>{category.description}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}