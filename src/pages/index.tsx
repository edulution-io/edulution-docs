import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs">
            Zur Dokumentation →
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageContent() {
  return (
    <section className="container margin-vert--lg">
      <div className="row">
        <div className="col col--4">
          <div className="text--center padding-horiz--md">
            <Heading as="h3">🚀 edulution UI</Heading>
            <p>
              Eine moderne Weboberfläche für Schulnetzwerke mit Linuxmuster.net Integration.
              Einfache Installation und intuitive Bedienung.
            </p>
            <Link className="button button--primary button--sm" to="/docs/edulution-ui/installation/einrichtung">
              Installation starten
            </Link>
          </div>
        </div>
        <div className="col col--4">
          <div className="text--center padding-horiz--md">
            <Heading as="h3">📧 edulution Mail</Heading>
            <p>
              Mailserver-Lösung basierend auf Mailcow mit vollständiger Integration
              in die edulution UI und Linuxmuster.net.
            </p>
            <Link className="button button--primary button--sm" to="/docs/edulution-mail/installation">
              Mail Setup
            </Link>
          </div>
        </div>
        <div className="col col--4">
          <div className="text--center padding-horiz--md">
            <Heading as="h3">💬 Community</Heading>
            <p>
              Holen Sie sich Hilfe im Forum oder testen Sie die Demo-Umgebung.
              Die Community unterstützt Sie gerne!
            </p>
            <Link className="button button--primary button--sm" to="https://ask.linuxmuster.net/c/edulution/63">
              Zum Forum
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Willkommen"
      description="Dokumentation für edulution UI und edulution Mail - Moderne Schulnetzwerk-Lösung">
      <HomepageHeader />
      <main>
        <HomepageContent />
      </main>
    </Layout>
  );
}
