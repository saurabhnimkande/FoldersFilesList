import { useState } from "react";

export const Folder = ({ folderData }) => {
  console.log(folderData);
  const [visible, setVisible] = useState(false);
  return (
    <div style={{ marginLeft: "30px" }}>
      <p
        onClick={() => {
          setVisible(!visible);
        }}
        style={{
          color: "white",
          backgroundColor: "black",
          padding: "5px",
          width: "200px",
          cursor: "pointer",
        }}
      >
        {folderData.name}
      </p>
      {visible ? (
        <div>
          {folderData.isFolder ? (
            <>
              {folderData.items.map((e) => (
                <div key={e.name}>
                  {e.isFolder ? (
                    <Folder folderData={e}></Folder>
                  ) : (
                    <p style={{ marginLeft: "30px" }}>{e.name}</p>
                  )}
                </div>
              ))}
            </>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};
