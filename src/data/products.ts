import { Product } from '@/interfaces';
import { Materials } from '@/enums/materials';
import { Tags } from '@/enums/tags';

export const Products: Product[] = [
  {
    name: 'Puky PUKYLINO',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt...',
    image: 'https://www.puky.de/pub/media/catalog/product/cache/ada374028955ad6cfd8d7dafd0ffa279/i/m/image_0cba7bf5fef3766070b377f5d215aa5fa1290e72_20200113151443_3014.png',
    url: 'https://www.puky.de/de/catalog/product/view/id/30535/s/5df837daa248cpukylino%C2%AE_00003014-1/category/10/',
    material: Materials.PlastikMetall,
    tags: [Tags.MadeInD],
  },
  {
    name: 'Puky LR M',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt...',
    image: 'https://www.puky.de/pub/media/catalog/product/cache/ada374028955ad6cfd8d7dafd0ffa279/i/m/image_3809d673b0b6d54dc3686dc61c59fc2dcb66f964_20200113155518_4055.png',
    url: 'https://www.puky.de/de/catalog/product/view/id/30538/s/5df838253543blr_m_00004055-1/category/14/',
    material: Materials.PlastikMetall,
    tags: [Tags.MadeInD],
  },
  {
    name: 'Eichhorn Spiel- und Lauflernwagen',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt...',
    image: 'https://cdn.simba-dickie-group.de/media/web-eichhorn/products/100001833/00/detail_zoom/eichhorn-spiel-und-lauflernwagen-100001833_00.jpeg?v=1537965521',
    url: 'https://www.eichhorn-toys.de/de/produkte/beschaeftigung/motorik/eichhorn-spiel-und-lauflernwagen-100001833/',
    material: Materials.Holz,
    tags: [Tags.MadeInD, Tags.NachwachsenderRohstoff],
  },
  {
    name: 'new classic toys - metallophon mit musikbuch - 10 töne',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt...',
    image: 'https://www.newclassictoys.de/_clientfiles/products/New%20Classic%20Toys%20-%202018/md/10215.jpg',
    url: 'https://www.newclassictoys.de/speelgoedinstrumenten/new-classic-toys-metallophon-mit-musikbuch-10-tone.html',
    material: Materials.HolzMetall,
    tags: [],
  },
  {
    name: 'Eichhorn Klopfbank',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt...',
    image: 'https://cdn.simba-dickie-group.de/media/web-eichhorn/products/100027005/00/detail/eichhorn-klopfbank-100027005_00.jpeg?v=1521711695',
    url: 'https://www.eichhorn-toys.de/de/produkte/beschaeftigung/motorik/eichhorn-klopfbank-100027005/',
    material: Materials.Holz,
    tags: [Tags.MadeInD, Tags.NachwachsenderRohstoff],
  },
  {
    name: 'Grimms Großer Regenbogen',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt...',
    image: 'https://www.grimms.eu/media/image/a5/58/3b/Art10670105E532D4A1A43318BA719674E169B82_600x600@2x.jpg',
    url: 'https://www.grimms.eu/produkte/produktwelten/bau-amp-regenbogenwelten/regenbogenwelten/1317/grosser-regenbogen',
    material: Materials.Holz,
    tags: [Tags.MadeInD, Tags.NachwachsenderRohstoff],
  },
  {
    name: 'Grimms Babyroller Monochrom',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt...',
    image: 'https://www.grimms.eu/media/image/bf/28/25/Art93010A322D17E43D343E4A4EAC7357AFE0041_600x600@2x.jpg',
    url: 'https://www.grimms.eu/produkte/produktwelten/rasseln-amp-greifen/1992/babyroller-monochrom?c=1341',
    material: Materials.Holz,
    tags: [Tags.MadeInD, Tags.NachwachsenderRohstoff],
  },
  {
    name: 'HABA Stapelspiel Leuchtturm',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt...',
    image: 'https://d2kx81irxb72bi.cloudfront.net/cs/products/13/28/58/1000x1000.jpg?1580471171000',
    url: 'https://www.haba.de/de_DE/stapelspiel-leuchtturm--300170',
    material: Materials.Holz,
    tags: [Tags.MadeInD, Tags.NachwachsenderRohstoff],
  },
  {
    name: 'Grimms Großer Scheibenturm',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt...',
    image: 'https://www.grimms.eu/media/image/6b/ab/ae/Art110003F28D38C14F2431B88AB20EF276DC44D_600x600@2x.jpg',
    url: 'https://www.grimms.eu/produkte/produktwelten/stecken-amp-sortieren/2004/scheibenturm?number=11000',
    material: Materials.Holz,
    tags: [Tags.MadeInD, Tags.NachwachsenderRohstoff],
  }
];
