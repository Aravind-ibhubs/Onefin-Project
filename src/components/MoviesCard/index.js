/*const MoviesCard = (props) => {
  const { details } = props;
  const { description, genres, title, uuid } = details;

  const getAvatar = async () => {
    const avatarUrl = `https://ui-avatars.com/api/?name=${title}`;
    const options = {
      headers: {
        Accept: "image/svg+xml",
      },
      method: "GET",
    };
    const avatar = await fetch(avatarUrl, options);

    const avatarImage = avatar.url;
    return avatarImage;
  };

  return (
    <div>
      <p>{title[0]}</p>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{genres}</p>
    </div>
  );
};*/

import { Component } from "react";
import Modal from "react-modal";
import {
  CardContainer,
  InitialLetter,
  DetailsCard,
  NormalHeading,
  NormalDescription,
} from "./styledComponent";

const MoviesCard = (props) => {
  const { details, openModal } = props;
  const { description, genres, title, uuid } = details;

  const cardClick = () => {
    openModal(uuid);
  };

  return (
    <CardContainer onClick={cardClick}>
      <InitialLetter>{title[0]}</InitialLetter>
      <DetailsCard>
        <NormalHeading>
          Name: <NormalDescription>{title}...</NormalDescription>
        </NormalHeading>
        <NormalHeading>
          description:{" "}
          <NormalDescription>{description.slice(0, 50)}...</NormalDescription>
        </NormalHeading>
        <NormalHeading>
          Genre: <NormalDescription>{genres}...</NormalDescription>
        </NormalHeading>
      </DetailsCard>
    </CardContainer>
  );
};

export default MoviesCard;
