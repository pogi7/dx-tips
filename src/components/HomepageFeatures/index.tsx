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
    title: 'Standarize Development Processes',
    Svg: require('@site/static/img/undraw_dev_focus_re_6iwt.svg').default,
    description: (
      <>
        Having a pleasant and effective DX leads to development processes being standardized.  
        Adopting this environment leads to a <a href="https://www.devzero.io/blog/why-software-development-environments-are-important-and-how-to-manage-them-effectively">
        reduction of errors and improved reliability for the project.</a>
      </>
    ),
  },
  {
    title: 'Applicable To All Dev Teams',
    Svg: require('@site/static/img/undraw_pair_programming_re_or4x.svg').default,
    description: (
      <>
        Having a pleasant and effective DX can be applied to all development teams.  
        Embracing this mindset will allow your teams to be <a href="https://www.daytona.io/dotfiles/embracing-standardized-development-environments">
        more productive, collaborative, and consistent.</a>
      </>
    ),
  },
  {
    title: 'Lower Rates Of Burnout',
    Svg: require('@site/static/img/undraw_enter_uhqk.svg').default,
    description: (
      <>
        Having a pleasant and effective DX will lead to lower rates of burnout.  
        Adopting these practices can prevent or mitigate <a href="https://www.software.com/devops-guides/developer-burnout">
        lower code quality, poor project outcomes, and high turnover.</a>
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
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
