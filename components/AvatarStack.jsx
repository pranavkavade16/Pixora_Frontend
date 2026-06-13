const AvatarStack = () => {
  return (
    <div
      className="avatar-stack desktop-avatars"
      aria-label="Shared with 5 people"
    >
      {avatars.map((avatar, index) => (
        <img key={avatar} src={avatar} alt={`Collaborator ${index + 1}`} />
      ))}
      <span>+2</span>
    </div>
  );
};

export default AvatarStack;
