import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate id="features.theory.title">CRDT Theory & Fundamentals</Translate>,
    image: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        <Translate id="features.theory.description">
          Understand the core concepts of Conflict-Free Replicated Data Types. Learn about eventual consistency, convergence properties, and the mathematical foundations that make CRDTs work in distributed systems.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate id="features.implementation.title">Implementation Patterns</Translate>,
    image: '/img/undraw_docusaurus_tree.svg',
    description: (
      <>
        <Translate id="features.implementation.description">
          Explore practical implementation patterns for various CRDT types including counters, sets, maps, and text. Get hands-on with code examples and best practices for building robust distributed applications.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate id="features.applications.title">Real-World Applications</Translate>,
    image: '/img/undraw_docusaurus_react.svg',
    description: (
      <>
        <Translate id="features.applications.description">
          Discover how CRDTs are used in production systems for collaborative editing, distributed databases, and real-time synchronization. Learn from case studies and architectural patterns.
        </Translate>
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} alt={image} className={styles.featureImage} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
