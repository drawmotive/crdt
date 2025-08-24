import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate from '@docusaurus/Translate';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <Translate id="homepage.crdt">CRDT</Translate>
        </Heading>
        <p className="hero__subtitle">
          <Translate id="homepage.tagline">Conflict-Free Replicated Data Type - Technical Documentation</Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs">
            <Translate id="homepage.startReading">📚 View Documentation</Translate>
          </Link>
        </div>
      
        <div>
            <div className={styles.languageButtons}>
              <a href="/" target="_self" className="button button--primary margin--xs">English</a>
              <a href="/zh-CN/" target="_self" className="button button--primary margin--xs">中文</a>
              <a href="/es/" target="_self" className="button button--primary margin--xs">Español</a>
              <a href="/fr/" target="_self" className="button button--primary margin--xs">Français</a>
              <a href="/de/" target="_self" className="button button--primary margin--xs">Deutsch</a>
              <a href="/ja/" target="_self" className="button button--primary margin--xs">日本語</a>
              <a href="/ko/" target="_self" className="button button--primary margin--xs">한국어</a>
              <a href="/pt/" target="_self" className="button button--primary margin--xs">Português</a>
            </div>
        </div>      
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="CRDT - Conflict-Free Replicated Data Type - Technical Documentation"
      description="Comprehensive technical documentation for Conflict-Free Replicated Data Type (CRDT), covering theory, implementation, and practical applications in distributed systems.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <div>
        <pre style={{whiteSpace: 'pre-wrap', width: '96%', maxWidth: '960px', margin: '0 auto'}}><Translate id="home.story"></Translate></pre>
      </div>
      <br/>
      <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs">
            <Translate id="homepage.startReading">📚 View Documentation</Translate>
          </Link>
        </div>
        <br/>
    </Layout>
  );
}
