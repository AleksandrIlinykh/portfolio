import Link from '../components/common/link/link';
export const timelineData = [
  {
    id: 1,
    date: '2012 - 2014',
    header: 'Education at the Ural Federal University',
    text: [
      `Get a bachelor's degree with a 7.76 average and participate in scientific pursuits (`,
      <Link
        type={'openNewTab'}
        text={'My artickle on IEEE'}
        href={'https://ieeexplore.ieee.org/document/7911597'}
        isBlank={true}
        iconSize={'medium'}
        key={1}
      />,
      `). I became acquainted with programming for the first time and became enamored with it.`,
      `). Get my first job in `,
      <Link
        type={'openNewTab'}
        text={'D-test'}
        href={'https://ru.d-test.ru/'}
        isBlank={true}
        iconSize={'medium'}
        key={1}
      />,
      ` wrote an alghoritm for a `,
      <Link
        type={'openNewTab'}
        text={'bubble gum thickness'}
        href={
          'https://ru.d-test.ru/catalog/izmeritel_nye_sistemy/lazernaya_sistema_izmereniya_tolshiny_polotna/'
        }
        isBlank={true}
        iconSize={'medium'}
        key={2}
      />,
      ' measuring algorithm on C++.',
    ],
  },
  {
    id: 2,
    date: '2016 - 2018',
    header: 'My first job at the factory',
    text: [
      `Was working in `,
      <Link
        type={'openNewTab'}
        text={'NPOA factory'}
        href={'https://www.npoa.ru/'}
        isBlank={true}
        iconSize={'medium'}
        key={1}
      />,
      `. I was working on software writing projects in addition to engineering tasks. My greatest accomplishment is the program refactoring and the removal of a bug in the microcontroller code in 8086 assembler, which caused the devices to intermittently fail for several years!`,
    ],
  },
  {
    id: 2,
    date: '2018 - 2020',
    header: 'Startup',
    text: [
      `Worked at `,
      <Link
        type={'openNewTab'}
        text={'Labyrinth'}
        href={'https://labyrinth.pro/'}
        isBlank={true}
        iconSize={'medium'}
        key={1}
      />,
      `, contributed to the creation of the anti-theft system. In addition to designing antennas and hardware, he worked with WEB developers to improve the UI/UX of monitoring platforms and refactor the C++ code of microcontrollers.`,
    ],
  },
  {
    id: 2,
    date: '2021',
    header: 'The last job as an engineer and a business trip to Holland',
    text: [
      `6 months engaged in engineering work at`,
      <Link
        type={'openNewTab'}
        text={'EMA factory'}
        href={'https://ema.su/'}
        isBlank={true}
        iconSize={'medium'}
        key={1}
      />,
      `, Spent a whole month in Germany and Holland, working in the laboratory`,
      <Link
        type={'openNewTab'}
        text={'Dekra'}
        href={
          'https://www.dekra-product-safety.com/en/about-dekra/locations/europe/netherlands/arnhem'
        }
        isBlank={true}
        iconSize={'medium'}
        key={2}
      />,
      `. Successfully accompanied the testing of medical devices,
      actively communicating with engineers in English and correcting critical deficiencies on the spot.`,
    ],
  },
  {
    id: 2,
    date: '2022',
    header: 'Present moment',
    text: [
      `I have finished `,
      <Link
        type={'openNewTab'}
        text={'React-developer'}
        href={'https://practicum.yandex.ru/react/'}
        isBlank={true}
        iconSize={'medium'}
        key={3}
      />,
      ` course from Yandex Practicum, for almost a year I have been working as a full-time front-end developer.`,
    ],
  },
];
