import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import ContributorsList from "../components/ContributorsList";
import { useColorMode } from '@docusaurus/theme-common';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/start">
            我爱学习！
          </Link>
        </div>
      </div>
    </header>
  );
}

function Img() {
  const { colorMode } = useColorMode();
  return <img
    src="/img/本人的数学和物理作业可能包含以下内容.png"
    style={{
      display: "block",
      margin: "0 auto",
      filter: colorMode === "dark" ? "invert(1)" : "",
    }}
  />
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`首页`}
      description="MathNote - 数学笔记">
      <HomepageHeader />
      <main>
        <Img />
        <ContributorsList />
        {/*<HomepageFeatures />*/}
      </main>
    </Layout>
  );
}
