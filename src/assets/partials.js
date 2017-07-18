/*
 * Partials Presentationals React Components
 */

import { Sample } from 'jg-src';

export const Header = () => <header className='flex justify-between f2 b white-80 bg-black-50 pv3 ph5 w-100'>
  JSON Generator
  <Sample />
</header>;

export const Footer = () => <footer className='w-100 pv2 ph3 f7 bg-white tc black-30'>
  { Fixtures.Credits }
</footer>;

export const Main = props => <main className='flex flex-column flex-row-ns content-around tl pv5 ph5 w-100'>
  { props.children }
</main>;
