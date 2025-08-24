import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate id="features.theory.title">Drawing CRDT Fundamentals</Translate>,
    image: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        <Translate id="features.theory.description">
          Master the core concepts of CRDTs specifically for drawing applications. Learn about vector graphics synchronization, geometric conflict resolution, and the mathematical foundations that enable seamless collaborative drawing experiences.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate id="features.implementation.title">Drawing Tool Implementation</Translate>,
    image: '/img/undraw_docusaurus_tree.svg',
    description: (
      <>
        <Translate id="features.implementation.description">
          Build collaborative drawing tools with practical CRDT patterns for shapes, paths, layers, and real-time synchronization. Get hands-on with code examples for vector graphics, canvas operations, and multi-user drawing sessions.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate id="features.applications.title">Real-Time Drawing Applications</Translate>,
    image: '/img/undraw_docusaurus_react.svg',
    description: (
      <>
        <Translate id="features.applications.description">
          Discover how CRDTs power production drawing tools, collaborative design platforms, and real-time diagram editors. Learn from case studies of successful drawing applications and architectural patterns for scalable collaboration.
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
