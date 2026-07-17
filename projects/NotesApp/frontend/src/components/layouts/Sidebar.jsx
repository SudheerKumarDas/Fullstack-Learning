const Sidebar = () => {
  return (
    <div
      style={{
        width: "220px",
        borderRight: "1px solid #ddd",
        padding: "20px",
      }}
    >
      <p>All Notes</p>

      <p>Archived</p>

      <p>Pinned</p>

      <p>Trash</p>
    </div>
  );
};

export default Sidebar;
