import Abilites from "./Abilities";
import Roles from "./Roles";

const Agents = [
  {
    id: 0,
    name: "OMEN",
    role: Roles[0],
    biography:
      "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.",
    abilities: [Abilites[20], Abilites[21], Abilites[22], Abilites[23]],
    pict: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4e5af408cc7a87b5/5eb7cdc17bedc8627eff8deb/V_AGENTS_587x900_Omen.png",
    colors: ["#5B5DB2", '#CCCDFA'],
  },
  {
    id: 6,
    name: "CHAMBER",
    role: Roles[2],
    biography:
      "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.",
    abilities: [Abilites[0], Abilites[1], Abilites[2], Abilites[3]],
    pict: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6f1392b30784e029/618d9da0d380f814d61f001c/WebUpdate_Chamber_KeyArt.png",
    colors: ["#f24c89"],
  },
  {
    id: 1,
    name: "NEON",
    role: Roles[1],
    biography:
      "Filipino Agent, Neon, surges forward at shocking speeds, discharging bursts of bioelectric radiance as fast as her body generates it. She races ahead to catch enemies off guard, then strikes them down quicker than lightning.",
    abilities: [Abilites[24], Abilites[25], Abilites[26], Abilites[27]],
    pict: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8093ba7b5e84ed05/61d8a63ddea73a236fc56d12/Neon_KeyArt-Web.png",
    colors: ["#56aede"],
  },
  {
    id: 2,
    name: "PHOENIX",
    role: Roles[1],
    biography:
      "Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight on his own terms.",
    abilities: [Abilites[4], Abilites[5], Abilites[6], Abilites[7]],
    pict: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf0200e1821b5b39f/5eb7cdc144bf8261a04d87f9/V_AGENTS_587x900_Phx.png",
    colors: ["#D67442"],
  },
  {
    id: 3,
    name: "SAGE",
    role: Roles[2],
    biography:
      "The bastion of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.",
    abilities: [Abilites[8], Abilites[9], Abilites[10], Abilites[11]],
    pict: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8a627ec10b57f4f2/5eb7cdc16509f3370a5a93b7/V_AGENTS_587x900_sage.png",
    colors: ["#3ce0c3"],
  },
  {
    id: 4,
    name: "SOVA",
    role: Roles[3],
    biography:
      "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.",
    abilities: [Abilites[12], Abilites[13], Abilites[14], Abilites[15]],
    pict: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf11234f4775729b7/5ebf2c275e73766852c8d5d4/V_AGENTS_587x900_ALL_Sova_2.png",
    colors: ["#bfc1bc"],
  },
  {
    id: 5,
    name: "VIPER",
    role: Roles[0],
    biography:
      "The American chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and cripple the enemy's vision. If the toxins don't kill her prey, her mind games surely will.",
    abilities: [Abilites[16], Abilites[17], Abilites[18], Abilites[19]],
    pict: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc825c6589eda7717/5eb7cdc6ee88132a6f6cfc25/V_AGENTS_587x900_Viper.png",
    colors: ["#02772D"],
  },
];

export default Agents;
