import {
  Clip,
  Lane,
  Role,
  Tag,
  Team,
  User,
  UserClip,
} from "../types/clipRelated";

const useMocks = () => {
  const tag: Tag[] = [
    {
      id: 0,
      name: "Early Rotation",
    },
    {
      id: 1,
      name: "Objective Setup",
    },
    {
      id: 2,
      name: "Shift",
    },
  ];
  
  const role: Role[] = [
    {
      id: 0,
      name: "Head Coach",
    },
  
    {
      id: 1,
      name: "Assistant Coach",
    },
  
    {
      id: 2,
      name: "Strategic Coach",
    },
  
    {
      id: 3,
      name: "Positional Coach",
    },
  
    {
      id: 4,
      name: "Analyst",
    },
  
    {
      id: 5,
      name: "Player",
    },
  ];
  
  const team: Team[] = [
    {
      id: 0,
      name: "Fnatic",
    },
    {
      id: 1,
      name: "JDG",
    },
    {
      id: 2,
      name: "GenG",
    },
    {
      id: 3,
      name: "Antares",
    },
  ];
  
  const lane: Lane[] = [
    {
      id: 0,
      name: "TOPLANE",
    },
    {
      id: 1,
      name: "JUNGLE",
    },
    {
      id: 2,
      name: "MIDLANE",
    },
    {
      id: 3,
      name: "ADC",
    },
    {
      id: 4,
      name: "SUPPORT",
    },
  ];
  
  const users: User[] = [
    {
      id: 0,
      email: "lolproven@gmail.com",
      username: "Proven",
      role: role[1],
      team: team[3],
    },
    {
      id: 1,
      email: "marti@gmail.com",
      username: "Marti",
      role: role[5],
      team: team[3],
      lane: lane[2],
    },
    {
      id: 2,
      email: "naru@gmail.com",
      username: "Naru",
      role: role[0],
      team: team[3],
    },
    {
      id: 3,
      email: "adryh@gmail.com",
      username: "Adryh",
      role: role[5],
      team: team[3],
      lane: lane[4],
    },
  ];
  
  const clips: Clip[] = [
    {
      id: 0,
      url: "/t1VsGeng.jpg",
      startTime: "12:46",
      endTime: "14:20",
      tag: tag[0],
      isError: false,
      teamBlue: "T1",
      teamRed: "GenG",
      league: "LCK",
      match: "Week 4",
      game: "1",
      patch: "12.16",
      side: "Blue",
      notes:
        "Jg shadows Mid so he gets prio. Then they move together to Bot for a dive with a slow pushing wave.",
      // createdAt: Date,
      // updatedAt: Date,
    },
    {
      id: 0,
      url: "/t1VsGeng.jpg",
      startTime: "12:46",
      endTime: "14:20",
      tag: tag[0],
      isError: false,
      teamBlue: "T1",
      teamRed: "GenG",
      league: "LCK",
      match: "Week 4",
      game: "1",
      patch: "12.16",
      side: "Blue",
      notes:
        "Jg shadows Mid so he gets prio. Then they move together to Bot for a dive with a slow pushing wave.",
      // createdAt: Date,
      // updatedAt: Date,
    },
    {
      id: 1,
      url: "/t1VsGeng.jpg",
      startTime: "12:46",
      endTime: "14:20",
      tag: tag[0],
      isError: false,
      teamBlue: "T1",
      teamRed: "GenG",
      league: "LCK",
      match: "Week 4",
      game: "1",
      patch: "12.16",
      side: "Blue",
      notes:
        "Jg shadows Mid so he gets prio. Then they move together to Bot for a dive with a slow pushing wave.",
      // createdAt: Date,
      // updatedAt: Date,
    },
    {
      id: 2,
      url: "/t1VsGeng.jpg",
      startTime: "12:46",
      endTime: "14:20",
      tag: tag[0],
      lane: lane[5],
      isError: false,
      teamBlue: "T1",
      teamRed: "GenG",
      league: "LCK",
      match: "Week 4",
      game: "1",
      patch: "12.16",
      side: "Blue",
      notes:
        "Jg shadows Mid so he gets prio. Then they move together to Bot for a dive with a slow pushing wave.",
      // createdAt: Date,
      // updatedAt: Date,
    },
  ];
  
  const userClip: UserClip[] = [
    { id: 0, user: users[0], clip: clips[0] },
  { id: 1, user: users[1], clip: clips[1] },
  { id: 2, user: users[2], clip: clips[2] },
  { id: 0, user: users[0], clip: clips[0] },
  { id: 1, user: users[1], clip: clips[1] },
  { id: 2, user: users[2], clip: clips[2] },
  { id: 0, user: users[0], clip: clips[0] },
  { id: 1, user: users[1], clip: clips[1] },
  { id: 2, user: users[2], clip: clips[2] },
  
];

  return {tag,
    role,
    team,
    lane,
    users,
    clips,
    userClip};
  
}



// const Mocks = {
//   tag,
//   role,
//   team,
//   lane,
//   user,
//   clips,
//   userClip,
// };

export default useMocks;