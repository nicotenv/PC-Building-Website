import Image from "next/image";
import styles from "./buildDetails.module.scss";

export default function BuildDetails({ params }: { params: { slug: string } }) {
  const buildData = {
    title: "Gaming Beast",
    description: "A high-performance gaming PC designed for the ultimate experience.",
    price: "$1,299",
    image: "/build-gaming-beast.jpg",
    specs: [
      { label: "Processor", value: "Intel Core i9-13900K" },
      { label: "Graphics Card", value: "NVIDIA GeForce RTX 4090" },
      { label: "RAM", value: "32GB DDR5" },
      { label: "Storage", value: "1TB NVMe SSD" },
      { label: "Cooling", value: "Liquid Cooling System" },
    ],
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>{buildData.title}</h1>
        <p>{buildData.description}</p>
      </header>

      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <Image
            src={buildData.image}
            alt={buildData.title}
            width={600}
            height={400}
            className={styles.image}
          />
        </div>

        <div className={styles.details}>
          <h2>Specifications</h2>
          <ul className={styles.specs}>
            {buildData.specs.map((spec, index) => (
              <li key={index} className={styles.specItem}>
                <strong>{spec.label}:</strong> {spec.value}
              </li>
            ))}
          </ul>
          <p className={styles.price}>Price: {buildData.price}</p>

          <div className={styles.actions}>
            <button className={styles.primaryButton}>Buy Now</button>
            <button className={styles.secondaryButton}>Request Customization</button>
          </div>
        </div>
      </div>
    </div>
  );
}