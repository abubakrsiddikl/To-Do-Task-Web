import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useTasks = (category) => {
  console.log(category);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();
  useEffect(() => {
    const fetchTask = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_server_api}/tasks/${
            user?.email
          }?category=${category}`
        );
        setTasks(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTask();
  }, [user?.email, category]);

  return [tasks, loading];
};

export default useTasks;
