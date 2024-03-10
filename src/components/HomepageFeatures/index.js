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
        <a href="https://px.a8.net/svt/ejp?a8mat=3Z2OIC+4S2ALU+4UAG+60H7L" rel="nofollow">
          <img border="0" width="300" height="250" alt="" src="https://www24.a8.net/svt/bgt?aid=240310164289&wid=001&eno=01&mid=s00000022588001010000&mc=1"></img>
        </a>
        <img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=3Z2OIC+4S2ALU+4UAG+60H7L" alt=""></img>
        <a href="https://px.a8.net/svt/ejp?a8mat=3Z2OIC+4XF71U+4K3S+60WN5" rel="nofollow">
        <img border="0" width="300" height="250" alt="" src="https://www21.a8.net/svt/bgt?aid=240310164298&wid=001&eno=01&mid=s00000021268001012000&mc=1"></img>
        </a>
        <img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=3Z2OIC+4XF71U+4K3S+60WN5" alt=""></img>
        <a href="https://px.a8.net/svt/ejp?a8mat=3Z2OIC+58QFJM+33T0+25FUNL" rel="nofollow">
        <img border="0" width="300" height="250" alt="" src="https://www27.a8.net/svt/bgt?aid=240310164317&wid=001&eno=01&mid=s00000014490013007000&mc=1"></img></a>
        <img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=3Z2OIC+58QFJM+33T0+25FUNL" alt=""></img>
        <a href="https://px.a8.net/svt/ejp?a8mat=3Z2OIC+53YYPE+3ZMA+609HT" rel="nofollow">
        <img border="0" width="300" height="250" alt="" src="https://www24.a8.net/svt/bgt?aid=240310164309&wid=001&eno=01&mid=s00000018613001009000&mc=1"></img></a>
        <img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=3Z2OIC+53YYPE+3ZMA+609HT" alt=""></img>
      </div>
    </section>
  );
}
