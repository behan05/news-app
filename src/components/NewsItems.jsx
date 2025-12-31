import React from "react";
import styles from '../style/newsCard.module.css';
import Link from "next/link";

function NewsItems({
    source,
    title,
    description,
    date,
    pic,
    url,
}) {
    return (
        <div className={styles.newsCard}>
            {/* Image */}
            {pic && (
                <div className={styles.imageWrapper}>
                    <img
                        src={pic}
                        alt={title}
                        loading="lazy"
                        className={styles.newsImage}
                    />

                </div>
            )}

            {/* Content */}
            <div className={styles.content}>
                <span className={styles.source}>{source}</span>

                <h3 className={styles.title}>{title}</h3>

                {description && (
                    <p className={styles.description}>{description}</p>
                )}

                <div className={styles.footer}>
                    <span className={styles.date}>
                        {new Date(date).toLocaleDateString()}
                    </span>

                    <Link
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.readMore}
                    >
                        Read more →
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NewsItems;
