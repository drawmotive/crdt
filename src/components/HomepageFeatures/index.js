import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate id="features.conquerDistraction.title">Conquer Workplace Distraction</Translate>,
    image: '/img/undraw_focus_room_distraction_free.png',
    description: (
      <>
        <Translate id="features.conquerDistraction.description">
          Escape the constant pings and context switching. Learn how the Focus Room method creates a protected, high-momentum environment to tackle complex tasks and deliver results faster.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate id="features.collectivePower.title">Harness Collective Focus Power</Translate>,
    image: '/img/undraw_focus_room_team_flow.png',
    description: (
      <>
        <Translate id="features.collectivePower.description">
          Discover how structured 'Focus Blocks' and the subtle power of 'Social Facilitation' (working alongside others, even virtually) combine to boost team motivation, rhythm, and shared accomplishment.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate id="features.highOutput.title">Build Your High-Output Engine</Translate>,
    image: '/img/undraw_focus_room_blueprint.png',
    description: (
      <>
        <Translate id="features.highOutput.description">
          Get a practical, step-by-step blueprint using Agile principles. Implement your own Focus Room (physical or virtual), measure its impact, and cultivate a lasting culture of deep work and continuous improvement.
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
