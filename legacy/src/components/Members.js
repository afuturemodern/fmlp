import styled from "styled-components";
import basak_pic from "../images/basak.png";
import chibu_pic from "../images/chibu_profile_pic.png";
import kodi_pic from "../images/kodi_profile_pic.png";

const members = [
  {
    id: 'basak',
    name: "Başak Topal",
    title: "Industrial designer, researcher",
    profile_img: "profile_img_here",
    socials: [{ img: "img_url_here", url: "link_url_here" }],
  },
  {
    id: 'chibu',
    name: "Chibu O",
    title: "founder",
    profile_img: "profile_img_here",
    socials: [{ img: "img_url_here", url: "link_url_here" }],
  },
  {
    id: 'kodi',
    name: "Kodi Mwenze",
    title: "artist and developer",
    profile_img: "profile_img_here",
    socials: [{ img: "img_url_here", url: "link_url_here" }],
  },
];

const MembersList = styled.div`
  padding: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;
const MemberItem = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 1rem;
`;
const MemberInfo = styled.div`
  background-color: #3d54b2;
  padding: 1rem;
  border-radius: .25rem;
`;

const MemberSocials = () => {
  return <div></div>;
};

const Pic = styled.img`
  width: 200px;
  height: 200px;
`;

const Members = () => {
  // return <div>members page</div>;
  return (
    <MembersList>
      {members.map((m) => (
        <MemberItem m={m} key={m.id}>
          {/* <ProfilePic src={m.profile_img}/> */}
          <Pic src={profilePics[m.id]}/>
          <MemberInfo>
            <MemberSocials socials={m.socials} />
            <div>{m.name}</div>
            <div>{m.title}</div>
          </MemberInfo>
        </MemberItem>
      ))}
    </MembersList>
  );
};

const profilePics = {
  basak: basak_pic
    , chibu: chibu_pic,
    kodi: kodi_pic
}

export default Members;
