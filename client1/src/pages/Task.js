import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "../services/api.js";
import { setTask } from "../redux/TaskSlice.js";
import { Box, Container } from "@mui/system";
import Header from "./Header.js";
import Taskform from "../components/Taskform.js";
const Task = () => {
  const { id } = useParams();
  const [currentTask, setCurrentTask] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchTask() {
      await axios.get(`/task/${id}`).then((res) => {
        setCurrentTask(res.data.task);
        dispatch(setTask(res.data.task));
      });
    }
    fetchTask();
  }, [id, dispatch]);

  if(!currentTask) {
    return
  }
  return <Box>
    <Header />
    <Container>
        <Taskform task={currentTask} />
    </Container>
  </Box>;
};
export default Task;
