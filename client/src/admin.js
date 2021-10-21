import React, { useEffect } from "react";
import api from "./api";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Admin = () => {
  const history = useHistory();
  useEffect(() => {
    const auth = async () => {
      try {
        const data = await api.get("admin/", {
          withCredentials: true,
        });
        console.log(data);
      } catch (e) {
        history.push("/");
      }
    };
    auth();
  }, []);
  return (
    <div>
      <h1>ADMIN PANEL</h1>
    </div>
  );
};

export default Admin;
