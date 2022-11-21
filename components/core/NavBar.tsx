import React, { useState } from "react";

const NavBar = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  function triggerDarkMode() {
    setDarkMode(!isDarkMode);
  }

  const [isMuted, setMuted] = useState(false);
  function triggerMute() {
    setMuted(!isMuted);
  }

  return (
    <div className="flex justify-end gap-x-4">
      {isDarkMode ? (
        <img
          src="/light-icon.svg"
          alt="Light Mode Icon"
          width={26}
          className="cursor-pointer"
          onClick={triggerDarkMode}
        />
      ) : (
        <img
          src="/dark-icon.svg"
          alt="Dark Mode Icon"
          width={26}
          className="cursor-pointer"
          onClick={triggerDarkMode}
        />
      )}

      {isMuted ? (
        <img
          src="/speaker-icon.svg"
          alt="Unmuted Icon"
          width={32}
          className="cursor-pointer"
          onClick={triggerMute}
        />
      ) : (
        <img
          src="/mute-icon.svg"
          alt="Unmuted Icon"
          width={32}
          className="cursor-pointer"
          onClick={triggerMute}
        />
      )}
    </div>
  );
};

export default NavBar;
