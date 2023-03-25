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
  petCleanerSmall: require(`${baseUrl}/petCleanerSmall.png`),
  petFeederSmall: require(`${baseUrl}/petFeederSmall.png`),
  petDispenserSmall: require(`${baseUrl}/petDispenserSmall.png`),
  qrCode: require(`${baseUrl}/qrCode.png`),
  dog: require(`${baseUrl}/dog.png`),
  cat: require(`${baseUrl}/cat.png`)
};
