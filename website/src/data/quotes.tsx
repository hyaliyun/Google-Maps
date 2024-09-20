/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

const QUOTES = [
  {
    thumbnail: require('./quotes/pos.png'),
    name: 'Google My Business',
    title: translate({
      id: 'homepage.quotes.christopher-chedeau.title',
      message: '',
      description: 'Title of quote of Christopher Chedeau on the home page',
    }),
    text: (
      <Translate
        id="homepage.quotes.christopher-chedeau"
        description="Quote of Christopher Chedeau on the home page">
Stand out to people searching on Google, and connect with customers with a free business profile
      </Translate>
    ),
  },
  {
    thumbnail: require('./quotes/shop.png'),
    name: 'Google Earth',
    title: translate({
      id: 'homepage.quotes.hector-ramos.title',
      message: '',
      description: 'Title of quote of Hector Ramos on the home page',
    }),
    text: (
      <Translate
        id="homepage.quotes.hector-ramos"
        description="Quote of Hector Ramos on the home page">
Explore worldwide satellite imagery, 3D buildings and terrain for hundreds of cities with Google Earth
      </Translate>
    ),
  },
  {
    thumbnail: require('./quotes/wordpress.png'),
    name: 'Local Guides',
    title: translate({
      id: 'homepage.quotes.risky-vetter.title',
      message: '',
      description: 'Title of quote of Ricky Vetter on the home page',
    }),
    text: (
      <Translate
        id="homepage.quotes.risky-vetter"
        description="Quote of Ricky Vetter on the home page">
Become a Local Guide to help people everywhere find the places worth seeing and things worth doing
      </Translate>
    ),
  },
];

export default QUOTES;
