import React, { useState } from "react";
import useUser from "hooks/useUser";
import Modal from "components/Modal";
import Login from "components/Login";
import { useLocation } from "wouter";
import { GifsFavs , SpanGifsFavs} from "./styles";

export default function Fav({ id }) {
  const { isLogged, addFav, favs } = useUser();
  const [, navigate] = useLocation();
  const [showModal, setShowModal] = useState(false);

  const isFaved = favs.some((favId) => favId === id);

  const handleClick = () => {
    if (!isLogged) return setShowModal(true);
    addFav({ id });
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleLogin = () => {
    setShowModal(false);
  };

  const [label, emoji] = isFaved
    ? ["Remove Gif from favorites", "❌"]
    : ["Add Gif to favorites", "❤️"];

  return (
    <>
      <GifsFavs onClick={handleClick}>
        <SpanGifsFavs aria-label={label} role="img">
          {emoji}
        </SpanGifsFavs>
      </GifsFavs>
      {showModal && (
        <Modal onClose={handleClose}>
          <Login onLogin={handleLogin} />
        </Modal>
      )}
    </>
  );
}
