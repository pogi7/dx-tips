import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use and Learn',
    Svg: require('@site/static/img/undraw_maker_launch.svg').default,
    description: (
      <>
        OML Vision was designed with ease of use in mind for all members of the project team and for users 
        who are familiar with document based tools to transition
        to Model Based Systems Engineering (MBSE).
      </>
    ),
  },
  {
    title: 'Sponsored by openCAESAR',
    Svg: require('@site/static/img/undraw_teaching.svg').default,
    description: (
      <>
        OML Vision falls under the openCAESAR product line.  openCAESAR is a ontological modeling and 
        analysis platform that implements the Ontological Modeling Language (OML), and supports 
        an agile DevOps approach to system modeling and analysis.
      </>
    ),
  },
  {
    title: 'Powered by React TSX and VSCode',
    Svg: require('@site/static/img/undraw_react.svg').default,
    description: (
      <>
        OML Vision is a Visual Studio Code extension that is built using React and Typescript. This allows type safety,
        improved collaboration, and enhanced code maintainability throughout the lifecycle of the project.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
