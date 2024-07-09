import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  const data = useLoaderData();

  // const [followers, setFollowers] = useState(0);
  // const [url, setUrl] = useState("");
  // const [avatar, setAvatar] = useState("");
  // useEffect(() => {
  //   fetch("https://api.github.com/users/architkakkar")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);

  //       setFollowers(data.followers);
  //       setUrl(data.html_url);
  //       setAvatar(data.avatar_url);
  //     });
  // }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      {/* <p>Github Followers: {followers}</p> */}
      <p>Github Followers: {data.followers}</p>
      <img
        // src={avatar}
        src={data.avatar_url}
        alt=""
        className="rounded-full w-40 h-40 mx-auto my-2"
      />
      <a
        className="hover:underline text-xl"
        // href={url}
        href={data.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        🔗 Github Link
      </a>
    </div>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/architkakkar");

  return response.json();
};
