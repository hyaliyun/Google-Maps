/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

export type FeatureItem = {
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  text: JSX.Element;
};

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      message: 'Just for you',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/owner.png',
      width: 1009.54,
      height: 717.96,
    },
    text: (
      <Translate id="homepage.features.powered-by-mdx.text">
        Discover new experiences across the world or around the corner
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Follow your favourites',
      id: 'homepage.features.built-using-react.title',
    }),
    image: {
      src: '/img/amazon-photos.png',
      width: 1108,
      height: 731.18,
    },
    text: (
      <Translate id="homepage.features.built-using-react.text">
      Make your plans happen by connecting with the places that you are interested in
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'world around you',
      id: 'homepage.features.ready-for-translations.title',
    }),
    image: {
      src: '/img/baidu.png',
      width: 1137,
      height: 776.59,
    },
    text: (
      <Translate id="homepage.features.ready-for-translations.text">
       See how people are using Google Maps to explore what is around them,
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Explore your world',
      id: 'homepage.features.document-versioning.title',
    }),
    image: {
      src: '/img/Google-Business.svg',
      width: 1038.23,
      height: 693.31,
    },
    text: (
      <Translate id="homepage.features.document-versioning.text">
          With the redesigned Explore tab, find places to eat and things to do around you or when you travel
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'map the world',
      id: 'homepage.features.content-search.title',
    }),
    image: {
      src: '/img/google-earth.svg',
      width: 1137.97,
      height: 736.21,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
           Map making is an ancient human endeavor, and one that those of us working on Google Maps are honoured to continue to pursue
      </Translate>
    ),
  },
];

export default FEATURES;
