const keys = {
  jc: 'justifyContent',
  ai: 'alignItems',
  f: 'flex',
  h: 'height',
  w: 'width',
  p: 'padding',
  m: 'margin',
  ml: 'marginLeft',
  mr: 'marginRight',
  mb: 'marginBottom',
  mt: 'marginTop',
  mx: 'marginHorizontal',
  my: 'marginVertical',
  pl: 'paddingLeft',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pt: 'paddingTop',
  px: 'paddingHorizontal',
  py: 'paddingVertical',
  bg: 'backgroundColor',
  fd: 'flexDirection',
  br: 'borderRadius',
  l: 'left',
  t: 'top',
};
const values = {
  primary: '#DEF0FC',
  blue: '#0172CB',
  bluel: '#F1F8FE',
  w: '#ffffff',
  cloudl: '#E8EDF1',
  cloudd: '#BAC7D5',
  c: 'center',
  s: 'flex-start',
  e: 'flex-end',
  b: 'space-between',
  r: 'row',
  f: '100%',
  ba: '33%',
};
const baseValue = 1;

const convertToRealStyle = rawLayout => {
  const [key, value] = rawLayout.split('-');
  const typeLayout = keys[key];
  const result = isNaN(value) ? values[value] : value * baseValue;
  return [typeLayout, result];
};
const stView = stringStyles => {
  if (!stringStyles) return {};

  const realStyle = stringStyles
    .split(' ')
    .filter(item => item !== '')
    .reduce((pre, rawLayout) => {
      const [typeGutter, value] = convertToRealStyle(rawLayout);
      return {...pre, [typeGutter]: value};
    }, {});

  return realStyle;
};
export const ifLayout = arrLayout => {
  if (arrLayout.length === 0) return '';
  const stringLayout = arrLayout
    .map(arg => {
      if (arg.length === 3) return arg[0] ? arg[1] : arg[2];
      if (arg.length === 2) return arg[0] ? arg[1] : '';
      return '';
    })
    .join(' ');
  return stringLayout;
};

export default stView;
