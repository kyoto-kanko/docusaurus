import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '怠惰',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      怠惰とは、無駄な労力を避けるための効率を追求する心構えを指します。たとえば、同じコードを何度も書きたくないと感じるのは、この怠惰から来るものでしょう。この感覚は、再利用可能なコードを書いたり、繁重な作業を自動化する原動力となります。
      </>
    ),
  },
  {
    title: '短気',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      短気というのは、自らの手でシステムやソフトウェアの改善を急ぎたいという意欲のことです。もしコンピュータが期待した通りに動作しなかった場合、それをただ受け入れるのではなく、すぐに修正や改善を求める気持ちが短気から来るのです。
      </>
    ),
  },
  {
    title: '傲慢',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      傲慢とは、自分が書いたコードに誇りを持ち、他の人たちにもその良さを伝えたいという気持ちを示しています。この美徳の下では、コードは整理され、コメントやドキュメントも丁寧に書かれることが期待されます。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
