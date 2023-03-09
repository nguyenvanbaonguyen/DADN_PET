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

  const realStyle = stringStyles.split(' ').reduce((pre, rawLayout) => {
    const [typeGutter, value] = convertToRealStyle(rawLayout);
    return {...pre, [typeGutter]: value};
  }, {});

  return realStyle;
};

export default stView;
