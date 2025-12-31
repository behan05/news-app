"use client";
import React, { useEffect, useState } from 'react';
import NewsItems from './NewsItems';
import styles from '../style/newsCard.module.css';
import { useSearchParams } from 'next/navigation';

function Home() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

    const params = useSearchParams();
    const query = params.get("q") || "Cricket";
    const language = params.get("language") || "en";

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            setError(null);

            try {
                const res = await fetch(
                    `https://newsapi.org/v2/everything?q=${query}&language=${language}&sortBy=publishedAt&apiKey=${API_KEY}`
                );

                const data = await res.json();

                if (!res.ok || data.status === "error") {
                    setError(data.message || "Daily request limit reached");
                    setArticles([]);
                    return;
                }

                setArticles(data.articles || []);
            } catch (e) {
                setError("Something went wrong. Please try again.");
                setArticles([]);
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
                    color: "whitesmoke",
                    padding: "10px 20px",
                }}
            >
                {query} News ({language.toUpperCase()})
            </h5>

            {loading ? (
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
                </div>
            ) : error ? (
                /* API limit / error message */
                <p
                    style={{
                        color: "#fca5a5",
                        textAlign: "center",
                        padding: "20px",
                    }}
                >
                    ⚠️ {error}
                    <br />
                    <small style={{ color: "#cbd5f5" }}>
                        This app uses a free NewsAPI plan (50 requests/day).
                    </small>
                </p>
            ) : (
                <div className={styles.container}>
                    {articles.length ? (
                        articles.map((item, index) => (
                            <NewsItems
                                key={index}
                                source={item?.source?.name}
                                title={item?.title}
                                description={item?.description}
                                date={item?.publishedAt}
                                pic={item?.urlToImage}
                                url={item?.url}
                            />
                        ))
                    ) : (
                        /* No articles case (not an error) */
                        <p
                            style={{
                                color: "whitesmoke",
                                textAlign: "center",
                                padding: "20px",
                            }}
                        >
                            No articles found.
                        </p>
                    )}
                </div>
            )}
        </div>
    );

}

export default Home