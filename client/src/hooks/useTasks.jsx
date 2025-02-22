import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useTasks = (category) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();
  useEffect(() => {
    const fetchTask = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_server_api}/tasks?email=${
            user?.email
          }&category=${category}`
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

  return {tasks, setTasks, loading};
};

export default useTasks;
