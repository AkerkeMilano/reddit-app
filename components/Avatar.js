import Image from "next/image";
import avatar from "../assets/img/avatar.png";

const Avatar = ({ user }) => {
  return (
    <div>
      <Image
        src={avatar}
        alt="redditAvatar"
        width={50}
        height={50}
      />
    </div>
  );
};


export default Avatar;
