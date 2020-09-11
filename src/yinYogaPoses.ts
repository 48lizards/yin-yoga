import { Pose, PoseArchetype } from "./types";
const { Dog, Shoelace, Saddle, Caterpillar, Dragonfly, Twist } = PoseArchetype;

const yinYogaPoses: Array<Pose> = [
  {
    archetype: Dog,
    name: "Puppy",
    isSymmetrical: true,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/2185/2813/articles/PuppyHeader-1_1200x.progressive.jpg?v=1582928010"
  },
  {
    archetype: Dog,
    name: "Child's Pose",
    isSymmetrical: true,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0221/5544/files/Child_s_pose.jpg?2050"
  },
  {
    archetype: Shoelace,
    name: "Shoelace",
    isSymmetrical: false,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/57d7315d20099e5bb1ebb737/1479658401195-R2JHUU156WYR4BMOVMNE/ke17ZwdGBToddI8pDm48kKE8Kl1bZ0EYnZDoJ7_8lLhZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzTJLOlDtbKC2j5_--9sgOhYnPiOoKsDbRyjG4-7JyTWsZz3xh_mhFTz4McKz9WN2A/Shoelace+Yin+Yoga+Pose?format=1500w"
  },
  {
    archetype: Shoelace,
    name: "Square",
    isSymmetrical: false,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/57d7315d20099e5bb1ebb737/1479658856640-62KV0IM1QTDAZ38KKZ9A/ke17ZwdGBToddI8pDm48kEOW8aMxGoHrS75ZbhmzPBxZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx48M_m3Ftx_8mdpRNPnkAOGMw5smZgAAakqOijxdpp3VUnq6fmsShrpAMQf1NgC-k/Square+Pose?format=1500w"
  },
  {
    archetype: Shoelace,
    name: "Pigeon",
    isSymmetrical: false,
    imageUrl: "https://i.ibb.co/Y06Xk72/Pigeon.png"
  },
  {
    archetype: Shoelace,
    name: "Upright Pigeon",
    isSymmetrical: false,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/57d7315d20099e5bb1ebb737/1479659266222-9OMRCXB2571US0EPX9UX/ke17ZwdGBToddI8pDm48kAOlIjh6GsvcH_52Uoetha1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PINLubpmEDpOGdvU-f2IHA2azejwOAun7LpcaUx6io7soKMshLAGzx4R3EDFOm1kBS/Upward+Swan+Pose?format=1500w"
  },
  {
    archetype: Shoelace,
    name: "Supine Pigeon",
    isSymmetrical: false,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/59528ce9725e256164783faf/1518193148756-MQA9D6WL55V8ZYPNSX03/ke17ZwdGBToddI8pDm48kGm9K2Ph2-1uClUtDVKAxFYUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dkoBbQWT0Jng51S9lThM5mwpmlqJC83sE8fjaLzLHJGDZDqXZYzu2fuaodM4POSZ4w/sciatica3.jpg?format=2500w"
  },
  {
    archetype: Saddle,
    name: "Saddle Archer",
    isSymmetrical: false,
    imageUrl:
      "https://47h07141n4wr3s4gyj49ii1d-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/Cow-Face-Pose-for-Pose-Page-Stock-e1574885530796.jpeg"
  },
  {
    archetype: Saddle,
    name: "Sphinx",
    isSymmetrical: true,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/57d7315d20099e5bb1ebb737/1479658732651-J816TFR93K2RFKQN0KN9/ke17ZwdGBToddI8pDm48kFokWAwhPXJr8sAok-y3-PRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIfsRyKqxNI38gxVaQYhajtZbR74nmCtVtrnQUwRok-hkKMshLAGzx4R3EDFOm1kBS/Sphinx+Pose?format=1500w"
  },
  {
    archetype: Saddle,
    name: "Seal",
    isSymmetrical: true,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/57d7315d20099e5bb1ebb737/1479657558931-9D4MRBS6P2G1GORYZ28B/ke17ZwdGBToddI8pDm48kEfgAX52CIQMEoivIVGxO11Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIcVBX21mC-kV6oCQSRLtdVjL9vfOvmMcPp10Rp00xvRMKMshLAGzx4R3EDFOm1kBS/YinYoga-Seal-Pose.jpg?format=1500w"
  },
  {
    archetype: Saddle,
    name: "Saddle",
    isSymmetrical: true,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/57d7315d20099e5bb1ebb737/1479657338479-XJZ5EQ5O6NEMLQCVBEM0/ke17ZwdGBToddI8pDm48kJLO3MVqsOyPN7Hwd7N_dfVZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIZEDqXdVZ7chneHmqZMM1AyMj4w49-pWfnZlwP3WO1u4KMshLAGzx4R3EDFOm1kBS/YinYoga-Saddle-Pose.jpg?format=1500w"
  },
  {
    archetype: Saddle,
    name: "Half Saddle",
    isSymmetrical: false,
    imageUrl: "https://i.ibb.co/Dg9Jhgx/Half-Saddle.png"
  },
  {
    archetype: Saddle,
    name: "Dragon",
    isSymmetrical: false,
    imageUrl: "https://i.ibb.co/bR2Rh2x/Dragon.png"
  },
  // // {
  // //   archetype: Saddle,
  // //   name: "Bridge",
  // //   isSymmetrical: true
  // // },
  {
    archetype: Caterpillar,
    name: "Caterpillar",
    isSymmetrical: true,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/57d7315d20099e5bb1ebb737/1475253830186-3FUEOJXEDRZDOSBP2QMB/ke17ZwdGBToddI8pDm48kAWnm9UjFoebiGrm5Wm5Z7VZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpycUTlWZaCc-LsHMdveW6uz_GyBrBCw-n95uxJVhIPho-zi7Xd-UHBhM5MuOzm5_Ew/caterpillar-yin-yoga-pose?format=1500w"
  },
  {
    archetype: Caterpillar,
    name: "Butterfly",
    isSymmetrical: true,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/57d7315d20099e5bb1ebb737/1479399303286-Q5OHPIITDK3KSH80459R/ke17ZwdGBToddI8pDm48kMQm9aQ7sa6e7ubZW2zqpzBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxWBGWzofw9oPtSUYuthKR1ZcOm-sULhUAEN2PEC7xdrgDXgQ128pRGWGqFiQjw3mo/butterfly-yin-yoga-pose?format=1500w"
  },
  {
    archetype: Caterpillar,
    name: "Half Butterfly",
    isSymmetrical: false,
    imageUrl: "https://i.ibb.co/H7rbyrm/Half-Butterfly.png"
  },
  {
    archetype: Caterpillar,
    name: "Half Shoelace",
    isSymmetrical: false,
    imageUrl: "https://i.ibb.co/Nr2Cr6G/Half-Shoelace.png"
  },
  {
    archetype: Caterpillar,
    name: "Half Frog",
    isSymmetrical: false,
    imageUrl: "https://i.ibb.co/LYxv0tC/Half-Frog.png"
  },
  {
    archetype: Caterpillar,
    name: "Snail",
    isSymmetrical: true,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/57d7315d20099e5bb1ebb737/1479658603246-7L3CU90MBG3S8VCKO1OE/ke17ZwdGBToddI8pDm48kH4-2QHWSbXDtpWJ22SoT3JZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PISuJXEaT7NlIFdceSofUkFoELUgGRkJb5JevJMJ8rYEEKMshLAGzx4R3EDFOm1kBS/Snail+Pose?format=1500w"
  },
  {
    archetype: Caterpillar,
    name: "Dangling",
    isSymmetrical: true,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/57d7315d20099e5bb1ebb737/1479399705287-8WWFFNJ0TDTST4B0QHK5/ke17ZwdGBToddI8pDm48kLSXCMb1bRilJHlxnu09wyhZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVELHKVLVrody8NzUkuGk6l0OpvBPm-4gYeV2_7xyLfRQ5GHtObTNYVxKLRA3AHdlmk/dandling-yin-yoga-pose?format=1000w"
  },
  {
    archetype: Dragonfly,
    name: "Dragonfly",
    isSymmetrical: true,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/57d7315d20099e5bb1ebb737/1479656553240-DEFMU8DJK7CNFEWPEVV1/ke17ZwdGBToddI8pDm48kEkCSA9_gs9iM4vBTTTTmBNZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIX9ccScF5u3Om1EGDp7kkJjRr0Fv6wT6gNcRxqnqqWp4KMshLAGzx4R3EDFOm1kBS/image-asset.jpeg?format=1500w"
  },
  {
    archetype: Dragonfly,
    name: "Frog",
    isSymmetrical: true,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/57d7315d20099e5bb1ebb737/1479656968683-VN1WG5H8I6Y4HGAVETTG/ke17ZwdGBToddI8pDm48kE6RKEcr_5PDNZ1A-5_PR_FZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI8qX71lxtXDpeYVyJQ3edY9K1NmDxkNAYkQX9FUl0SLAKMshLAGzx4R3EDFOm1kBS/frog-yin-yoga-pose?format=1500w"
  },
  {
    archetype: Dragonfly,
    name: "Happy Baby",
    isSymmetrical: true,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/57d7315d20099e5bb1ebb737/1479659446804-7SS88PFDNORKHZM41BPZ/ke17ZwdGBToddI8pDm48kATjhXVL2XFMnLlNWu0ej1JZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIAaTmv9BzR0_b7fCaD0iSwL-dLXHqIgqQWZ1oxJxFXKwKMshLAGzx4R3EDFOm1kBS/YinYoga-Stir-up-pose.jpg?format=1500w"
  },
  {
    archetype: Dragonfly,
    name: "Full Squat",
    isSymmetrical: true,
    imageUrl: "https://yogaholism.com/wp-content/uploads/2019/08/Malasana.jpg"
  },
  {
    archetype: Twist,
    name: "Twist",
    isSymmetrical: false,
    imageUrl: "https://i.ibb.co/MnZRpKr/Twist.png"
  },
  {
    archetype: Twist,
    name: "Tucked Twist",
    isSymmetrical: false,
    imageUrl: "https://i.ibb.co/2vTFXzR/Tucked-Twist.png"
  },
  {
    archetype: Twist,
    name: "Twisted Roots",
    isSymmetrical: false,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/57d7315d20099e5bb1ebb737/1479659763346-EW4G6CMX0KACVTTT4AXB/ke17ZwdGBToddI8pDm48kJXBd9YVvgXdu9dM25-nJ5FZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIsSzbDM-q5CyflgwTFtinqZRfqzdD--T8YBOE7s0g7xgKMshLAGzx4R3EDFOm1kBS/Twisted+Roots+Pose?format=1500w"
  },
  {
    archetype: Twist,
    name: "Cat Tail",
    isSymmetrical: false,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/57d7315d20099e5bb1ebb737/1479376514749-VUUPT3EX78ALVPGQMWN6/ke17ZwdGBToddI8pDm48kOKjVnZDmOVzcDAjt7ZXEAJZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIstjHJsUTAxw1UjXHoSQO5XbmEuOBnikx_MEvEavQ5NwKMshLAGzx4R3EDFOm1kBS/butterfly-yin-yoga-pose?format=1500w"
  }
];

export default yinYogaPoses;
