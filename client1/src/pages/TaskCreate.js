import { Box } from "@mui/material"
import { Container } from "@mui/system"
import TaskForm from "../components/Taskform.js"
import Header from "./Header"
const TaskCreate = () => {
    return(<Box>
        <Container>
            <TaskForm mode="create"/>
        </Container>
    </Box>)
}

export default TaskCreate