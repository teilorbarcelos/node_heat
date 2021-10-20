import { httpServer, port } from "./app";

httpServer.listen(port, () => console.log(`Server runing on http://localhost:${port}`))