type images = typeof IMAGES;
type name = keyof images;
export type ImageCustomProps = {
  name: name;
  height: number | string;
  width: number | string;
};
const baseUrl = '../../assets/images';

export const IMAGES = {
  petHeader: require(`${baseUrl}/petHeader.png`),
  petBackgroundImage: require(`${baseUrl}/petBackgroundImage.png`),
  petCleanerBig: require(`${baseUrl}/petCleanerBig.png`),
  petFeederBig: require(`${baseUrl}/petFeederBig.png`),
  petDispenserBig: require(`${baseUrl}/petDispenserBig.png`),
};
