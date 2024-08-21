const Header = ({ unreadCount, markAllAsRead }) => {
  return (
    <>
      <header className="flex justify-between">
        <h1>
          Notifications
          {unreadCount > 0 && <span>{unreadCount}</span>}
        </h1>
        <button onClick={markAllAsRead}>Mark all as read</button>
      </header>
    </>
  );
};

export default Header;
