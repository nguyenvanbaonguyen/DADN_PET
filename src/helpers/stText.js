const keys = {
  fs: 'fontSize',
  fw: 'fontWeight',
  cl: 'color',
  align: 'textAlign',
  opa: 'opacity',
  lh: 'lineHeight',
};

const values = {
  primary: '#252A31',
  red: '#D7331C',
  blue: '#005AA3',
  white: '#FFFFFF',
  gray: '#4F5E71',
  bold: '600',
  semi: '500',
  normal: '400',
  c: 'center',
  l: 'left',
  r: 'right',
};

const baseValue = 1;

const convertToRealStyle = rawLayout => {
  const [key, value] = rawLayout.split('-');
  const typeLayout = keys[key];
  const result = isNaN(value) ? values[value] : value * baseValue;
  return [typeLayout, result];
};
const stText = stringStyles => {
  const realStyle = stringStyles.split(' ').reduce((pre, rawLayout) => {
    const [typeGutter, value] = convertToRealStyle(rawLayout);
    return {...pre, [typeGutter]: value};
  }, {});

  return realStyle;
};

export default stText;
