"use client";
import React, { useEffect, useState } from 'react';
import NewsItems from './NewsItems';
import styles from '../style/newsCard.module.css';
import { useSearchParams } from 'next/navigation';

function Home() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);

    const params = useSearchParams();
    const query = params.get("q") || "Cricket";
    const language = params.get("language") || "en";

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            try {
                const res = await fetch(
                    `https://newsapi.org/v2/everything?q=${query}&language=${language}&sortBy=publishedAt&apiKey=57f8a2226cf44701b039d772f48017a2`
                );
                const data = await res.json();

                if (data.status === "ok") {
                    setArticles(data.articles);
                }
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [query, language]);

    return (
        <div>
            <h5
                style={{
                    color: 'whitesmoke',
                    padding: '10px 20px'
                }}>
                {query} News ({language.toUpperCase()})
            </h5>
            {loading ?
                <div className={styles.skeletonContainer}>
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className={styles.skeletonCard}>
                            <div className={styles.skeletonImage} />
                            <div className={styles.skeletonContent}>
                                <div className={`${styles.skeletonLine} ${styles.short}`} />
                                <div className={`${styles.skeletonLine} ${styles.medium}`} />
                                <div className={styles.skeletonLine} />
                            </div>
                        </div>
                    ))}
                </div> : (
                    <div className={styles.container}>
                        {articles.map((item, index) => (
                            <NewsItems
                                key={index}
                                source={item?.source?.name}
                                title={item?.title}
                                description={item?.description}
                                date={item?.publishedAt}
                                pic={item?.urlToImage}
                                url={item?.url}
                            />
                        ))}
                    </div>
                )}
        </div>
    )
}

export default Home