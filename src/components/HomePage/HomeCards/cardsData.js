import card_1_img from "./cardsData/card_1.png";
import card_2_img from "./cardsData/card_2.png";
import card_3_img from "./cardsData/card_3.png";
import card_1_logo from "./cardsData/card_1_logo.svg";
import card_2_logo from "./cardsData/card_2_logo.svg";
import card_3_logo from "./cardsData/card_3_logo.svg";

const cardsData = [
  {
    img: card_1_img,
    desc: () => (
      <>
        Gintcoin Panvala League Grant Community Goals We’ll distribute the funds
        we raise depending on how much you donate, how much matching we receive
        from the Ethereum Foundation, and how much extra matching we receive
        from Panvala for donations made with PAN.
      </>
    ),
    description: `Gintcoin Panvala League Grant Community Goals We’ll distribute the funds
        we raise depending on how much you donate, how much matching we receive
        from the Ethereum Foundation, and how much extra matching we receive
        from Panvala for donations made with PAN.`,
    logo: card_1_logo,
    byline: "future modern x panvala league grant",
    id: 1,
  },
  {
    img: card_2_img,
    desc: () => (
      <>
        ¡ NEW DROP ALERT ! our member /krustyqw just dropped their first
        collectible on rarible, but with a twist: it's the flyer for the world's
        first and best ever dog fashion show, MC'ed annually by Krusty themself!
        check it out and maybe own a part of history.
      </>
    ),
    description: `¡ NEW DROP ALERT ! our member /krustyqw just dropped their first
        collectible on rarible, but with a twist: it's the flyer for the world's
        first and best ever dog fashion show, MC'ed annually by Krusty themself!
        check it out and maybe own a part of history.`,
    logo: card_2_logo,
    byline: "/afuturemodern",
    id: 2,
  },
  {
    img: card_3_img,
    desc: () => (
      <>
        We are a network of coops delivering liberation tech to the masses
        through art, culture, and basic services. we are fiscally hosting 3
        collectives: • aeria • e-state • artel
      </>
    ),
    description: `We are a network of coops delivering liberation tech to the masses
        through art, culture, and basic services. we are fiscally hosting 3
        collectives: • aeria • e-state • artel`,
    logo: card_3_logo,
    byline: "/afuturemodern",
    id: 3,
  },
];
export default cardsData;
