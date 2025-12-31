"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../style/navbar.module.css";
import { useSearchParams, useRouter } from "next/navigation";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [search, setSearch] = useState('');
    const params = useSearchParams();
    const language = params.get('language') || 'en';

    const mainLinks = [
        { label: `Home`, path: `/?language=${language}` },
        { label: `Politics`, path: `/?q=Politics&language=${language}` },
        { label: `Crime`, path: `/?q=Crime&language=${language}` },
        { label: `Science`, path: `/?q=Science&language=${language}` },
        { label: `Technology`, path: `/?q=Technology&language=${language}` },
        { label: `Economics`, path: `/?q=Economics&language=${language}` },
    ];

    const dropDownLinks = [
        { label: `Sports`, path: `/?q=Sports&language=${language}` },
        { label: `Cricket`, path: `/?q=Cricket&language=${language}` },
        { label: `World`, path: `/?q=World&language=${language}` },
        { label: `India`, path: `/?q=India&language=${language}` },
        { label: `Jokes`, path: `/?q=Jokes&language=${language}` },
    ];

    const languages = [
        { label: "Arabic", path: "/?language=ar" },
        { label: "German", path: "/?language=de" },
        { label: "English", path: "/?language=en" },
        { label: "Hindi", path: "/?language=hi" },
        { label: "Spanish", path: "/?language=es" },
        { label: "French", path: "/?language=fr" },
        { label: "Hebrew", path: "/?language=he" },
        { label: "Italian", path: "/?language=it" },
        { label: "Dutch", path: "/?language=nl" },
        { label: "Norwegian", path: "/?language=no" },
        { label: "Portuguese", path: "/?language=pt" },
        { label: "Russian", path: "/?language=ru" },
        { label: "Swedish", path: "/?language=sv" },
        { label: "Chinese", path: "/?language=zh" },
        { label: "Urdu", path: "/?language=ud" },
    ];

    const handleSearch = (e) => {
        if (!e) return setSearch('');
        setSearch(e.target.value)
    }

    const router = useRouter();
    const paramss = useSearchParams();

    // useEffect(() => {
    //     const newParams = new URLSearchParams(paramss.toString());

    //     newParams.set("q", search);

    //     router.push(`/?${newParams.toString()}`);
    // }, [search])

    const handleSubmit = () => {

        if (!search) return;
        const newParams = new URLSearchParams(paramss.toString());

        newParams.set("q", search);

        router.push(`/?${newParams.toString()}`);
    }

    return (
        <nav className={styles.navbar}>
            {/* Logo */}
            <h3 className={styles.logo}>NewsNest</h3>

            {/* Desktop Menu */}
            <div className={styles.navOptions}>
                <ul className={styles.unorderList}>
                    {mainLinks.map(({ label, path }) => (
                        <li key={label}>
                            <Link href={path}>{label}</Link>
                        </li>
                    ))}

                    <li className={styles.dropdown}>
                        <span>Other ▾</span>
                        <ul className={styles.dropdownMenu}>
                            {dropDownLinks.map(({ label, path }) => (
                                <li key={label}>
                                    <Link href={path}>{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </li>

                    <li className={styles.dropdown}>
                        <span>Language ▾</span>
                        <ul className={styles.dropdownMenu}>
                            {languages.map(({ label, path }) => (
                                <li key={label}>
                                    <Link href={path}>{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </li>

                    <div className={styles.search}>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSubmit();
                            }}
                        >
                            <input
                                placeholder="Search news..."
                                name="search"
                                value={search}
                                onChange={handleSearch}
                            />
                            <button type="submit">
                                <i className="ri-search-line"></i>
                            </button>
                        </form>
                    </div>

                </ul>
            </div>

            {/* Mobile Menu Icon */}
            <button
                className={styles.menuBtn}
                onClick={() => setMenuOpen(true)}
            >
                <i className="ri-menu-3-line"></i>
            </button>

            {/* Mobile Drawer */}
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
                <div className={styles.mobileHeader}>
                    <h4>Menu</h4>
                    <span onClick={() => setMenuOpen(false)}>
                        <i className="ri-close-line"></i>
                    </span>
                </div>

                <ul className={styles.mobileList}>
                    {[...mainLinks, ...dropDownLinks].map(({ label, path }) => (
                        <li key={label} onClick={() => setMenuOpen(false)}>
                            <Link href={path}>{label}</Link>
                        </li>
                    ))}

                    <div className={styles.langContainer}>
                        <p>Language</p>
                        <div className={styles.langSection}>
                            {languages.map(({ label, path }) => (
                                <Link key={label} href={path} onClick={() => setMenuOpen(false)}>
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
